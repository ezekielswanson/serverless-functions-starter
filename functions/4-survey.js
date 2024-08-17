
//Installing Node wrapper for Airtable API
const Airtable = require('airtable-node');
require('dotenv').config();

//Accessing Airtable via API Key, Base ID, & Table Name
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
    .base('appc5JvV86warsg5A')
    .table('survey');


//Domain/.netlify/functions/4-survey.js
exports.handler = async (event, context, cb) => {
    try {

        /*
        const response = await airtable.list();
        console.log(response.records);
        */
        
        const {records} = await airtable.list();
        console.log(records);

        const survey = records.map(item => {
            const {id} = item;
            const {room,votes} = item.fields
            return {id, room, votes}
        })

        return {
            statusCode: 200,
            body: JSON.stringify(survey),
        }

        


    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server erro please check logs'
        }


    }

    
  
    
}










