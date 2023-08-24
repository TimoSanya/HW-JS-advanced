let group1 = {
    title: 'Java-53',
    students: ['Anna', 'Aksinia', 'Anastasia'],
    showList1: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }.bind(this)

        this.students.forEach(show);
    }
}

group1.showList1();
// const newGroup1 = group1;
// group1 = null;
console.log('===================');
// newGroup1.showList1();

let group2 = {
    title: 'Java-53',
    students: ['Anna', 'Aksinia', 'Anastasia'],
    showList2: function () {
        const show = function (name) {
            console.log(`${this.title}: ${name}`);
        }

        this.students.forEach(show.bind(this));
    }
}


group2.showList2();
// const newGroup2 = group2;
// group = null;
console.log('+++++++++++++++++');
// newGroup2.showList2();


let group3 = {
    title: 'Java-53',
    students: ['Anna', 'Aksinia', 'Anastasia'],
    showList3: function () {
        const show =  (name) => {
            console.log(`${this.title}: ${name}`);
        }

        this.students.forEach(show);
    }
}


group3.showList3();
// const newGroup3 = group3;
// group3 = null;
console.log('______________________');
// newGroup3.showList3();



let group4 = {
    title: 'Java-53',
    students: ['Anna', 'Aksinia', 'Anastasia'],
    showList4: function () {
        const show = function (name) {
            console.log(`${t.title}: ${name}`);
        }
        const  t = this;

        this.students.forEach(show);
    }
}


group4.showList4();
// const newGroup4 = group4;
// group4 = null;
console.log('-----------------');
// newGroup4.showList4();
