$(document).ready(function() {
  $(".submit-proposal").click(function(e) {
    e.preventDefault();
    $.facebox($('<iframe src="http://spreadsheets.google.com/embeddedform?formkey=dG1ZTUYyVW5sRFN3U0FFQy1ZaFQwMGc6MA" width="570" height="500" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>'));
  });
});


