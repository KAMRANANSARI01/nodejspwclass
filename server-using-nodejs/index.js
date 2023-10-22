const http = require("http");
const port = 3013;
const hostname = "localhost"
// stablishing server

const server = http.createServer((req,res)=>{
    if(req.url =='/'){
        res.statusCode = 200;
    res.setHeader('content-Type' , 'text/plain' )
    res.end("node server is live by kamran");
    }else if(req.url == '/contact'){
        res.statusCode = 200;
        res.setHeader('content-Type','text/plain')
    }else if (req.url == '/product'){
        // here we are fetching data from other server by connection to that server.
        const object = {
            basename : 'fakestoreapi.com',
            path : '/products/1',
            method : 'GET'
        }
        const req = http.request(object , (req)=>{
            req.on('data',(data)=>{
                res.statusCode = 200;
                res.setHeader('content-Type', 'application/json')
                res.end (JSON.stringify(data))
            })
        })
    
    }
    

    // u can send json to the client page
    // res.statusCode = 500;//statuscode 500 means there is some error in server side.
    // res.setHeader('content-Type','application/json');
    // res.end(JSON.stringify({err : 'server throwing error'}))
});

server.listen(port,()=>{
    console.log(`server is live on ${hostname} : ${port}`)
});

