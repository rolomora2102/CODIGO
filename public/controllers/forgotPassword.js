$(document).ready(function() {
    $('#olvido-password').click(function() {
      $('#PopUp').load('PopUpForgotPassword.html', function() {
        $('#PopUp').show();
      });
    });
});
