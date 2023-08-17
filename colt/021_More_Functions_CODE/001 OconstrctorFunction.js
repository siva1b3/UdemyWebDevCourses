// constrctor Functions 
function person({ firstName, LastName, dob, gender }) {
    this.firstName = firstName
    this.LastName = LastName
    this.dob = new Date(dob)
    this.gender = gender
    this.getFullName = function () {
        return `${this.firstName} ${this.LastName}`
    }
    this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
}

pesron1Data = {
    firstName: "Siva",
    LastName: "naga",
    dob: "2000-01-21",
    gender: "male"
}

const person1 = new person(pesron1Data)
console.log(person1.getFullName())
console.log(person1.getBirthYear())