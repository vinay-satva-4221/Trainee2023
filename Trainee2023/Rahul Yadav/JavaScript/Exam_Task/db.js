$(document).ready(function () {

    if (localStorage.getItem('LogedinUser') !== null) {


       
        var logedinUser = JSON.parse(localStorage.getItem("LogedinUser"));
        $("#username").html(logedinUser[0].Name);


        
        var dataSet = [
            ['Stock Location', '', '', "On Water", 'On Water', 'In Production'],
            ['ETA Date', '', '', "10/08/2021", '10/08/2021', '10/08/2021'],
            ['ZK-08-X2P', '1', '0', "1", '0', '0'],
            ['BW-01-Q-M', '', '0', "2", '0', '1'],
            ['BW-01-XL-G', '1', '1', "3", '2', '1'],
            ['BW-01-S-M', '1', '0', "<button class='popoverButton' data-toggle='popover'>1</button>", '0', '0'],
        ];
      
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
                { title: 'In Warehouse', orderable: false, className: 'TextCenter' },
                { title: 'Available', orderable: false, className: 'TextCenter' },
                { title: 'C100', orderable: false, className: 'TextCenter' },
                { title: 'C101', orderable: false, className: 'TextCenter' },
                { title: 'C102', orderable: false, className: 'TextCenter' },
            ],
        });

        $("#logout").click(function () {
            localStorage.removeItem("LogedinUser");
            window.location.replace("log.html");
        });

        $('[data-toggle="popover"]').popover()


    }
    else {
        window.location.href = "index.html"
    }
})  