'use strict';

// Import the Dialogflow module from the Actions on Google client library.
const {dialogflow} = require('actions-on-google');

// Import the firebase-functions package for deployment.
const functions = require('firebase-functions');

// Instantiate the Dialogflow client.
const app = dialogflow({debug: true});

// Handle the Dialogflow intent named 'favorite number'.
// The intent collects a parameter named 'number'.
app.intent('favorite number', (conv, {number}) => {
  const oddOrEven = (number % 2 === 0) ? 'even' : 'odd';
  conv.close('Your favorite number is ' + oddOrEven);
});

// Set the DialogflowApp object to handle the HTTPS POST request.
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);
