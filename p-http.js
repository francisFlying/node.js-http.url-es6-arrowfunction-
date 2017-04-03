var http=require("http");
var server=http.createServer();
server.on("request",function(req,res){
    res.end("hello node-http");
});
server.listen(3000,"127.0.0.1",function(err){
    if(err){
        console.log(err);
    }
    console.log("launch successfully");
})