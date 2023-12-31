const persons = [];

const statistic = document.getElementById('stats')
const personsList= document.getElementById("personsList");
const addBtn= document.getElementById("addPerson");
const calcBtn= document.getElementById("calcStats");

const personId = document.getElementById("personId");
const personFirstName = document.getElementById("firstName");
const personLastName = document.getElementById("lastName");
const personAge = document.getElementById("age");

addBtn.onclick = addPerson;
calcBtn.onclick = calcStats;

function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}

function addPerson() {



    let text = personFirstName.value;
    let pattern = /[a-z, A-Z]/g;
    if(text.match(pattern))
    {
        alert("!!!!")
    }




    const index = findPersonId(persons, personId.value)
    if (index === -1) {
        const person = new Person(
            personId.value,
            personFirstName.value,
            personLastName.value,
            personAge.value
        )

    const ListOfPersons = document.createElement("li");
    ListOfPersons.innerHTML =  `ID: ${person.id} Name: ${person.firstName},
    Last name: ${person.lastName}, Age: ${person.age}`;

    const errorMessage =  validatePerson();
    if (errorMessage !== "") {
        alert(errorMessage);
    } else {
        personsList.appendChild(ListOfPersons);
        persons.push(person);
    }

    } else {
        alert("Person with this ID already exist!");
    }
}

function validatePerson() {
    let errorMessage = "";
    
    if(personId.value.length === 0)
        errorMessage = "Please fill the ID"
    else if (personFirstName.value.length === 0)
        errorMessage = "Please fill the First name";
    else if (personLastName.value.length === 0)
        errorMessage = "Please fill the Last name";
    else if(personAge.value.length === 0)
        errorMessage = "Please fill the age";


    return errorMessage;
}


function findPersonId(persons, id) {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].id === id) {
            return i;
        }
    }
    return -1;
}


function calcStats() {
    let minAge = 0;
    let maxAge = 0;
    let aveAge = 0;

    const sum = persons.reduce((accum, currentValue) => {
        accum += currentValue.age;

        if(currentValue.age < minAge || minAge === 0) {
            minAge = currentValue.age
        }

        if(currentValue.age > maxAge) {
            maxAge = currentValue.age
        }

        return accum;
    }, 0)

    aveAge = Math.trunc( sum / persons.length)

    const ages = document.createElement('div');
    ages.innerHTML = `Min age: ${minAge} Max age: ${maxAge} Average age: ${aveAge}`
    statistic.appendChild(ages);
}



