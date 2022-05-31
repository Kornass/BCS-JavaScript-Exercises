// Schema force with Default
// We will now make sure that missing values are defaulted to a certain value. From now on,
// the value of a given property of the schema object will be formed by an object with keys "type"
// and "default". The type-setting system of the previous exercise should work in the same way;
// with the exception of the new syntax. If no default key is added then the given property will
// not be added if missing. If an input is not present or breaking an other of the schema rules,
// the value will be set to the default.

var schema = {
  name: { type: "string", default: "NoBody" },
  age: { type: "number" },
  married: { type: "boolean", default: false },
};

let model = (act, obj, sch) => {
  let keys = Object.keys(obj);
  //   console.log(keys);
  let DB = [];
  debugger;
  for (let ele in sch) {
    // console.log(obj[ele], ele);
    if (act == "add" && typeof obj[ele] == sch[ele].type) {
      DB.push([ele, obj[ele]]);
    } else if (sch[ele].default != undefined) {
      DB.push([ele, sch[ele].default]);
    }
    if (!keys.includes(ele) && sch[ele].default == true) {
      DB.push([ele, sch[ele].default]);
    }
  }
  return [Object.fromEntries(DB)];
};
model("add", { name: "43", married: true, age: 20 }, schema);
model("add", { name: 43, married: "asdfasdf" }, schema);
model(
  "add",
  {
    id: 1,
    name: "pedro",
    age: "32",
    address: "Muntaner 262, Barcelona, Spain",
  },
  schema
);

module.exports = {
  model,
};
