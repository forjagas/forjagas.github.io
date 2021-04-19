var ticking = false;
var isFirefox = (/Firefox/i.test(navigator.userAgent));
var isIe = (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent));
var scrollSensitivitySetting = 50; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive) 
var slideDurationSetting = 1000; //Amount of time for which slide is "locked"
var currentSlideNumber = 0;
var totalSlideNumber = $(".tag").length;

// ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
function parallaxScroll(evt) {
    if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * (-120);
    } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
    } else {
        //Set delta for all other browsers
        delta = evt.wheelDelta;
    }

    if (ticking != true) {
        if (delta <= -scrollSensitivitySetting) {
            //Down scroll
            ticking = true;
            if (currentSlideNumber !== totalSlideNumber - 1) {
                currentSlideNumber++;
                nextItem();
            }
            slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
            //Up scroll
            ticking = true;
            if (currentSlideNumber !== 0) {
                currentSlideNumber--;
            }
            previousItem();
            slideDurationTimeout(slideDurationSetting);
        }
    }
}

// ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
function slideDurationTimeout(slideDuration) {
    setTimeout(function () {
        ticking = false;
    }, slideDuration);
}

// ------------- ADD EVENT LISTENER ------------- //
var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
window.addEventListener(mousewheelEvent, _.throttle(parallaxScroll, 60), false);

// ------------- SLIDE MOTION ------------- //
function nextItem() {
    var $previousSlide = $(".tag").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
}

function previousItem() {
    var $currentSlide = $(".tag").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
}

function goHome() {
    if (currentSlideNumber > 0) {
        var x;
        for (x = 0; x < currentSlideNumber; x++) {
            var $currentSlide = $(".tag").eq(x);
            $currentSlide.removeClass("down-scroll").addClass("up-scroll");
        }
    }
    currentSlideNumber = 0;
}

function goSobre() {
    if (currentSlideNumber == 0) {
        $(".tag").eq(0).removeClass("up-scroll").addClass("down-scroll");
        currentSlideNumber = 1;
    }
    else {
        var x;
        for (x = 1; x < currentSlideNumber; x++) {
            var $currentSlide = $(".tag").eq(x);
            $currentSlide.removeClass("down-scroll").addClass("up-scroll");
            currentSlideNumber = 1;
        }
    }

}

function goCliAc() {
    if (currentSlideNumber < 2) {
        var x;
        for (x = 0; x < 2; x++) {
            $(".tag").eq(x).removeClass("up-scroll").addClass("down-scroll");
        }
        currentSlideNumber = 2;
    }
    else {
        var x;
        for (x = 2; x < currentSlideNumber; x++) {
            var $currentSlide = $(".tag").eq(x);
            $currentSlide.removeClass("down-scroll").addClass("up-scroll");
            currentSlideNumber = 2;
        }
    }
}

function goEletrodomesticos() {
    if (currentSlideNumber < 3) {
        var x;
        for (x = 0; x < 3; x++) {
            $(".tag").eq(x).removeClass("up-scroll").addClass("down-scroll");
        }
        currentSlideNumber = 3;
    }
    else {
        var x;
        for (x = 3; x < currentSlideNumber; x++) {
            var $currentSlide = $(".tag").eq(x);
            $currentSlide.removeClass("down-scroll").addClass("up-scroll");
            currentSlideNumber = 3;
        }
    }
}

function goGas() {
    if (currentSlideNumber < 4) {
        var x;
        for (x = 0; x < 4; x++) {
            $(".tag").eq(x).removeClass("up-scroll").addClass("down-scroll");
        }
        currentSlideNumber = 4;
    }
    else {
        var x;
        for (x = 4; x < currentSlideNumber; x++) {
            var $currentSlide = $(".tag").eq(x);
            $currentSlide.removeClass("down-scroll").addClass("up-scroll");
            currentSlideNumber = 4;
        }
    }
}

function goAssistencia() {
    if (currentSlideNumber < 5) {
        var x;
        for (x = currentSlideNumber; x < 5; x++) {
            var $previousSlide = $(".tag").eq(x);
            $previousSlide.removeClass("up-scroll").addClass("down-scroll");
        }
    }
    currentSlideNumber = 5;
}



