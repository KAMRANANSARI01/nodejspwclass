const http = require("http");

let opt = {
    hostname: 'fakestoreapi.com',
    path: '/products/1', // The correct path should be '/products/1' instead of '/product/1'
    method: 'GET'
};

const reqapi = http.request(opt, (req) => { // Changed 'reqapi' to 'res' for better readability

    req.on('data', (data) => {
        console.log(data.toString())
    });

});

reqapi.on('error', (e) => { // Added 'e' as a parameter to catch the error
    console.log(e);
});

reqapi.end();
