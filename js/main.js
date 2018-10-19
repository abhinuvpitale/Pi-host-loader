$('#nameWrapper, #messageWrapper').on('click', (e) => {
    if(!$(e.target).hasClass('active')) {
        $(e.target).addClass('active');
        $('#' + e.target.getAttribute('id') + ' input').fadeIn();
    } else {
        $('#' + e.target.getAttribute('id') + ' input').fadeOut(100);
        setTimeout(() => {
            $(e.target).removeClass('active');
        }, 100)
    }
})

const inputs = $('input');
inputs.on('change', () => {
    if (inputs[0].value.length > 0 && inputs[1].value.length > 0) {
        $('button').attr('disabled', false);
    } else {
        $('button').attr('disabled', true);
    }
})