const {Worker}=require('worker_thread');

app.get("/extenciveTask",(req,res)=>{
    let worker = new Worker('./worker.js');
    worker.on('message',(data)=>{
        console.log(data);
        res.status(200).json(data);
    })
})