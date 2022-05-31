// Create a function called model. The model function allows you to control how you interact with a
// collection of objects that we call collection that are stored in the DB. Model imposes conditions
// on the properties of the collection, for example which keys are allowed.
// In this exercise create a model function. This model uses the definitions of a predefined object
// called schema (you don't need to define it) to assert the keys that each object in a collection
// that are allowed. The model function can take 3 arguments: the first is the type of the operation
// we want to execute on the db and the second is the data we need to execute it, and the third one
// would be our schema object defining the pattern or template for what data is valid for adding to the DB.
//For now we only define an operation called 'add'.
// if the argument add is not present then nothing should be added.

var schema = ["id", "name", "age"];
let model = (act, obj, sch) => {
  let DB = [];
  let keyVals = Object.entries(obj);
  keyVals.forEach((element) => {
    if (act == "add" && sch.includes(element[0])) {
      DB.push(element);
    }
  });
  DB = [Object.fromEntries(DB)];
  return DB;
};
model(
  "add",
  { id: 1, name: "Joe", age: 32, address: "Muntaner 262, Barcelona" },
  schema
);
module.exports = {
  model,
};
