const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath)
            person.age = person.yearOfDeath - person.yearOfBirth;
        else
            person.age = (new Date().getFullYear()) - person.yearOfBirth;
    });

    return people.reduce((oldest, person) => oldest.age > person.age? oldest : person
    );
};

// Do not edit below this line
module.exports = findTheOldest;
