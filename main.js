const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.end('this page is home')
    }
    if(req.url === '/login')
    {
        res.end('this page is login')
    }
    res.end(`<h1>Oops!</h1>
        <p>We can not find this page</p>
        <a href ='/'> back to home </a>`)

})

server.listen(5000)