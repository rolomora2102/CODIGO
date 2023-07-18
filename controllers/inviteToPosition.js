$(document).ready(function() {
    $('.jobInvite__container button').click(function() {
      $('#PopUp').load('PopUpSendInvitation.html', function() {
        $('#PopUp').show();
      });
    });
});

