const fs=require('fs')
fs.readFile(process.argv[2],(err,data)=>{
    const arr=data.toString().split('\n')
    console.log(arr.length-1)
})
