dragula([document.getElementById('section1'), document.getElementById('section2')], {
    copy: function (el, source) {
        return source === document.getElementById('section1')
    },
    accepts: function (el, target) {
        return target !== document.getElementById('section1')
    }
});




Papa.parse("MasterChartOfAcounts - Sheet1.csv", {
    download: true,
    header: true,
    complete: function (results) {
        var data = results.data;
        var ul = document.getElementById("section2");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.className = "list-group-item border";
            li.innerHTML = data[i]["AccountCode"] + " -- " + data[i]["AccountName"];
            ul.appendChild(li);
        }
    }
});

// As A jQuery Plugin
$("#nav-tabs").BsNavPaginator(5, "nav-link");

// As A Vanilla JS Plugin
document.querySelector("#nav-tabs").BsNavPaginator(5, "nav-link");

// tab scroll
  
