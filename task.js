function vaxTrail(arr) {
  let vaccineObject = { A: [], B: [], C: [], D: [] };

  for (element of arr) {
    if (element.age <= 30 && element.age >= 20 && element.temperature < 100) {
      vaccineObject.A.push(element);
      vaccineObject.A.sort(
        (a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age
      );
    } else if (
      element.age <= 40 &&
      element.age >= 31 &&
      element.temperature < 100
    ) {
      vaccineObject.B.push(element);
      vaccineObject.B.sort(
        (a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age
      );
    } else if (
      element.age <= 50 &&
      element.age >= 41 &&
      element.temperature < 100
    ) {
      vaccineObject.C.push(element);
      vaccineObject.C.sort(
        (a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age
      );
    } else {
      vaccineObject.D.push(element);
      vaccineObject.D.sort(
        (a, b) => (a.age & 1) - (b.age & 1) || a.age - b.age
      );
    }
  }

  return vaccineObject;
}

vaxTrail([
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Biplap", age: 22, temperature: 98 },
  { name: "minal", age: 56, temperature: 98 },
  { name: "babul", age: 52, temperature: 98 },
  { name: "tusi", age: 31, temperature: 100 },
  { name: "mina", age: 36, temperature: 98 },
  { name: "lima", age: 45, temperature: 98 },
  { name: "mohes", age: 47, temperature: 98 },
  { name: "shipon", age: 78, temperature: 98 },
  { name: "Polin", age: 37, temperature: 98 },
]);
