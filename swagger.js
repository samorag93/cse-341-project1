const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User Api',
        description: 'User Api'
    },
    host: 'localhost:3000',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// create swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);