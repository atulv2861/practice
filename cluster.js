const cluster=require('node:cluster');
const os=require('os');
const express=require('express');

const totalCpus=os.cpus().length;

if(cluster.isPrimary){
    for(let i=0;i<totalCpus;i++){
        cluster.fork();
    }
}else{
    const app=express();
    const PORT=8000;

    app.get("/",(req,res)=>{
        return res.json({
            message:`Hello from express server ${process.pid}`
        })
    })

    app.listen(PORT,()=>console.log(`Server started at PORT ${PORT}`))
}