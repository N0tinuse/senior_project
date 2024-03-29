/*global Templates:false */

$(document).ready(function() {

	// initialize runtime js template
	"use strict";
	var datalink = $("#datalink").val();
	$.get(datalink, function(data){
		$("body").append(Templates.mailbox({
			"inboxMessages": data.inbox_messages,
			"sentMessages" : data.sent_messages
		}));

		/* START jQuery Methods */
		$("#messageTabs a").click(function (e) {
			e.preventDefault();
			$(this).tab("show");
		});


		$("#sendBtn").click(function (e) {
			e.preventDefault();
			var subjectText = $("#subject_text").val();
			var messageText = $("#message_text").val();
			var toUserEmail = $("#to_user_email").val();
			var url = "/sendMessage/" + subjectText + "/" + messageText +
				"/" + toUserEmail;
			$.get(url, function(data) {
				var response = data.response;
				if(response){
					$("#newMessage").append(Templates.sending_success());
					setTimeout(function(){
						$("#newMessage").find("form")[0].reset();
					}, 3000);
				} else {
					response = data.error;
					$("#newMessage").append(Templates.sending_failure({
						'response' : response
					}));
				}
				setTimeout(function(){
					$(".alert").fadeOut();
				}, 2000);
			}).fail(function(){
				$("#newMessage").after(Templates.sending_failure());
			});
		});

		/* END jQuery Methods */
	});
});