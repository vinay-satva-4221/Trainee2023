window.onload = (event) => {
    if (localStorage.getItem("LoginDetails") == null) {
      window.location.replace("Badeloft.html");
    }
    else{
      var par = JSON.parse(localStorage.getItem('LoginDetails'));
      var u = par[0].username;
      var uname = document.getElementById("username");
      uname.innerHTML = u;
    }
};
function logout(){
    window.location.replace("Badeloft.html")
    localStorage.clear();
  }
const CityData = '{"Cities":['+
'{"StateId":"1","Id":"1","Name":"Indore"},' +
'{"StateId":"1","Id":"2","Name":"Bhopal"},' +
'{"StateId":"2","Id":"3","Name":"Sirohi"},' +
'{"StateId":"2","Id":"4","Name":"Udaipur"},' +
'{"StateId":"2","Id":"5","Name":"Jaisalmer"},' +
'{"StateId":"3","Id":"6","Name":"Ahmedabad"},' +
'{"StateId":"3","Id":"7","Name":"Vadodara"},' +
'{"StateId":"3","Id":"8","Name":"Surat"},' +
'{"StateId":"4","Id":"9","Name":"Ludhiana"},' +
'{"StateId":"4","Id":"10","Name":"Amritsar"},' +
'{"StateId":"4","Id":"11","Name":"Patiala"}]}';

const StateData = '{"States":['+
'{"Id":"1","Name":"Eric Jensen"},' +
'{"Id":"2","Name":"Kenneth Woodard"},' +
'{"Id":"3","Name":"Kelly McCrory"},' +    
'{"Id":"4","Name":"frances Badger"},' +                    
'{"Id":"5","Name":"John Doe"}]}';

$(document).ready(function(){

    var StateJsonData = JSON.parse(StateData);
    $.each(StateJsonData.States,function(i,option){
        $("#customer").append($('<option></option>').val(option.Id).html(option.Name));
    })

    $("#customer").change(function(){
        var CityJsonData = JSON.parse(CityData);
        $("#selstock").html('');
        $.each(CityJsonData.Cities,function(i,option){
            if($("#customer").val() == option.StateId){
                $("#selstock").append($('<option></option>').val(option.Id).html(option.Name));
            }
    })

    });
});


$(document).ready(function () {


  var modal = document.getElementById("addassignment");


  tableData = $('#assignment').DataTable({
    orderable:false,
    
    lengthChange: false,
    bFilter:true,
    bInfo:false,
    
    dom: '<"toolbar">frtip',
    fnInitComplete: function () {
      $('div.toolbar').html('<b><h3>&nbsp;Assignments</h3></b>');
      $('#assignment_filter').prepend(modal);
        },  
    
        language: {
          info: "Items _START_ to _END_ of _TOTAL_ total",
          paginate:{
            previous:"<",
            next:">",
          },
          search: "",

          searchPlaceholder: "Search here..."
        },  
    info: true,
    paging: true,
   ordering:false,
    columns: [
      {
        
        data: null,
        className: 'dt-control',
        orderable: false,
        defaultContent: '',

      },
      {
        data:"index",
        title: 'QB Invoice #',
        orderable: false,
        render:function(data,type,row){
          if(type=='display'){
              return '<span style="color: #1188FF;">' + data + '</span>';
          }
          else {
              return data;
          }
      }
      },
      {
        data:"sname",
        title: 'Name',
        orderable: false,
        className: "text-center"
      },
      {
        data:"createdby",
        title: 'Created By',
        orderable: false,
        className: "text-center"
      },
      {
        data:"cdate",
        title: 'Created Date',
        orderable: false,
        className: "text-center"
      },

      {
        data:null,
        title: 'Action',
        orderable: false,
        defaultContent: '<div class="action-buttons">' +
                    '<span class="edit"><i class="fa fa-pencil"></i></span> ' +
                    '<span class="remove"><i class="fa fa-trash"></i></span> ' +
                    '<span class="cancel"></span>' +
                    '</div>',
        className: 'row-edit dt-center',
      }
    ]
  
  });

  // Add event listener for opening and closing details
  $('#stock tbody').on('click', 'td.dt-control', function () {
    var tr = $(this).closest('tr');
    var row = tableData.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
    } else {console.log(partDetails)
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass('shown');
    }
  });
});
