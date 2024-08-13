const findTheOldest = function(people) {
    
    // map each person to their age
    let ages = people.map((person) => {
        
        // initialize current date object
        let currentDate = new Date();

        // if yearOfDeath is missing, calculate age upto current year
        if (person.yearOfDeath === undefined) {
            let age = (currentDate.getFullYear() - person.yearOfBirth);
            return age;
        }
        else {
            let age = (person.yearOfDeath - person.yearOfBirth);
            return age;
        }
    })

    // oldest guy initialization
    let oldest = {
        index: -1,
        age: 0
    };

    // find the index with greatest value in ages
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldest.age) {
            oldest.age = ages[i];
            oldest.index = i;
        }
    }

    // get the object at oldest.index in people
    return people[oldest.index];
};

// Do not edit below this line
module.exports = findTheOldest;
