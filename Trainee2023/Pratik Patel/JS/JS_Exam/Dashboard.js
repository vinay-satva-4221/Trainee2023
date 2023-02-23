$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {
      
  
       //Display name in Navbar
    var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
    $("#loginUseName").html(logedinUser[0].Name);
    $("#PrifleImage").attr("src", logedinUser[0].Picture);

    //Dashboard

  var dataSet = [
    ['ZK-08-X2P', '1', '0', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
    ['BW-01-Q-M', '', '0', "<button class='popoverButton' data-toggle='popover'>2</button>", '0', '1'],
    ['BW-01-XL-G', '1', '1', "<button class='popoverButton' data-toggle='popover'>3</button>", '2', '1'],
    ['BW-01-S-M', '1', '0', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
  ];
    //PopOver
  $("#table_div").DataTable({
    data: dataSet,
    drawCallback: function () {
        $('.popoverButton').popover({
            "html": true,
            trigger: 'manual',
            placement: 'left',
            "content": function () {
                return "<div><input type='text'></div>";
            }
        })
    },
    columns: [
        { title: 'Part Number' },
        { title: 'In Warehouse' },
        { title: 'Available' },
        { title: 'C100' },
        { title: 'C101' },
        { title: 'C102' },
    ],
  });
  $("#logout").click(function () {
    debugger;
    localStorage.removeItem("LogedinUser");
    window.location.replace("index.html");
  });
  
  
  
  $('.sorting').removeClass('sorting')
  
  $('[data-toggle="popover"]').popover()


    }
    else {
        window.location.href="index.html"
        } 
})  