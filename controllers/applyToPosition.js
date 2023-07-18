$(document).ready(function() {
    $('.consultedposition__button').click(function() {
      $('#PopUp').load('PopUpJobApplied.html', function() {
        $('#PopUp').show();
      });
    });
});