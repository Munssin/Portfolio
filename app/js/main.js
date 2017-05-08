$(document).ready(function() {
	new WOW().init();
});

$(".l1, #5").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
});
$(".l2, #6").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});
$(".l3, #7").click(function() {
    $('html, body').animate({
        scrollTop: $("#skill").offset().top
    }, 2000);
});
$(".l4, #8").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 2000);
});

// animation
function Scroller(options) {
		this.svg = options.el;
		//Animation will end when the end is at which point of othe page. .9 is at about 90% down the page/
		// .1 is 10% from the top of the page. Default is middle of the page.
		this.animationBounds = {};
		this.animationBounds.top = options.startPoint || .2;
		this.animationBounds.bottom = options.endPoint || .2;
		this.animationBounds.containerBounds = this.svg.getBoundingClientRect();
		this.start = this.getPagePosition('top');
		this.end = this.getPagePosition('bottom');
		this.svgLength = this.svg.getTotalLength();
		this.svg.style.strokeDasharray = this.svgLength;
		this.animateLine();
		window.addEventListener('scroll', this.animateLine.bind(this));
}

Scroller.prototype.getPagePosition = function (position) {
		//These positions are all relative to the current window. So they top of the page will be negative and thus need to be
		//subtracted to get a positive number
		var distanceFromPageTop = document.body.getBoundingClientRect().top;
		var divPosition = this.animationBounds.containerBounds[position];
		var startPointInCurrentWindow = window.innerHeight * this.animationBounds[position];
		return divPosition - distanceFromPageTop - startPointInCurrentWindow;
};

Scroller.prototype.animateLine = function () {
		this.currentVisiblePosition = window.pageYOffset;
		if (this.currentVisiblePosition < this.start) {
				this.svg.style.strokeDashoffset = this.svgLength;
		}

		if (this.currentVisiblePosition > this.end) {
				this.svg.style.strokeDashoffset = '0px';
		}

		if (this.currentVisiblePosition > this.start && this.currentVisiblePosition < this.end) {
				this.svg.style.strokeDashoffset = this.distanceRemaining() * this.pixelsPerVerticalScroll() + 'px';
		}
};

Scroller.prototype.distanceRemaining = function () {
		return this.end - this.currentVisiblePosition;
};

Scroller.prototype.pixelsPerVerticalScroll = function () {
		this.verticalDistance = this.end - this.start;
		return this.svgLength / this.verticalDistance;
};

new Scroller({
		'el': document.getElementById('triangle'),
		'startPoint': .34,
		'endPoint': .5
});
// animation

//call
$('.phone-call').click(function() {
 $('#form').css('display', 'block');
 // $('#overlay').toggleClass('open');
});
//call

//mobile-menu
$('#toggle').click(function() {
 $(this).toggleClass('active');
 $('#overlay').toggleClass('open');
});
//mobile-menu

//form
$("#form").submit(function () {
	$.ajax({
		type: "POST",
		url: "../php/mail.php",
		data: $(this).serialize()
	}).done(function() {
		alert("Дякую за заявку! Скоро я звяжусь з вами");
	});
	return false;
});
//form

// menu
toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');

  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);

setTimeout(function(){
	nav.classList.toggle('open');
}, 800);
// menu

// bg
    $(".b1").click(function(){
        $(".v1").css({"display": "block"});
				$(".v2").css({"display": "none"});
    });
    $(".b2").click(function(){
        $(".v2").css({"display": "block"});
				$(".v1").css({"display": "none"});
    });
// bg


$("#icon-close").click(function(){
  $("#form").css("display", "none");
});
