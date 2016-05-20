$(document).ready(function(){
	//$('#tweet-submit').hide();
	//$('#char-count').hide();
	console.log("Hello");

	$('.tweet-compose').click(function(){
		console.log("Yo");
		var newHeight = $('.tweet-compose').css("height");
		console.log(newHeight);
		$(this).next().show();
		$(this).css({"height":"66px"});
	});

	$('.tweet-compose').keyup(function(){
		var charCount = 140 - $('.tweet-compose').val().length;
		$('#char-count').text(charCount);
		if(charCount < 11){
			$('#char-count').css({"color":"red"});
			if(charCount < 0){
				$('#tweet-submit').hide();
			}
			else{
				$('#tweet-submit').show();
			}

		}
		else{
			$('#char-count').css({"color":"black"});
		}
		console.log("tap");
	})

	$('#tweet-submit').click(function(){
		$('#stream').prepend(
						'<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">CJ Powers</strong>' +
							'<span class="username">@cjpwrs</span>' +
							'<p class="tweet-text">' + $('.tweet-compose').val() + '</p>' +
							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
							'</div>' +
							'<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +
								'<div class="time">' +
									'1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
						'</div>' +
					'</div>')
	$('.tweet-compose').val("");

	})

	$('.tweet').hover(function() {
		console.log('bleh');
		//$('.tweet-actions').show();
		$(this).find('.tweet-actions').show();
	});
	$('.tweet').mouseleave(function() {
		console.log('bleh');
		var tweet = $(this);
		var tweetaction = $('.tweet-actions');
		$('.tweet-actions').hide();
	});

	$('.tweet').click(function() {
		$(this).find('.reply').show();
	});
	$(document).click(function(event) { 
    if(!$(event.target).closest('.tweet').length &&
       !$(event.target).is('.tweet')) {
        if($(this).find('.reply').is(":visible")) {
            $(this).find('.reply').hide();
        }
    }        
})
})