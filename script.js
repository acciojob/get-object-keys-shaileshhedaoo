//your JS code here. If required.
// Create the student object with a property called 'name'
const student = {
  name: 'John Doe'
};

// Add the getKeys method to Object.prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Use the getKeys method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ['name']
