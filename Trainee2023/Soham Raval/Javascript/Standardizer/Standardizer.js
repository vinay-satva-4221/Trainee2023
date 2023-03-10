// fetch('Standard CofA.csv')
//         .then(response => response.text())
//         .then(data => {
//           // Parse the CSV data into a JavaScript object
//           const parsedData = Papa.parse(data, { header: true }).data;
        
// const tableBody = document.getElementById('table-body');
// parsedData.forEach(row => {
//   const tr = document.createElement('tr');
//   const numberTd = document.createElement('td');
//   numberTd.textContent = row.Number;
//   tr.appendChild(numberTd);
//   const nameTd = document.createElement('td');
//   nameTd.textContent = row.Name;
//   tr.appendChild(nameTd);
//   tableBody.appendChild(tr);
// });



//         })
//         .catch(error => console.error(error));
fetch('Standard CofA.csv')
  .then(response => response.text())
  .then(data => {
    // Parse the CSV data into a JavaScript object
    const parsedData = Papa.parse(data, { header: true }).data;

    const tableBody = document.getElementById('table-body');
    parsedData.forEach(row => {
      // Create a div element for the row
      const div = document.createElement('div');
      div.classList.add('row');

        
      // Create a tr element for the row
      const tr = document.createElement('tr');
      const numberTd = document.createElement('td');
      numberTd.textContent = row.Number;
      tr.appendChild(numberTd);
      const nameTd = document.createElement('td');
      nameTd.textContent = row.Name;
      tr.appendChild(nameTd);

      // Append the tr element to the div element
      div.appendChild(tr);

      // Append the div element to the table body
      tableBody.appendChild(div);
    });
});


// Includes dragula.js
// let one = document.querySelector('#container1')
// let two =  document.querySelector('#container2')
 
// var drake = dragula([ one, two ])
 
// drake.on('drag', function(el,source) {
//   document.getElementsByTagName('body')[0].style.backgroundColor = '#28a0ef';
// })
// drake.on('drop', function(el, target){
//     el.style.border = '5px dashed white';
//   el.innerText = "Drag MEEEE :)"
//     document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
// })

