console.log("hello world");
// setInterval(function(){
//     console.log(new Date());
    
// }, 1000)
// $("#slider .slides").animate({'margin-left': '-=720'}, 1000)

$(document).ready(function() {
    var width = 720;
    var animationSpeed = 500;
    var currentSlide = 1;
    var pause = 3000; // Added this variable for the pause duration

    // Catch DOM elements
    var $slider = $('#slider');
    var $sliderContainer = $slider.find(".slides"); // Fixed typo in variable name
    var slides = $sliderContainer.find(".slide");
    var interval;


    function startSlider() {
        interval = setInterval(function() {
            $sliderContainer.animate({"margin-left": '-=' + width}, animationSpeed, function() {
                currentSlide++;
                if (currentSlide === slides.length) {
                    currentSlide = 1;
                    $sliderContainer.css("margin-left", 0);
                }
            });
        }, pause); // Moved `pause` to the correct position
    }
    function stopSlider() {
        clearInterval(interval);
    }
    $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider); // Fixed 'mouseLeave' to 'mouseleave'
    startSlider(); // Start the slider when the document is ready
});
