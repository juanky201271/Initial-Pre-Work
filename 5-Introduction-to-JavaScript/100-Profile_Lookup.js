// I learn more about for loops
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  var valueReturn = "No such contact";
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      // find name
      if (contacts[i].hasOwnProperty(prop)) {
        // find prop
        valueReturn = contacts[i][prop];
      } else {
        // no find prop
        valueReturn = "No such property";
      }
      break;
    }
  }
  return valueReturn;
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
