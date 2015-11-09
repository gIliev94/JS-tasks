var content = [
    { 'ID': 2, 'First Name': 'Martin', 'Last Name': 'Chaov', 'Occupation': 'Designer' },
    { 'ID': 6, 'First Name': 'Lyubomir', 'Last Name': 'Todorov', 'Occupation': 'Front-end developer' },
    { 'ID': 1, 'First Name': 'Daniela', 'Last Name': 'Popova', 'Occupation': 'Front-end developer' },
    { 'ID': 4, 'First Name': 'Tzvetana', 'Last Name': 'Zlatareva', 'Occupation': 'Designer' },
    { 'ID': 11, 'First Name': 'Galina', 'Last Name': 'Georgieva', 'Occupation': 'C# .NET developer' },
    { 'ID': 3, 'First Name': 'Maya', 'Last Name': 'Petkova', 'Occupation': 'Front-end developer' },
    { 'ID': 5, 'First Name': 'Desislava', 'Last Name': 'Zaharieva', 'Occupation': 'Team Leader' },
    { 'ID': 25, 'First Name': 'Ivan', 'Last Name': 'Tsatsarov', 'Occupation': 'DBA', 'Duplicate': 'True' },
    { 'ID': 12, 'First Name': 'Panaoyt', 'Last Name': 'Popov', 'Occupation': 'C# .NET developer' },
    { 'ID': 7, 'First Name': 'Viktor', 'Last Name': 'Mitev', 'Occupation': 'C# .NET developer' },
    { 'ID': 13, 'First Name': 'Gancho', 'Last Name': 'Angelov', 'Occupation': 'Front-end developer' },
    { 'ID': 9, 'First Name': 'Gabriel', 'Last Name': 'Kunchev', 'Occupation': 'Front-end developer' },
    { 'ID': 10, 'First Name': 'Petko', 'Last Name': 'Petkov', 'Occupation': 'C# .NET developer' },
    { 'ID': 8, 'First Name': 'Dobri', 'Last Name': 'Ugrenov', 'Occupation': 'Marketing' },
    { 'ID': 14, 'First Name': 'Stanislav', 'Last Name': 'Kumanov', 'Occupation': 'Front-end developer' },
    { 'ID': 15, 'First Name': 'Marin', 'Last Name': 'Dimitrov', 'Occupation': 'Team Leader' },
    { 'ID': 16, 'First Name': 'Ivan', 'Last Name': 'Atanasov', 'Occupation': 'Team Leader' },
    { 'ID': 17, 'First Name': 'Stoil', 'Last Name': 'Pankov', 'Occupation': 'Team Leader' },
    { 'ID': 18, 'First Name': 'Elina', 'Last Name': 'Basheva', 'Occupation': 'Team Leader' },
    { 'ID': 19, 'First Name': 'Nicole', 'Last Name': 'Kalcheva', 'Occupation': 'Product manager' },
    { 'ID': 20, 'First Name': 'Desislava', 'Last Name': 'Savova', 'Occupation': 'Project manager' },
    { 'ID': 21, 'First Name': 'Rosica', 'Last Name': 'Dencheva', 'Occupation': 'Account manager' },
    { 'ID': 22, 'First Name': 'Boian', 'Last Name': 'Botev', 'Occupation': 'Team Leader' },
    { 'ID': 23, 'First Name': 'Diana', 'Last Name': 'Karcheva', 'Occupation': 'C# .Net developer' },
    { 'ID': 24, 'First Name': 'Miroslav', 'Last Name': 'Uzunov', 'Occupation': 'DBA' },
    { 'ID': 25, 'First Name': 'Ivan', 'Last Name': 'Tsatsarov', 'Occupation': 'DBA' },
    { 'ID': 50, 'First Name': 'Cool', 'Last Name': 'Dude' }
];

// All keys
var allKeys = [];

// All UNIQUE keys
var uniqueKeys = [];

// Actual execution
extractKeys();
extractDataToTable();


// Gets all the unique keys
function extractKeys() {

    for (var i = 0; i < content.length; i++) {
        allKeys = Object.keys(content[i]);
        console.log(allKeys);

        for (var j = 0; j < allKeys.length; j++) {
            if (uniqueKeys.indexOf(allKeys[j]) == -1) {
                uniqueKeys.push(allKeys[j]);
            }
        }

    }
    //console.log(uniqueKeys);
}

// Creates table with data from both the source array and the keys array
function extractDataToTable() {

    var container = document.createElement('div');
    var tableBody = document.createElement('table');

    for (var t = 0; t < content.length; t++) {
        var currentObject = content[t];
        var tableRow = document.createElement('tr');

        for (var k = 0; k < uniqueKeys.length; k++) {

            var tableCell = document.createElement('td');
            tableCell.innerHTML = currentObject[uniqueKeys[k]];

            // Check for available values of the given key
            if (currentObject[uniqueKeys[k]] === undefined) {
                tableCell.innerHTML = " ";
            }

            tableRow.appendChild(tableCell);
            tableBody.appendChild(tableRow);

        }
        //console.log(currentObject);
    }
    container.appendChild(tableBody);
    return document.body.appendChild(container);
}