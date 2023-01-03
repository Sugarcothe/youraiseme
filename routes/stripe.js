import express from "express"
import Stripe from "stripe"

export const stripeRouter = express.Router()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

stripeRouter.post("/payment", (req, res)=> {
    stripe.charges.create({
        source:req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
    }, (stripeErr, stripeRes)=> {
        if(stripeErr){
            res.status(500).json(stripe)
        } else {
            res.status(200).json(stripeRes)
        }
    })
})