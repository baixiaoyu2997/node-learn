const fs=require('fs')
const path=require('path')
fs.readdir(process.argv[2],(err,list)=>{
    list.forEach(x=>{
        if(path.extname(x)==='.'+process.argv[3])console.log(x)
    })
})
