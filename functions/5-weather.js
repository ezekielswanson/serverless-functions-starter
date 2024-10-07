exports.handler = async (event, context, cb) => {
    console.log('Raw event body:', event.body);
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            receivedBody: event.body,
            bodyType: typeof event.body
        }),
    };
};