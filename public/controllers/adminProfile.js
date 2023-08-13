$(document).ready(function() {
    $('#password_admin').click(function() {
      $('#PopUp').load('PopUpChangePassword.html', function() {
        $('#PopUp').show();
      });
    });
});
