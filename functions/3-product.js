const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('appc5JvV86warsg5A')
  .table('products');

exports.handler = async (event, context, cb) => {
  console.log(event);
  const { id } = event.queryStringParameters;

  if (id) {
    try {
      const product = await airtable.retrieve(id);
      console.log(product);

      if (product.error) {
        return {
          statusCode: 404,
          body: `No Product with ID, please provide product with an id of ${id}`,
        };
      }

      return {
        statusCode: 200,
        body: JSON.stringify(product)
      };
    } catch (error) {
      return {
        statusCode: 404,
        body: `No Product with id:${id}`,
      };
    }
  }
  
  return {
    statusCode: 400,
    body: 'Please provide a PRODUCT ID',
  };
};