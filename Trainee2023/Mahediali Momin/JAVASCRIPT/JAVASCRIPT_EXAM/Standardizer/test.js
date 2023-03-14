// $(document).ready(function () {

//     $('.header-button').click(function () {
//         var btnValue = $(this).val();
//         alert(btnValue);
//         $('#section1').html('');
//         $.get('Standard CofA.csv', function (data) {

//             var lines = data.split('\n');

//             // remove the first line (header) of the file
//             var headers = lines.shift().split(',');

//             // map the remaining lines into an array of objects
//             var data = lines.map(function (line) {
//                 var values = line.split(',');
//                 var obj = {};

//                 // loop through all the columns in the row
//                 for (var i = 0; i < headers.length; i++) {
//                     // set the key-value pair in the object
//                     obj[headers[i]] = values[i];
//                 }
//                 return obj;
//             });

//             // do something with the data
//             console.log(data);
//             var ul = document.getElementById("section1");
//             // parse lines
//             data.forEach(function getvalues(sourceAccountData) {
//                 debugger
//                 if (btnValue == sourceAccountData.Type) {
//                     var li = document.createElement("li");
//                     li.className = "list-group-item border";
//                     li.innerHTML = sourceAccountData.Number + " -- " + sourceAccountData.Name;
//                     ul.appendChild(li);
//                 }
//             });
//         });
//     });


//     $('.navData').click(function () {
//         var btnValue = $(this).attr('value');
//         alert(btnValue);
//         $('#section2').html('');
//         $.get('MasterChartOfAcounts - Sheet1.csv', function (data) {

//             var lines = data.split('\n');

//             // remove the first line (header) of the file
//             var headers = lines.shift().split(',');

//             // map the remaining lines into an array of objects
//             var data = lines.map(function (line) {
//                 var values = line.split(',');
//                 var obj = {};

//                 // loop through all the columns in the row
//                 for (var i = 0; i < headers.length; i++) {
//                     // set the key-value pair in the object
//                     obj[headers[i]] = values[i];
//                 }
//                 return obj;
//             });

//             // do something with the data
//             console.log(data);
//             var ul = document.getElementById("section2");
//             // parse lines
//             data.forEach(function getvalues(sourceAccountData) {
//                 debugger
//                 if (btnValue == sourceAccountData.AccountTypeName) {
//                     var li = document.createElement("li");
//                     li.className = "list-group-item border";
//                     li.innerHTML = sourceAccountData.AccountCode + " -- " + sourceAccountData.AccountName;
//                     ul.appendChild(li);
//                 }
//             });
//         });
//     });
// });
// Add click event listener to all buttons with class 'header-button'
const buttons = document.querySelectorAll('.header-button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const btnType = button.dataset.btnType; // Get the data attribute value of the clicked button
        const csvFilePath = `Standard CofA.csv`; // Construct the path of the CSV file based on the button type
        fetch(csvFilePath)
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                const ulElement = document.getElementById('section1');
                ulElement.innerHTML = ''; // Clear the list before adding new items
                lines.forEach(line => {
                    const values = line.split(',');
                    const number = values[3];
                    const name = values[4];
                    const liElement = document.createElement('li');
                    liElement.classList.add('list-group-item');
                    liElement.textContent = `${number} - ${name}`; // Display the number and name
                    ulElement.appendChild(liElement);
                });
            })
            .catch(error => console.error(`Failed to load data from ${csvFilePath}: ${error}`));
    });
});

