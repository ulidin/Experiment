class Students {
    constructor(student_name) {
        console.log("Inne i klassen: " + student_name);
        this.name = student_name;

    }

}

let studenta = new Students("Krille");

console.log(studenta);


let student = {
    namn: "Sture",
    age: 18,
    haircolor: "svart"

};
console.log("Objectet student: " + student.namn + ", " + student.age);