$(document).ready(function() {
    $('.jobInvite__container button').click(function() {
      $('#PopUp').load('PopUpInvitationSended.html', function() {
        $('#PopUp').show();
      });
    });
});