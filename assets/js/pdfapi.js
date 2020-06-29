$(document).ready(function () {

    $("#convert-to-jpg-btn").click((e) => {
        var file = $("#file-select").prop('files')[0];
        var formData = new FormData();
        // if (file.type.match('image.*')) {
        formData.append('file', file, file.name);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", PDF_API + '/pdf_to_image', true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                var a = document.createElement('a');
                var blob = new Blob([xhr.response]);
                var url = window.URL || window.webkitURL;
                var blobUrl = url.createObjectURL(blob);
                a.href = blobUrl;
                a.download = "te_1.jpg";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
            } else {
                alert('An error occurred!');
            }
        }
        xhr.send(formData);
    })

    $("#convert-to-pdf-btn").click((e) => {
        var file = $("#file-select-2").prop('files')[0];
        var formData = new FormData();
        // if (file.type.match('image.*')) {
        formData.append('file', file, file.name);
        let xhr = new XMLHttpRequest();
        xhr.open("POST", PDF_API + '/image_to_pdf', true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == "200") {
                var a = document.createElement('a');
                var blob = new Blob([xhr.response]);
                var url = window.URL || window.webkitURL;
                var blobUrl = url.createObjectURL(blob);
                a.href = blobUrl;
                a.download = "sample.pdf";
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click();
            } else {
                alert('An error occurred!');
            }
        }
        xhr.send(formData);
    })

})