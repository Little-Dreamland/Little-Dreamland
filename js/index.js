/* CONFIG HERE */
var chars = ["0", "1"];
var fontsize = 20;
var subreddits = ["worldnews"];
var displayTime = 1000 * 10;
var typeDelay = 25;
/* END OF CONFIG */

function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
				window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		}

		if (!window.requestAnimationFrame)
				window.requestAnimationFrame = function(callback, element) {
						var currTime = new Date().getTime();
						var timeToCall = Math.max(0, 16 - (currTime - lastTime));
						var id = window.setTimeout(function() {
										callback(currTime + timeToCall);
								},
								timeToCall);
						lastTime = currTime + timeToCall;
						return id;
				};

		if (!window.cancelAnimationFrame)
				window.cancelAnimationFrame = function(id) {
						clearTimeout(id);
				};
}());

var c, c2, cwidth, cheight, ctx, ctx2;
var yPositions = new Array(300).join(0).split('');

function draw() {
		ctx.shadowColor = "rgba(0,0,0,0)";
		ctx.fillStyle = 'rgba(0,0,0,.05)';
		ctx.fillRect(0, 0, cwidth, cheight);

		/*
		    ctx2.clearRect(0,0,c2.width,c2.height);
		    ctx2.drawImage(c, 0,0);
		    ctx.clearRect(0,0,c.width,c.height);
		    ctx.globalAlpha = 0.95;
		    ctx.drawImage(c2,0,0);
		*/

		ctx.fillStyle = '#d3ffd3';
		ctx.shadowColor = "#d3ffd3";
		if ($('body').hasClass('loaded')) {
				ctx.fillStyle = '#00e700';
				ctx.shadowColor = "#00e700";
		}

		if ($('body').hasClass('failure')) {
				ctx.fillStyle = '#e70000';
				ctx.shadowColor = "#e70000";
		}
		ctx.font = '20pt Source Code Pro';
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 10;

		yPositions.map(function(y, index) {
				var text = chars[getRandomInt(0, chars.length - 1)];
				var x = (index * fontsize) + fontsize;
				c.getContext('2d').fillText(text, x, y);
				if (y > 100 + Math.random() * 1e4) {
						yPositions[index] = 0;
				} else {
						yPositions[index] = y + fontsize;
				}
		});

}

var fetchAtOnce = 100;
var titles = [];
var lastpost;
var errorthrown = false;
var fetchrunning = false;
var cTitle = "";
var lastType;
var lastNews = 0;
var msgBox;

function renderText() {

		if (Date.now() - lastType < typeDelay) {
				return;
		}
		lastType = new Date();
		if (cTitle.length === 0) { //either we're happily displaying or currently removing old news
				if (msgBox.html().length === 1) { //let's insert a new text!
						cTitle = titles[0];
						if (cTitle.length === 0) {
								errorthrown = true;
								return;
						}
						titles.splice(0, 1);
						lastNews = new Date();
				} else { //remove old text
						if (Date.now() - lastNews > displayTime) {
								var before = msgBox.html();
								msgBox.html(msgBox.html().substring(0, msgBox.html().length - 2) + '_');
								if (before === msgBox.html()) {
										msgBox.html(msgBox.html().substring(0, msgBox.html().length - 5));
								}
						}
				}
		} else { //seems we need to wait OR add to the title
				if (cTitle.length > 0) {
						msgBox.html(msgBox.html().substr(0, msgBox.html().length - 1) + cTitle[0] + '_');
						cTitle = cTitle.slice(1);
				}
		}
}

function getNewPosts() {
		fetchrunning = true;
		var req = 'https://www.reddit.com/r/' + subreddits.join('+') + '/hot/.json?limit=' + fetchAtOnce;
		if (lastpost !== undefined && lastpost.length > 0) {
				req += '&after=t3_' + lastpost;
		}
		$.getJSON(req, function(data) {
				var children = data.data.children;
				$.each(children, function(i, item) {
						titles.push(item.data.title);
				});
				if (children && children.length > 0) {
						lastpost = children[children.length - 1].data.id;
				} else {
						lastpost = undefined;
				}
				fetchrunning = false;
		}).fail(function() {
				errorthrown = true;
		});
}

var fpslock = 30;
var lastloop = 0;
var isLoading = true;
var isActive = false;

function mainLoop() {
		if (Date.now() - lastloop >= 1000 / fpslock) {
				lastloop = Date.now();
				draw();
				if (isActive === true) {
						if (errorthrown !== false) {
								$('.loading, .msgbox').removeClass('flex').css('display', 'none');
								$('.error').addClass('flex');
								$('body').addClass('failure');
						} else {
								if (fetchrunning === false && titles.length < 10) {
										getNewPosts();
								}
								if (isLoading === true) {
										if (fetchrunning === false) {
												isLoading = false;
												$('.loading').removeClass('flex').css('display', 'none');
												$('.msgbox').css('display', 'initial');
												$('body').addClass('loaded');
										}
								} else {
										renderText();
								}
						}
				}
		}

		requestAnimationFrame(mainLoop);
}

$(document).ready(function() {
		c = $('#c').get(0);
		$('#c').css('height', $(window).height());
		$('#c').css('width', $(window).width());
		cwidth = c.width = $('body').width();
		cheight = c.height = $('body').height();
		ctx = c.getContext('2d');
		c2 = document.createElement('canvas');
		c2.width = c.width;
		c2.height = c.height;
		ctx2 = c2.getContext('2d');
		msgBox = $('.msgbox span');

		$('.loading').addClass('flex');
		mainLoop();
		setTimeout(function() {
				isActive = true;
		}, 3000);
});

$('body').one('click', function() {
		errorthrown = true;
});