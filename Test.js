let arr = [
    { name: "madhav", p: 250 },
    { name: "ganesh", p: 100 },
    { name: "madhav", p: 100 },
    { name: "madhav", p: 1000 },
  ]; //output=1,1,4,4
  let te = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let count = 0;
      let name;
      if (arr[i].name === arr[j].name) {
        name = arr[i].name;
        arr.map((item) => {
            if (item.name === name) {
              count += item.p;
            }
          });
        te.push(name, count);
      }
   }
   }
  const dup = [...new Set(te)]
  console.log(te);
  console.log("duplicate",dup)