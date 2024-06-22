// : Explain how to handle errors in a callback pattern.


function asynTask (callback : any){
    setTimeout(()=>{
        callback(null,'Error')
    },10000)
    
    
}

asynTask((errors : any,data : any)=>{

if (errors) {
    throw errors
    
}else{
    console.log(data)
}
})