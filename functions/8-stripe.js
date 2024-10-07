

exports.handler = async (event, context, cb) => {


// This is your test secret API key.
const stripe = require("stripe")('pk_test_51Q76IEE95rxLZwVsKdjbdOAd71h2vBnH30c3L8UEB5ndfDJIi6uKqdd5emTC2I523tctbDxS9RSOpMcY7DH0or1h00mz5OUvFV')

app.post("/create-payment-intent", async (req, res) => {
    const {items} = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
            amount: calculateOrderAmount(items),
            currency: "usd",
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            automatic_payment_methods: {
            enabled: true,
        },
    })

    res.send({
        clientSecret: paymentIntent.client_secret,
        // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
        dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
      });

}


    return {
        statusCode: 200,
        body: 'I love solving challenging problems to help others :)'
    }
}