const empList = [
  { name: "arpan sharma", dept: "mern dev", empId: 5 },
  { name: "arjun sharma", dept: "mern dev", empId: 4 },
  { name: "gurmeet sharma", dept: "mern dev", empId: 7 },
];
for (let j = 0; j < empList.length; j++) {
  for (let i = 0; i < empList.length; i++) {
    if (empList[i].empId > empList[i + 1]?.empId) {
      const a = empList[i];

      empList[i] = empList[i + 1];

      empList[i + 1] = a;
    }
  }
}

console.log("with loop method", empList);

// sorting method

const empList1 = [
  { name: "arpan sharma", dept: "mern dev", empId: 5 },
  { name: "arjun sharma", dept: "mern dev", empId: 4 },
  { name: "gurmeet sharma", dept: "mern dev", empId: 7 },
];

empList1.sort((a, b) => {
  return a.empId - b.empId;
});

console.log("with sorting method", empList1);
