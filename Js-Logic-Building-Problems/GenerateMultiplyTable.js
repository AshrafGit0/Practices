// Method 1
function Multiplication(MultiplyOf, MultiplyTill) {
    let results = [];
    for (i = 1; i <= MultiplyTill; i++) {
        let val = MultiplyOf * i;
        results.push(val);
    }

    return results;
}
console.log(Multiplication(4, 10))


//  Method 2
function MultiplicationTable(TableOf, TableTill) {
    for (i = 1; i <= TableTill; i++) {
        console.log(`${TableOf} * ${i} = ${TableOf * i} `);
    }
}
MultiplicationTable(47, 100)