const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KvXFcENfSnR8Ud3XCoiHms4xhkSPueG2zSqBvUkkc3iCTgHfL66mhS69RqjMm8W4EpnkOpCRd74EiRtYUCtyw1C004NqP4mOf');

// API

// app config
const app = express();

// middlewares
app.use(cors({ orgin: true }));
app.use(express.json());

// api routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received BOMMM!!, for this amount >>>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    })

    // OK - Create
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// example endpoint
// http://localhost:5001/clone-9d90e/us-central1/api
// listen command
exports.api = functions.https.onRequest(app);