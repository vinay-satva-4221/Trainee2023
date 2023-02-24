$(document).ready(function () {
    
    $("#AddNavbar").load("./navbar.html");  
    var loggedData = localStorage.getItem('LoggedInUser');
    if (loggedData) {
        //window.location.replace("dashboard.html");
    }
    else{
        window.location.replace("./login.html");
    }
    // $('.callPopover').click(function () {
    //     $(this).popover({
    //             html: true,
    //             html: true,
    //         placement: 'right',
    //         sanitize: false,
    //         content() {
    //                 var $buttons = $('#PopoverContent').html();
    //                 return $buttons;
    //             }
    //      }).popover('toggle');
    //      $('.click_me').off('click').on('click', function() {
    //          alert('it works!');
    //      });
    // });
    $('#AddNewSNum').on("click", function() {
        debugger
        addDataToLocal();

        $('#partnumber').val('');
        $('#ordred').val('');
        $('#notes').val();
    });
  
    // var table = $('#example').DataTable({
    //     "dom": 'rtip',
    //     "ordering": false,

    //     language: {
    //         oPaginate: {
    //             sNext: '<i class="bi bi-caret-right-fill"></i>',
    //             sPrevious: '<i class="bi bi-caret-left-fill"></i>',

    //         }
    //     }

    // });
    // $('#example').removeClass('display').addClass('table table-striped table-bordered');
    // $('#saveStock')
})
function addDataToTable() {

    let localData = localStorage.getItem('NewPartNumber');

    if (localData) {
        let localArray = JSON.parse(localData);
        let myId = localArray.length - 1;
        myId = localArray.map(x => x.id)[myId];
        const obj = {
            id: myId + 1,
            partnumber:   $('#partnumber').val(),
            ordred:  $('#ordred').val(),
            notes: $('#notes').val(),
            

        };

        localArray.push(obj);
        localStorage.setItem('NewPartNumber', JSON.stringify(localArray));
       // loadDataFromLocal();
    }
    else {
        const arryObj = [];
        const obj = {
            id: 1,
            partnumber:   $('#partnumber').val(),
            ordred:  $('#ordred').val(),
            notes: $('#notes').val(),
           

        };

        arryObj.push(obj);
        maxId = localStorage.setItem('NewPartNumber', JSON.stringify(arryObj));

    }


}