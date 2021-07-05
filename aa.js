const http=require('http');

const server=http.createServer((req,res)=>
{
    console.log("got the request");
});

server.listen(3001,'localhost',()=>
{
console.log("listening on 3000");

});