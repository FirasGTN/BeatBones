const User = require("../../models/User")
const bcrypt = require("bcrypt")
module.exports =  async(req,res)=>{
    try {
        let {username,email,password} = req.body
        let existemail = await User.findOne({email})
        if (existemail){
            return res.status(401).json({status : false , message : "the email alredy exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashpas = await bcrypt.hash(password,salt)
        const newUser = new User({
            username,
            email,
            password : hashpas
        })
        await newUser.save()
        console.log("ok")
        res.status(201).json({status : true , message : "the account registed succefully"})
    } catch (error) {
        if (error.errors.email) {
            return res.status(401).json({status : false , error : error.errors.email.message})
        }
        else if (error.errors.username) {
            return res.status(401).json({status : false , error : error.errors.username.message})
        }
        else if (error.errors.password) {
            return res.status(401).json({status : false , error : error.errors.password.message})
        }
    }
}