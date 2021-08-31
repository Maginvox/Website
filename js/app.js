$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;

$("#button_AboutUs").click(function() {
    $("#sidebar_AboutUs")
    .sidebar('setting', 'transition', 'overlay')
    .sidebar('toggle');
});