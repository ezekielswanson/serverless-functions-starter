// Installing Node wrapper pckg for Airtable API
const Airtable = require('airtable-node');
require('dotenv').config();

// Creating New Instance & 
// Gives *ACCESS* to Airtable via API Key, Base ID, & Table Name
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appc5JvV86warsg5A')
  .table('survey');

// Domain/.netlify/functions/4-survey.js
exports.handler = async (event, context, cb) => {
  // storing data in a variable to be used
  const method = event.httpMethod;

  if (method === 'GET') {
    try {
      /*
      const response = await airtable.list();
      console.log(response.records);
      */
      
      const { records } = await airtable.list();
      console.log(records);

      const survey = records.map(record => {
        const { id } = record;
        const { room, votes } = record.fields;
        return { id, room, votes };
      });

      return {
        statusCode: 200,
        body: JSON.stringify(survey),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: 'Server error please check logs'
      };
    }
  }
};

if (method === 'PUT') {

}

//default resp.
return (
    statusCode: 405,
    body: 'Only GET & PUT request allowed',
)
