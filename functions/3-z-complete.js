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
  
  try {
    const { records } = await airtable.list();
    console.log(records);

    const products = records.map(product => {
    //destrucruing = extracting values storing them in object param
    const { id } = product;
    //dot notate into nested fields object value
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