$(document).ready(function () {
    $("#addbutton").click(function () {
        $("#exampleModal").modal("show");
    });

    $("#nestedclosebutton").click(function () {
        $("#exampleModal1").modal("hide");
    });

    $("#nestedadd").click(function () {
        $("#exampleModal1").modal("show");
    });

    $("#parentclosebutton").click(function () {
        $("#exampleModal").modal("hide");
        $('#stock-table tbody').empty();
    });

    const data = [
        { email: "amit@gmail.com", password: "amit", name: "Amit", image: "https://picsum.photos/200" },
        { email: "sumit@gmail.com", password: "sumit", name: "Sumit", image: "https://picsum.photos/200" },
        { email: "sohambhai@gmail.com", password: "sohambhai", name: "Soham Bhai", image: "https://picsum.photos/200" },
        { email: "alibhai@gmail.com", password: "alibhai", name: "Ali Bhai", image: "https://picsum.photos/200" },
        { email: "alokbhai@gmail.com", password: "alokbhai", name: "Alok Bhai", image: "https://picsum.photos/200" }
      ];
    
      // Save data to local storage
      localStorage.setItem('users', JSON.stringify(data));

      const namedata = JSON.parse(localStorage.getItem('users'));

      // Populate options with data names
      namedata.forEach(user => {
        const option = document.createElement("option");
        option.value = user.name;
        option.text = user.name;
        document.getElementById("select1").add(option);
      });
      
      
      
      var stockdata=JSON.parse(localStorage.getItem('stockData'));

      stockdata.forEach(user => {
        const option = document.createElement("option");
        option.value = user.name;
        option.text = user.name;
        document.getElementById("select2").add(option);
      });
    //   debugger

        
    //     stockdata.forEach(user => {
    //         if (Array.isArray(user.nestedData)) {
    //         user.nestedData.forEach(nestedDataItem => {
    //             if (nestedDataItem.partnumber) {
    //             const option = document.createElement("option");
    //             option.value = nestedDataItem.partnumber;
    //             option.text = nestedDataItem.partnumber;
    //             document.getElementById("select3").add(option);
    //             }
    //         });
    //         }
    //     });


























});