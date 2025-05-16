/* Select Element : "getElementById" => Returns the Element as an object or null (if not found).

It is actually a metthod of document object.

By using this method we can select Elements by their id names.
*/


/* ById 
console.dir(document);

let imgObj = document.getElementById("mainImg");

imgObj.src="assets/creation_1.png";
*/
/* ByTagName

let tagCollection = document.getElementsByTagName("h1");

let tagCollection = document.getElementsByTagName("h1").innerHTML("PETER");

tagCollection.innerHTML


tagCollection[0].innerHTML="PETER";
'PETER'
*/

/* ByClassName

let classCollection = document.getElementsByClassName("oldImg");

classCollection.length

for (let i = 0; i < classCollection.length; i++) {
    console.log(`value is change to ${i}`);
}


for (let i = 0; i < classCollection.length; i++) {
    console.log(`value is change to ${i+1}`);
}

classCollection[0].src="https://static.dc.com/2024-10/2024_10_09_AbsoluteBatman1_BlogRoll_Mobile_4x3.jpg";

*/