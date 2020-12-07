$(document).ready(function()
{
    $('.chat_icon').click(function(e)
    {
        $('.chat_box').toggleClass('active');
    });

    $('.conv-form-wrapper').convform({selectInputStyle: 'disable'});
})
