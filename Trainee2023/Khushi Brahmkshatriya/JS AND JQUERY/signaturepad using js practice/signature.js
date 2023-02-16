$(document).ready(function(){

    var signaturePad = new SignaturePad(document.getElementById('signature-pad'), {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        penColor: 'rgb(0, 0, 0)'
      });
      var saveButton = document.getElementById('save');
      var cancelButton = document.getElementById('clear');
      
      $("#save").bind("click", function () {
        
        var base64 = $('#signature-pad')[0].toDataURL();
                $("#imgCapture").attr("src", base64);
                $("#imgCapture").show();
      });
      
      cancelButton.addEventListener('click', function (event) {
        signaturePad.clear();
      });
})
