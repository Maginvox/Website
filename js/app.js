$('.message .close')
	.on('click', function() {
		$(this)
			.closest('.message')
			.transition('fade');
	})
;

$("#button_AboutUs").click(function() {
	$("#sidebar_AboutUs")
	.sidebar('setting', 'transition', 'overlay')
	.sidebar('toggle');
});

$("#button_Get").click(function() {
	$("#sidebar_Get")
	.sidebar('setting', 'transition', 'overlay')
	.sidebar('toggle');
});

$("#button_Bugs").click(function() {
	$("#modal_Bugs").modal('show');
});

