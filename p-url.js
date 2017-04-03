const http=require("http");
const url=require("url");
const server=http.createServer();
server.on("request",function(req,res){
    var urlString=req.url;
    var urlObj=url.parse(urlString,true);
    console.log(urlObj.pathname);
    console.log(urlObj.query.username);
});
server.listen(3000,"127.0.0.1",function(err){
    if(err){
        console.log(err);
    }
    console.log("launch successfully");
})