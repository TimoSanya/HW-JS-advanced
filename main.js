const persons = [];
//click Add person => add unique person to array persons and add person to
//ordered list id="personsList"

//click Get stats => add after <h2>Stats</h2>: average age, min age, max age
const statistic = document.getElementById('stats')
const personsList= document.getElementById("personsList");
const addBtn= document.getElementById("addPerson");
const calcBtn= document.getElementById("calcStats");

addBtn.onclick = addPerson;
calcBtn.onclick = calcStats;

function Person(id, firstName, lastName, age){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
}

function addPerson() {

    const personId = document.getElementById("personId");
    const personFirstName = document.getElementById("firstName");
    const personLastName = document.getElementById("lastName");
    const personAge = document.getElementById("age");

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

        personsList.appendChild(ListOfPersons);
        persons.push(person);

    } else {
        alert("Person with this ID already exist!");
    }

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

