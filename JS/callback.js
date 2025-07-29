// call back

function orderfood(param){
    setTimeout(() => {
        console.log("Food Ordered");
        param()
    }, 2000);
}

function eatfood(){
    console.log("Going to Eat");    
}

orderfood(eatfood)
