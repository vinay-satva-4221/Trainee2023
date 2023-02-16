function checkimagefile() {
    let fileInput = document.getElementById('file');
    let filePath = fileInput.value;
    let allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        console.log('Invalid File Type');
        fileInput.value = '';
        return false;
    }
}