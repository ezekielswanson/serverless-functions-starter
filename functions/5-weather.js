

exports.handler = async (event, context, cb) => {
    const method = event.httpMethod;
    const {city} = JSON.parse(event.body);
    console.log(city);
    
    return {
        statusCode: 200,
        body: JSON.stringify(city),
    }
}