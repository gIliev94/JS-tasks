var objects = [
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
];

// Gets all the unique attributes
function extractObjectAttributes() {
    console.log('OBJECTS:');

    for (var i = 0; i < objects.length; i++) {
        allAttributes = Object.keys(objects[i]);

        console.log(JSON.stringify(objects[i]));

        for (var j = 0; j < allAttributes.length; j++) {
            if (uniqueAttributes.indexOf(allAttributes[j]) == -1) {
                uniqueAttributes.push(allAttributes[j]);
            }
        }

    }

    console.log('\n');
    console.log('UNIQUE ATTRIBUTES:');
    console.log(JSON.stringify(uniqueAttributes));
}

// Creates table with data from both the source array and the unique attributes array
function generateTableWithData() {
    var container = document.createElement('div');
    var tableBody = document.createElement('table');

    for (var i = 0; i < objects.length; i++) {
        var currentObject = objects[i];
        var tableRow = document.createElement('tr');

        for (var j = 0; j < uniqueAttributes.length; j++) {
            var tableCell = document.createElement('td');
            tableCell.innerHTML = currentObject[uniqueAttributes[j]];

            // Check for available value for a given attribute
            if (currentObject[uniqueAttributes[j]] === undefined) {
                tableCell.innerHTML = " ";
            }

            tableRow.appendChild(tableCell);
            tableBody.appendChild(tableRow);
        }

    }
    container.appendChild(tableBody);

    console.log('\n');
    console.log('RESULTING TABLE: SORTED by ID ascending');
    console.log('ROWS: ' + objects.length);
    console.log('COLUMNS: ' + uniqueAttributes.length);

    return document.body.appendChild(container);
}

// Compares the IDs of two objects
function compareId(o1,o2) {
    if (o1.ID < o2.ID)
        return -1;
    else if (o1.ID > o2.ID)
        return 1;
    else
        return 0;
}

// Actual execution path
var allAttributes = [];
var uniqueAttributes = [];

extractObjectAttributes();

objects.sort(compareId);

generateTableWithData();