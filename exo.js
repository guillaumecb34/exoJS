// const getAllSubsets = (theArray) => theArray.reduce(
//         (subsets, value) => subsets.concat(
//          subsets.map(set => [value,...set])
//         ),
//         [[]]
//       );

// const getAllSubsets = (theArray) => theArray.reduce(
//     (subsets, value) => subsets.concat(
//       subsets.map(set => [value, ...set])
//     ), [[]]
// );

// const result = getAllSubsets(["A","B","C","D"])

// console.log(result, result.length)

// const array = ["A", "B", "C", "D"]; console.log(array.reduce((subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]]));

// const r = ["A", "B", "C", "D"].reduce((a, v) => a.concat(a.map(s => [v, ...s])), [[]]);
// console.log(r, r.length)

// const r = ["A","B", "C", "D"].reduceRight((a, v) => a.concat(a.map(s => [v, ...s])), [[]]);
// console.log(r, r.length)


// const r = [["A"],["B"], ["C"], ["D"]].flatMap(v => []);
// console.log(r, r.length)

// var arr = [1, 2, 3, 4];

// const r = arr.flatMap(x => [x]).map(s => [x, ...s]);
// console.log(r)

// const r1 = arr.reduce((acc, x) => acc.concat(acc.map(s => [x, ...s])), [[]]);
// console.log(r1)

const f = ([v, ...a]) => v == undefined ? [[]] : f(a).flatMap(s => [s, [v, ...s]]); const r = f(["A", "B", "C", "D"]); console.log(r, r.length)

