let msg = "help!";
let newmsg = msg.trim();
let upper = msg.toUpperCase()
console.log(newmsg, upper);



let name = "apnaCollege";
let newname=name.slice(4,9);
let nameindex = name.indexOf("na");
let repname = name.replace("apna","Our");
console.log(newname,nameindex,repname);

let sep = name.slice(4);
let rep = sep.replace("l","t");
console.log(sep,rep);
