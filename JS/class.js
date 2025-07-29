//class

class Info{
    name="Sobana"
    age=27
    job_role="Home Maker"

    details(){
        console.log("Name: ",this.name,"Age: ",this.age,"Role: ",this.job_role)
    }
}
let print=new Info
console.log(print.name)
print.details()

let sob=new Info
sob.details()


//class constructor

class Movie{
    constructor(name,language,price,time){
        this.name=name
        this.language=language
        this.price=price
        this.time=time
    }

    print(){
        console.log("Movie Name: ",this.name)
        console.log(`Language: ${this.language}`) //J Query
        console.log("Ticket Price: ",this.price)
        console.log(`Time: ${this.time}`) //J Query
    }
}

let eleven=new Movie("Eleven","Tamil",250,"6PM")
eleven.print()
let leo=new Movie("Leo","Tamil",270,"7PM")
leo.print()
