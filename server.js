const http=require('http')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});
app.get("/",(req,res,next)=>{
res.send("randiap")
res.end()

})
ddos(3)
function ddos(index){
    const uril="http://tatras"+index+".herokuapp.com/"
    http.get(uril, {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(pythonData)
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}