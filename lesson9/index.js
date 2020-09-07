const http=require('http')
const asyncReq=(url)=>{
    return new Promise((resolve,rej)=>{
        http.get(url,resp=>{
            let dataStr=''
            resp.setEncoding('utf-8')
            resp.on('data',(data)=>dataStr+=data)
            resp.on('end',()=>{
                console.log(dataStr)
                resolve()
            })
        })
    })
}
const getAll=async (url1,url2,url3)=>{
    await asyncReq(url1)
    await asyncReq(url2)
    await asyncReq(url3)
}
getAll(process.argv[2],process.argv[3],process.argv[4])