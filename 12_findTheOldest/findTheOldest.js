const findTheOldest = function(people) {
    let newPeopleArray = [];
    let ages = [];
    let maxAge = 0;
    let oldest = "";
    // let year = currentTime.getFullYear();
    let date = new Date();

    for(let i = 0; i < people.length; i++){
        if(people[i].includes(people.yearOfDeath)){
            newPeopleArray.push({name: people[i].name, age: people[i].yearOfDeath - people[i].yearOfBirth});
        } else {
            newPeopleArray.push({name: people[i].name, age: parseInt(date.getFullYear()) - people[i].yearOfBirth});
        }
        
    }

    for(let i = 0; i < newPeopleArray.length; i++){
        if(newPeopleArray[i].age > maxAge){
            maxAge = newPeopleArray[i].age;
            oldest = newPeopleArray[i].name;
        }
    }
    console.log(date.getFullYear());
    
    
    console.log(oldest);

    console.log(newPeopleArray[0]);
    console.log(newPeopleArray[1]);
    console.log(newPeopleArray[2]);

};
const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;
