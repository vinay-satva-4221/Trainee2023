function saveData() {
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var college = document.getElementById("college").value;
    var cgpa = document.getElementById("cgpa").value;
    var branch = document.getElementById("branch").value;
    var data = JSON.parse(localStorage.getItem("data")) || [];
    data.push({ name: name, mobile: mobile, email: email, college: college, cgpa: cgpa, branch: branch  });
    localStorage.setItem("data", JSON.stringify(data));
    displayData();
  }

  // Display data in HTML table
  function displayData() {
    var data = JSON.parse(localStorage.getItem("data"));
    var tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    if (data) {
      data.forEach(function(item, index) {
        var row = tableBody.insertRow();
        var nameCell = row.insertCell(0);
        var mobileCell = row.insertCell(1);
        var emailCell = row.insertCell(2);
        var collegeCell = row.insertCell(3);
        var cgpaCell = row.insertCell(4);
        var branchCell = row.insertCell(5);
        var actionsCell = row.insertCell(6);
        nameCell.innerHTML = item.name;
        mobileCell.innerHTML = item.mobile;
        emailCell.innerHTML = item.email;
        collegeCell.innerHTML = item.college;
        cgpaCell.innerHTML = item.cgpa;
        branchCell.innerHTML = item.branch;
        actionsCell.innerHTML = 
        '<button onclick="editData(' + index + ')">Edit</button>' +
        '<button onclick="deleteData(' + index + ')">Delete</button>';
      });
    }
  }

  // Edit data in local storage
  function editData(index) {
    var data = JSON.parse(localStorage.getItem("data"));
    var name = prompt("Enter new name:", data[index].name);
    var email = prompt("Enter new email:", data[index].email);
    var email = prompt("Enter new email:", data[index].email);
    var email = prompt("Enter new email:", data[index].email);
    var email = prompt("Enter new email:", data[index].email);
    var email = prompt("Enter new email:", data[index].email);
    data[index] = { name: name, email: email };
    localStorage.setItem("data", JSON.stringify(data));
    displayData();
  }

  // Delete data from local storage
  function deleteData(index) {
    var data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    displayData();
  }

  // Call displayData function when the page loads
  window.onload = function() {
    displayData();
  };