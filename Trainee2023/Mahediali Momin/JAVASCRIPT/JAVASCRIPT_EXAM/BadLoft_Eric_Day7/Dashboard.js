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
    ["ZK-08-X2P", "1", "0", "3", "0", "1"],
    // <a data-toggle="popover" title="Assigned to" data-content="Description" data-trigger="hover">
    // popover</a>
]

$(document).ready(function () {
    $('#example').DataTable({
        data: data1,
        columns: [
            { title: 'Part Number',  "sortable": true,},
            { title: 'In Warehouse',  "sortable": false },
            { title: 'Available',  "sortable": false },
            { title: 'C100' ,"sortable": false, fnDrawCallback : function() {
                $('[data-toggle="popover"]').popover(); 
            }},
            { title: 'C101',"sortable": false },
            { title: 'C102', "sortable": false },
        ],
        
        columnDefs: [
            {
                targets: [1,2,3,4,5],
                className: 'text-center'
            }
          ]
    });

    $('.sorting').removeClass('sorting');

    var user = JSON.parse(localStorage.getItem("loggUser"));
    console.log("user",user);
    $("#Uname").html(user[0].name);
});


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