
//Domain/.netlify/functions/1-hello
exports.handler = async (event, context, cb) => {
    return {
        statusCode: 200,
        body: 'I love solving challenging problems to help others :)'
    }
}