$('#send').on('click', sendText);

function sendText() {
    var newText = $('#new_text').val();
    if (newText != '') {
        $('.chatbox').append('<div class="my-bubble bubble">' + newText + '</div>');
           $('#new_text').val('');  
    }
}