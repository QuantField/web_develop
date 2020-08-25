// objects

let student = {
    first: 'Joe',
    last: 'Haroon',
    age: 25,
    studentInfo: function() {
        return this.first + ' ' + this.last;
    }
}


console.log(student.first, student['age'])
console.log(student.studentInfo())

// using constructors 

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.info = function () { return 'testing only';}
}

car1 = new Car('Citroen', 'Picasso', 2007)
console.log(car1, car1.info())