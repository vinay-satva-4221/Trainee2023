function checkfile() {
    let file = document.getElementById('file');
    let filePath = file.value;
    let allowedExtensions = /(\.xls|\.xlsx)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        console.log('Invalid file type');
        file.value = '';
        return false;
    }
}