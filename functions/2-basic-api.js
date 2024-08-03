

//Importing product data

const items = require('../assets/data.js')


//Domain/.netlify/functions/1-hello
exports.handler = async (event, context, cb) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode: 200,
        body: JSON.stringify(items),
    }
}

