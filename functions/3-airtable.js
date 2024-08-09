
const Airtable = require('airtable-node');
 
const airtable = new Airtable({ apiKey: 'patV82muFEGIJENN9.042040bf5e397066ff9e4ad3374190a70337c8f2fb6b51d26062d63ac6a143d9' })
  .base('appc5JvV86warsg5A')
  .table('products')
 


//Domain/.netlify/functions/1-hello
exports.handler = async (event, context, cb) => {

  try {
    const data = await airtable.list();
    console.log(data);
  } catch (eroror) {}
    return {
        statusCode: 200,
        body: 'I love solving challenging problems to help others :)'
    }
}