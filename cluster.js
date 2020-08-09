const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) { 
  const workers=[]
  const num_processes = os.cpus().length;
  console.log("core speed is "+os.cpus())
  var spawn = function(i) {
    workers[i] = cluster.fork();

    // Optional: Restart worker on exit

    workers[i].on('exit', function(worker, code, signal) {
        // logger.log('respawning worker', i);
        console.log('respawning worker', i)
        spawn(i);
    });
};
// setInterval(callAttackServer,100)
// var count=0
// const urilArray=["fedros","tatras13","tatras","tatras12"]
// function callAttackServer(){
// workers[count].send({initial:urilArray[count]})
// count+=1;
// if(count>3) count=0
// }

// Spawn workers.
for (var i = 0; i < num_processes; i++) {
    spawn(i);

}

} else {
  require('./server');
}