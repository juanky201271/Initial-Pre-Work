// I learn how to use objects for lookups
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var myObject = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result = myObject[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");
