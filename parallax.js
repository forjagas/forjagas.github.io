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

function assignActive() {
    if (currentSlideNumber == 0) {
        if (document.getElementById("nav_sobre").classList.contains("active") == true) {
            document.getElementById("nav_sobre").classList.remove("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == true) {
            document.getElementById("nav_clim").classList.remove("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == true) {
            document.getElementById("nav_eletrodomesticos").classList.remove("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == true) {
            document.getElementById("nav_gas").classList.remove("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == true) {
            document.getElementById("nav_assistencia").classList.remove("active");
        }
    }
    if (currentSlideNumber == 1) {
        if (document.getElementById("nav_sobre").classList.contains("active") == false) {
            document.getElementById("nav_sobre").classList.add("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == true) {
            document.getElementById("nav_clim").classList.remove("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == true) {
            document.getElementById("nav_eletrodomesticos").classList.remove("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == true) {
            document.getElementById("nav_gas").classList.remove("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == true) {
            document.getElementById("nav_assistencia").classList.remove("active");
        }
    }
    if (currentSlideNumber == 2) {
        if (document.getElementById("nav_sobre").classList.contains("active") == true) {
            document.getElementById("nav_sobre").classList.remove("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == false) {
            document.getElementById("nav_clim").classList.add("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == true) {
            document.getElementById("nav_eletrodomesticos").classList.remove("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == true) {
            document.getElementById("nav_gas").classList.remove("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == true) {
            document.getElementById("nav_assistencia").classList.remove("active");
        }
    }
    if (currentSlideNumber == 3) {
        if (document.getElementById("nav_sobre").classList.contains("active") == true) {
            document.getElementById("nav_sobre").classList.remove("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == true) {
            document.getElementById("nav_clim").classList.remove("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == false) {
            document.getElementById("nav_eletrodomesticos").classList.add("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == true) {
            document.getElementById("nav_gas").classList.remove("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == true) {
            document.getElementById("nav_assistencia").classList.remove("active");
        }
    }
    if (currentSlideNumber == 4) {
        if (document.getElementById("nav_sobre").classList.contains("active") == true) {
            document.getElementById("nav_sobre").classList.remove("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == true) {
            document.getElementById("nav_clim").classList.remove("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == true) {
            document.getElementById("nav_eletrodomesticos").classList.remove("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == false) {
            document.getElementById("nav_gas").classList.add("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == true) {
            document.getElementById("nav_assistencia").classList.remove("active");
        }
    }
    if (currentSlideNumber == 5) {
        if (document.getElementById("nav_sobre").classList.contains("active") == true) {
            document.getElementById("nav_sobre").classList.remove("active");
        }
        if (document.getElementById("nav_clim").classList.contains("active") == true) {
            document.getElementById("nav_clim").classList.remove("active");
        }
        if (document.getElementById("nav_eletrodomesticos").classList.contains("active") == true) {
            document.getElementById("nav_eletrodomesticos").classList.remove("active");
        }
        if (document.getElementById("nav_gas").classList.contains("active") == true) {
            document.getElementById("nav_gas").classList.remove("active");
        }
        if (document.getElementById("nav_assistencia").classList.contains("active") == false) {
            document.getElementById("nav_assistencia").classList.add("active");
        }
    }
}

// ------------- SLIDE MOTION ------------- //
function nextItem() {
    var $previousSlide = $(".tag").eq(currentSlideNumber - 1);
    $previousSlide.removeClass("up-scroll").addClass("down-scroll");
    assignActive()
}

function previousItem() {
    var $currentSlide = $(".tag").eq(currentSlideNumber);
    $currentSlide.removeClass("down-scroll").addClass("up-scroll");
    assignActive()
}

function goHome() {
    navigation(0)
    assignActive()
}

function goSobre() {
    navigation(1)
    assignActive()
}

function goCliAc() {
    navigation(2)
    assignActive()
}

function goEletrodomesticos() {
    navigation(3)
    assignActive()
}

function goGas() {
    navigation(4)
    assignActive()
}

function goAssistencia() {
    navigation(5)
    assignActive()
}


function navigation(toSlide) {
    if (currentSlideNumber < toSlide) {
        var x;
        for (x = currentSlideNumber; x < toSlide; x++) {
            $(".tag").eq(x).removeClass("up-scroll").addClass("down-scroll");
        }
        currentSlideNumber = toSlide;
    }
    else {
        var x;
        for (x = toSlide; x < currentSlideNumber; x++) {
            $(".tag").eq(x).removeClass("down-scroll").addClass("up-scroll");
        }
        currentSlideNumber = toSlide;
    }
}
