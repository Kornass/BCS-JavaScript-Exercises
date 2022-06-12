/*
Jenny from perfectFamily is unhappy and is looking for a new family, help her! 

First, she is looking for a family without a mother so she would fit there easily, 
if such family is not available, then her second choice would be to find a family 
without any kids. If she has some bad luck with that, then her choice would be a 
family with the oldest kid(s) possible. 

Function name is familyAffairs, first argument is a perfect family, second argument 
is an array with other families.
*/
let perfectFamily = {
  father: { name: "Mike", age: 44, height: 179 },
  mother: { name: "Jenny", age: 40, height: 168 },
  son: { name: "Pablo", age: 16, height: 165 },
};

let otherFamilies = [
  {
    Smiths: {
      father: { name: "Jake", age: 38, height: 182 },
      mother: { name: "Viola", age: 36, height: 172 },
      son: { name: "Donny", age: 14, height: 180 },
    },
  },
  {
    Morenos: {
      father: { name: "Juan", age: 42, height: 188 },
      daughter: { name: "Julia", age: 10, height: 149 },
      mother: { name: "Kate", age: 36, height: 172 },
    },
  },
  {
    Tanakas: {
      father: { name: "Kioto", age: 39, height: 172 },
      mother: { name: "Junko", age: 42, height: 164 },
      son: { name: "Bundo", age: 24, height: 164 },
    },
  },
];
let familyAffairs = (perfobj, familiesarr) => {
  let newFamily;
  let kidsAges = [];
  let idx;
  let str;
  let importance = [];
  // Loop to find if families have a mother
  //   debugger;
  familiesarr.forEach((element) => {
    for (let family in element) {
      if (!element[family].mother) {
        newFamily = family;
        importance.push([1, family]);

        // if families have a kid
      } else if (!element[family].son && !element[family].daughter) {
        newFamily = family;
        importance.push([2, family]);

        // If families have kids- choose the one with oldest kid
      } else if (element[family].son || element[family].daughter) {
        for (let person in element[family]) {
          if (person == "son" || person == "daughter") {
            kidsAges.push(element[family][person].age);
          }
        }
      }
    }
  });
  for (let i = 0; i < kidsAges.length; i++) {
    if (kidsAges[i] == Math.max(...kidsAges)) {
      idx = i;
    }
  }
  importance.push([3, Object.keys(otherFamilies[idx])]);
  importance.sort((a, b) => a[0] - b[0]);
  console.log(importance);
  str = `Yay! ${perfectFamily.mother.name} moved to ${importance[0][1]}`;
  return str;
};
