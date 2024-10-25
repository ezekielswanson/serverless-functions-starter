require('dotenv').config()
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_KEY)

exports.handler = async (event, context, cb) => {
    const method = event.httpMethod;
    if (method !== 'POST') {
        return {
            statusCode: 405,
            body: 'This only accepts POST requests.'
        }
    }

    const { purchase, total_amount, shipping_fee } = JSON.parse(event.body);
    //add shipping fee and total amount
    //create function 
    //what's the function doing?
    //does function need data? 
    //if yess what aparemters & arguments 
    //does the data need to be used somwhere else?
    //what neeeds to happen insdie the functon to add the total fee?
    //total_amount + shipping_fee 


    const calculateOrderTotal = () => {
        return  total_amount + shipping_fee;
    }



    //stripe = stripe "instance"
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderTotal(),
            currency: 'usd',
        })

        return {
            statusCode: 200,
            body: JSON.stringify({ clientSecret: paymentIntent.client_secret })

        }

        } catch (error) {
            return {
                statusCode: 400,
                body: JSON.stringify(error.message)

        }
    }

    //console.log(purchase, total_amount, shipping_fee)

   
}