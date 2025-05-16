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

classCollection.src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dc.com%2Fblog%2F2024%2F10%2F11%2Fabsolute-interview-discovering-the-fears-of-a-modern-batman&psig=AOvVaw2hEogTFaAk0o8X-bmsLROM&ust=1747467412714000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi8-MC9p40DFQAAAAAdAAAAABAL";
'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dc.com%2Fblog%2F2024%2F10%2F11%2Fabsolute-interview-discovering-the-fears-of-a-modern-batman&psig=AOvVaw2hEogTFaAk0o8X-bmsLROM&ust=1747467412714000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLi8-MC9p40DFQAAAAAdAAAAABAL'
classCollection.src="https://static.dc.com/2024-10/2024_10_09_AbsoluteBatman1_BlogRoll_Mobile_4x3.jpg";
'https://static.dc.com/2024-10/2024_10_09_AbsoluteBatman1_BlogRoll_Mobile_4x3.jpg';

*/