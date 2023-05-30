

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(num){
    return (plusNum) => {
        return num + plusNum;
    }
}
let plus15 = plus(15);
console.log(plus15(10));

//exercise 2
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  users.forEach((userDetail) => {
    console.log(userDetail.name);
  });

// exercise 3
console.log("EXERCISE 3:\n==========\n");
let namesAndScores = users.map((user) => {return {name: user.name, score: user.score}});
console.log(namesAndScores);

// exercise 4
console.log("EXERCISE 4:\n==========\n");

let activeUsers = users.filter((user)=> user.isActive == true);
console.log(activeUsers);

// exercise 5
console.log("EXERCISE 5:\n==========\n");
users.sort((a, b) => b.score - a.score);
console.log(users);

// exercise 6
console.log("EXERCISE 6:\n==========\n");
//  Use the Array reduce method to return sum of all users' scores. Once you have the sum of all scores, find the average score 
//from the users. Start with the previously defined users array.
const sum = users.reduce((accumulator,currentObject) => {accumulator += currentObject.score; return accumulator;}, 0);
console.log(sum);
