let toDo = ["add", "sub", "mul", "del"];

let req = prompt("Enter your request");

while(true){
    if(req =="quit"){
        console.log("You are quitting the app");
        break;
    }
    if(req =="add"){
        toDo.push("avg");
    } else if ( req == "delete"){
        toDo.pop();
    }else if(req == "list"){
        for(list of toDo){
            console.log(list);
        }
    }
}
