const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: 'patV82muFEGIJENN9.042040bf5e397066ff9e4ad3374190a70337c8f2fb6b51d26062d63ac6a143d9' })
  .base('appc5JvV86warsg5A')
  .table('products')

// Domain/.netlify/functions/1-hello
exports.handler = async (event, context) => {
  try {
    const { records } = await airtable.list();
    console.log(records);

    const products = records.map(product => {
      const { id } = product;
      const { Name, image, price } = product.fields;
      // Accessing first img in the loop
      const url = image[0].url;
      return { id, name: Name, url, price };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Data was not returned.' })
    };
  }
};