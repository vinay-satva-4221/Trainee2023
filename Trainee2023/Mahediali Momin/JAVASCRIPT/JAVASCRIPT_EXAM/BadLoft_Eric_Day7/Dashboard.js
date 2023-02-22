// $(document).ready(function () {
//     var name = localStorage.getItem("details");
//     console.log(name)

//     var det = name.uname;
//     console.log(det)
// })


window.onload = () => {
    if (localStorage.getItem("details") == null) {
        
      window.location.replace("LoginPage.html");
    }
  }

var data1 = [
    ["Stock Location", "", "", "On water", "On water", "In Production"],
    ["ETA Date", "", "", "10/08/2021", "10/08/2021", "10/08/2021"],
    ["BW-01-S-M", "1", "0", "3", "0", "0"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["BW-01-Q-M", "", "0", "3", "0", "1"],
    ["BW-03-XL-G", "1", "1", "2", "2", "1"],
    ["ZK-08-X2P", "1", "0", "3", "0", "1"]
]

$(document).ready(function () {
    $('#example').DataTable({
        data: data1,
        columns: [
            { title: 'Part Number' },
            { title: 'In Warehouse' },
            { title: 'Available' },
            { title: 'C100' },
            { title: 'C101' },
            { title: 'C102' },
        ],
        columnDefs: [
            {
                targets: -1,
                className: 'dt-center'
            }
          ]

    });
    $('.sorting').removeClass('sorting');

    var user = JSON.parse(localStorage.getItem("details"));
    console.log(user)
    $("#uname").html(user.name);
});



debugger;





function logout() {
    window.location.replace("LoginPage.html");
    localStorage.clear();
}

// var img1 = localStorage.getItem("details");
// console.log(img1)

// var det = img1.email;
// console.log(det)

// var image1 = document.createElement('img');

// image1.src = img1;