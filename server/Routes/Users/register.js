const User = require("../../models/User")

module.exports =  async(req,res)=>{
    try {
        let {username,email,password} = req.body
        let existemail = await User.findOne({email})
        if (existemail){
            return res.status(401).json({status : false , message : "the email alredy exist"})
        }
        const newUser = new User({
            username,
            email,
            password
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