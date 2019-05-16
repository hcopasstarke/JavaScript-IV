// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak() {
        return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location} are the object's own props`
    }
}
class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject) {
        console.log(`${student} receives a perfect score on ${subject}`);
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.grade = attributes.grade;
    }
    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }
    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
    instructorGrade() {
        return Math.floor(Math.random() * 100 + 1);
    }
    grade() {
        return Math.floor(Math.random() * 100 + 1);
    }
    graduate() {
        if(student.grade() - dan.grade > 70) {
            console.log(`${this.name} has graduated!`);
        } else {
            console.log(`${this.name} has failed.`);
        }
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student}'s code on ${subject}`);
    }
}

const dan = new Instructor({
    name: "Dan",
    specialty: "Web-Development",
    favLanguage: "JavaScript",
    catchPhrase: "Don't forget the homies"
});
    
const devin = new Person({
    name: "Devin",
    age: 28,
    location: "California"
});

const jay = new Student({
    name: "Jay",
    previousBackground: "Construction Worker",
    className: "WEB20",
    favInstructor: "Josh Knell",
    favSubjects: ['Math', 'Science', 'Social Studies', 'Programming']
});

const adam = new ProjectManager({
    name: "Adam",
    gradClassName: "WEB19",
    favInstructor: "Josh Knell"
});

console.log(jay.PRAssignment('PRA'));
console.log(adam.standUp('group channel'));
console.log(jay.listsSubjects()); 
console.log(jay.sprintChallenge('JavaScript'));
console.log(devin.speak());
console.log(adam.debugsCode('Mike', 'LESS'));  
console.log(dan.demo('parameters'));
console.log(dan.grade('Mike', 'JS classes'));
console.log(jay.grade());
console.log(dan.instructorGrade());