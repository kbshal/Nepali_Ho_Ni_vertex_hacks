// camera
var form = $('#camera');

form.submit(function (e) {
    console.log(data_uri)

    e.preventDefault();
    var formData = new FormData(this)
    $.ajax({
        type: 'post',
        // url: frm.attr('action'),
        url: "https://vertexai.drcfs.org/uploader",
        // contentType: 'application/json',
        // dataType: 'json',
        data: formData,

        success: function (output) {
            console.log(output)
            // allow use to write message again
        },
        error: function (data) {
            console.log('An error occurred.');
            console.log(data);
        },
    });
});

