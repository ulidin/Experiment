//console.log(document.getElementById("third").innerHTML);

// let tags = document.getElementsByTagName("p");
// console.log(tags);


// let tags = document.getElementsByTagName("p");
// for (let i = 0; i < tags.length; i++) {
//     console.log(tags[i]);
// }


// let tags = document.getElementsByTagName("p");
// for (let element of tags) {
//     console.log(element);
// }

// let tags = document.getElementsByTagName("p");
// let prefix = " Batman says: "
// for (let element of tags) {
//     //två raderna nedan är samma
//     //element.innerHTML = element.innerHTML + " Batman";
//     //element.innerHTML += " Batman";
//     // element.innerHTML = "Batman " + element.innerHTML + " hello world";
//     element.innerHTML = prefix + element.innerHTML + " hello world";
// }



let tags = document.getElementsByTagName("p");
let prefix = " Batman says: "
for (let element of tags) {
    //    element.innerHTML = prefix + element.innerHTML + " hello world";
}


let age = document.getElementById("age");

console.log(age.innerHTML);
age.lastElementChild.after(

    age.firstChild.nextSibling.after()
)