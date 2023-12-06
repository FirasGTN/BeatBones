require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

module.exports = async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Spatula company",
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: "Payment successful",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};
