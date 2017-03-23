$(document).ready(function() {
	new WOW().init();
});

$("#1, #5").click(function() {
    $('html, body').animate({
        scrollTop: $("#header").offset().top
    }, 2000);
});
$("#2, #6").click(function() {
    $('html, body').animate({
        scrollTop: $("#skill").offset().top
    }, 2000);
});
$("#3, #7").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top
    }, 2000);
});
$("#4, #8").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
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


// // Создаем распознаватель
//  var recognizer = new webkitSpeechRecognition();
//
//  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить
//  recognizer.interimResults = true;
//
//  // Какой язык будем распознавать?
//  recognizer.lang = 'ru-Ru';
//
//  // Используем колбек для обработки результатов
//  recognizer.onresult = function (event) {
// 	 var result = event.results[event.resultIndex];
// 	 if (result.isFinal) {
// 		 alert('Вы сказали: ' + result[0].transcript);
// 	 } else {
// 		 console.log('Промежуточный результат: ', result[0].transcript);
// 	 }
//  };
//
//  function speech () {
// 	 // Начинаем слушать микрофон и распознавать голос
// 	 recognizer.start();
//  }
//
//  var synth = window.speechSynthesis;
//  var utterance = new SpeechSynthesisUtterance('How about we say this now? This is quite a long sentence to say.');
//
//  function talk () {
// 	 synth.speak (utterance);
//  }
//
//  function stop () {
// 	 synth.pause();
//  }
