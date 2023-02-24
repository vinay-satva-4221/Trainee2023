function addData(){
    var pnumber = document.getElementById("pnum");
    var order = document.getElementById("ordered");
    var notes = document.getElementById("notes");

    var Row = ('<tr>');
    Row.append('<td>' + pnumber + '</td>');
    Row.append('<td>' + order + '</td>');
    Row.append('<td>' + notes + '</td>');

    document.getElementById("outermodal").append(Row);


}