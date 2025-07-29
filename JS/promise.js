//promise

function roomclean(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let room=true
            if(room){
                resolve("Cleaned")
            }
            else{
                reject("Not Cleaned")
            }
        }, 5000)
    })
}

function washing(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let wash=true
            if(wash){
                resolve("Washed")
            }
            else{
                reject("Not Washed")
            }
        }, 3000)
    })
}

function cooking(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let cook=false
            if(cook){
                resolve("Cooked")
            }
            else{
                reject("Not Cooked")
            }
        }, 2000)
    })
}

// roomclean().then((val)=>{console.log(val); return washing()})
//            .then((value)=>{console.log(value); return cooking()})
//            .then((values)=>{console.log(values); console.log("All are Completed")})
//            .catch((err)=>{console.log("ERROR: ",err)})

async function work(){
    try{
        const rc=await roomclean()
        console.log(rc)
        const w=await washing()
        console.log(w)
        const c=await cooking()
        console.log(c)
    }
    catch(err){
        console.log("ERROR: ",err);
        
    }
}
work()
