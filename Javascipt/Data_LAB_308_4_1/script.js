//Part 2: Expanding Functionality

console.log("*************************Part 2: Expanding Functionality  *************************");

let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []



for (let i = 0; i < csv.length; i++) {
    let char = csv[i]
    // console.log(char)

    if (char !== ',' && char !== '\n') {
        cell = cell + char
    }

    if (char === ',') {
        row.push(cell)  // row[ID, Name, Occupation,]
        cell = ''
    }

    if (char === '\n' || i === csv.length - 1) {
        row.push(cell)  // row[ID, Name, Occupation, age]
        cell = ''
        table.push(row)
        row = []
    }
}

console.log(table)


//Part 3: Transforming Data


console.log("*************************Part 3: Transforming Data  *************************");


let tables = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor's Assistant", "26"]];
let newStudents = [];


let header = tables[0];

for (let i = 1; i < tables.length; i++) {
    let dataRow = tables[i];
    const obj = {};
 
    for (j = 0; j < dataRow.length; j++) {
        obj[header[j].toLowerCase()] = dataRow[j];
    }

    newStudents.push(obj);
}
console.log(newStudents)

//part4 -shorting and manipulating data


console.log("*************************part4 -shorting and manipulating data  *************************");


let array = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
    //1.Remove the last element from the sorted array.
    array.pop();
    console.log(array);
    
    //2.Insert the following object at index 1  
    const newRow = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
    array.splice(1, 0, newRow);
    console.log(array);
    
    //3.Add the following object to the end of the array:
    const endRow = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
    array.push(endRow);
    console.log(array);
    //Finally, use the values of each object within the array and the array’s 
    // length property to calculate the average age of the group. 
    // This calculation should be accomplished using a loop.
    
    
    const array1 = [
        { id: '42', name: 'Bruce', occupation: 'Knight', age: '41' },
        { id: '48', name: 'Barry', occupation: 'Runner', age: '25' },
        { id: '57', name: 'Bob', occupation: 'Fry Cook', age: '19' },
        { id: '63', name: 'Blaine', occupation: 'Quiz Master', age: '58' },
        { id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
    ]
    
    console.log(array1.length);
    
    let totalAge = 0;
    for (i = 0; i < array1.length; i++) {
        totalAge += Number(array1[i].age);
    }
    const AvarAge = totalAge / array1.length;
    console.log("Average Age", AvarAge);
    
    //Part 5: Full Circle

    console.log("*************************Part 5: Full Circle  *************************");


    let csvData = "";
    const keys = Object.keys(array1[0])
    //  console.log(keys);
    
    for (i = 0; i < keys.length; i++) {
        csvData += keys[i]  ;
    
        if (i == keys.length -1) {
            csvData += "\\n";
        } else {
            csvData += ",";
        }
        
    }
    
    // console.log(csvData)
    
    for (i = 0; i < array1.length; i++) {
        csvData += array1[i].id + "," + array1[i].name + "," + array1[i].occupation + "," + array1[i].age + "\\n";
    }
    console.log(csvData);