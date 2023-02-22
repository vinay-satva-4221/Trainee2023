
$(document).ready(function () {

    var loggedData = localStorage.getItem('LoggedInUser');
    var myarray = JSON.parse(loggedData);
    var displayName = myarray.find(
        x => x.UserName);
    $('#diplayName').text(displayName.UserName);

    $(".changebgcolor").on('click', (function () {
        $(this).css('background-color', '#326C96');
    }));
    $("#deleteLoggedUser").click(function () {
        localStorage.removeItem('LoggedInUser');
    })

    var table = $('#example').DataTable({
        "dom": 'rtip',
        "ordering": false,

        language: {
            oPaginate: {
                sNext: '<i class="bi bi-caret-right-fill"></i>',
                sPrevious: '<i class="bi bi-caret-left-fill"></i>',

            }
        }

    });
    $('#example').removeClass('display').addClass('table table-striped table-bordered');
    $('#saveStock')
})
