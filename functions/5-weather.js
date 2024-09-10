

exports.handler = async (event, context, cb) => {
    const method = event.httpMethod;
    console.log(method);
    
    return {
        statusCode: 200,
        body: 'I love solving challenging problems to help others :)'
    }
}