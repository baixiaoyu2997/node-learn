const http = require("http");

http.get(process.argv[2], (res) => {
    let dataStr=''
    res.setEncoding("utf-8")
    res.on('data',data=>{
        dataStr+=data
    })
    res.on('end',()=>{
        console.log(dataStr.length)
        console.log(dataStr)
    })
}).on('error',(e)=>{
    console.error(e)
})
