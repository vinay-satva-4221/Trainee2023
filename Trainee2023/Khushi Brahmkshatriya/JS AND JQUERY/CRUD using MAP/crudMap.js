$(document).ready(function () {


    $( ".txtOnly" ).keypress(function(e) {
        var key = e.keyCode;
        if (key >= 48 && key <= 57) {
            e.preventDefault();
        }
    });

    $('#Update').hide();

    let map = new Map();

    $('#AddData').click(function () {

        addData();

    })


    function addData() {

        let name = $('#name').val();
        let movie = $('#movie').val();

        console.log(name);
        if (name == "" || movie == "") {
            if (name == "")
                $('.nerrormsg').text("Please Enter name");

            $('.merrormsg').text("Please Enter movie");

        }
        else {
            $('div').remove(".nerrormsg, .merrormsg");
            let MyData = {
                "Name": name,
                "Movie": movie
            }

            var KEY = (map.size + 1)

            var output = map.set(KEY, JSON.stringify(MyData));
            console.log("SetMap",output);
            showData();
        }


    }

    function showData() {
        $("#tblData tbody").empty();

        var dynamicTR = "";
        var index = 1;
        for (var i = 1; i <= map.size; i++) {
            var myMapData = map.get(i);
            var getdata = JSON.parse(myMapData);

            dynamicTR = dynamicTR + "<tr>";
            dynamicTR = dynamicTR + "<td id='id'> " + index + "</td>";
            dynamicTR = dynamicTR + "<td class='txtName'>" + getdata.Name + "</td>";
            dynamicTR = dynamicTR + "<td class='txtMovie'>" + getdata.Movie + "</td>";
            dynamicTR = dynamicTR + "<td class='tdAction'><button class='btn btn-sm btn-success btn-edit'> Edit</button> <button class='btn btn-sm btn-danger btn-delete'> Delete</button></td>";
            dynamicTR = dynamicTR + " </tr>";
            index++;
        }
        $("#tblData tbody").append(dynamicTR);
        $('#name').val("");
        $('#movie').val("");

    }

    $('#tblData').on('click', '.btn-edit', function () {

        $('#AddData').hide();
        $('#Update').show();
        
        const tname = $(this).parent().parent().find(".txtName").html();
        const tmovie = $(this).parent().parent().find(".txtMovie").html();
        let name = $("#name").val(tname);
        let movie = $("#movie").val(tmovie);
        let myId = $(this).parent().parent().find("#id").html();
        myId = JSON.parse(myId);

        $('#Update').click(function () {
            
            
            for (let i = 1; i <= map.size; i++) {
                
                
                if (i == myId) {
                    var myMapData = map.get(i);
                    var getdata = JSON.parse(myMapData);
                    console.log(getdata);

                    getdata.Name = $("#name").val();
                    getdata.Movie = $("#movie").val();

                    var KEY = (i)

                    var output = map.set(KEY, JSON.stringify(getdata));
                    console.log("EditMap",output);

                }
            }

            showData();

            $('#AddData').show();
            $('#Update').hide();

        })

    })

    $('#tblData').on('click', '.btn-delete', function () {

        let myId = $(this).parent().parent().find("#id").html();
        myId = JSON.parse(myId);

        for (let i = 1; i <= map.size; i++) {
            if (i == myId) {

                map.delete(myId)
                console.log("DeleteMap",map);

            }
            
            // var Details = JSON.parse(map.get(i-1));
            // if (i >= myId) {

            //     let key = i;
            //     map.set(key, JSON.stringify(Details))
            //     map.delete(i + 1)
            //     console.log(map)
            // }
        }
        
        $('#tblData tr').eq(myId).remove();

    })
})
