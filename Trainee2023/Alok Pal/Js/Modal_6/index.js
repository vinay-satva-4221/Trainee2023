// DropDown Data


const cityList = [
    { State: 'MadhyaPradesh', CityName: "Indore" },
    { State: 'MadhyaPradesh', CityName: "Bhopal" },
    { State: 'MadhyaPradesh', CityName: "Ratlam" },
    { State: 'Gujrat', CityName: "Ahmedabad" },
    { State: 'Gujrat', CityName: "Vadodara" },
    { State: 'Gujrat', CityName: "Surat" },
    { State: 'Punjab', CityName: "Udaipur" },
    { State: 'Punjab', CityName: "Sirohi" },
    { State: 'Punjab', CityName: "Jaisalmer" },
    { State: 'Rajasthan', CityName: "Ludhiana" },
    { State: 'Rajasthan', CityName: "Amritsar" },
    { State: 'Rajasthan', CityName: "Patiala" }
]

$(document).ready(function () {
    $("#State").change(function () {
        $("#City").html("<option selected disabled value=''>Choose...</option>");
        let citys = cityList.filter(e => e.State == $("#State").val());

        citys.forEach(e => {
            const option = "<option val='" + e.CityName + "'> " + e.CityName + "</option>";
            $("#City").append(option);
        })
    })
});