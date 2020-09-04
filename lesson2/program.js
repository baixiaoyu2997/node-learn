const args=process.argv.slice(2)
const sum=args.reduce((total,current)=>{
    return Number(total)+Number(current)
},0)
console.log(sum)