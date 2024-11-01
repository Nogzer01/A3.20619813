//---------- GALLERY SCROLL TRIGGER ----------//
gsap.registerPlugin(ScrollTrigger);
// Scroll trigger for the first group of images to appear //
gsap.to(".tran1", {
    scrollTrigger: {
        trigger: "#specs",
        start: "",
        scrub: 1,
    },
    opacity: 1,
    ease: "none",
    duration: 2,
})

// Scroll trigger for the second group of images to appear //
gsap.to(".tran2", {
    scrollTrigger: {
        trigger: "#specs",
        start: "top",
        scrub: 1,
    },
    opacity: 1,
    ease: "none",
    duration: 3,
})

// Scroll trigger for the third group of images to appear //
gsap.to(".tran3", {
    scrollTrigger: {
        // Element that triggers the images to appear when they hit the viewport //
        trigger: "#specs",
        start: "center",
        scrub: 1,
    },
    opacity: 1,
    ease: "none",
    duration: 5,
})

// Scroll trigger function //
ScrollTrigger.create({
    // Section the scroll trigger effects //
    trigger: "#gallery",
    start: "top top",
    // How long the user can scroll for (pixels) //
    end: "+=1800",
    scrub: true,
    // "Pin" the section on the page until the trigger is complete //
    pin: true,
    anticipatePin: 1
});

//---------- LIGHTBOX ----------//
const lightBoxBackground = document.createElement('div');
lightBoxBackground.id = "lightBoxBackground";
document.body.appendChild(lightBoxBackground);

// Select image being displayed //
const images = document.querySelectorAll('.lightbox');
images.forEach(image => {
    // Bring lightbox onto the screen //
    image.addEventListener('click', e => {
        lightBoxBackground.classList.add('active');
        const lightBoxImage = document.createElement('img');
        // Find source to be displayed //
        lightBoxImage.src = image.src;
        lightBoxImage.id = "lightBoxImage";
        // Remove source after "clicking" off
        while (lightBoxBackground.firstChild){
            lightBoxBackground.removeChild(lightBoxBackground.firstChild)
        }
        lightBoxBackground.appendChild(lightBoxImage);
    })
})
// Remove lightbox from screen //
lightBoxBackground.addEventListener('click', e => {
    lightBoxBackground.classList.remove('active');
})

//---------- SVG ANIMATION ----------//
const svg = document.getElementById('dragIndicator');

//---------- SPECS PAGE ----------//
// Find element(s) on page //
let onSwitchContainer = document.querySelector('#on_switchcontainer')
let dragme = document.querySelector(".dragme")
let bikeoff = document.querySelector(".specs_bikeoff")
let bikeon = document.querySelector(".specs_bikeon")
let tyreicon = document.querySelector(".tyres_infoicon")
let engineicon = document.querySelector(".engine_infoicon")
let bodyicon = document.querySelector(".body_infoicon")
let featuresicon = document.querySelector(".features_infoicon")

// Set audio variable for bike ignition sound //
const ignitionSound = new Audio('audio/bike_ignition.wav')

// GSAP Graggable interactive element //
Draggable.create(".ignition_button", {
    // Drag direction//
    type: "x",
    // Create area element can be dragged in //
    bounds: document.getElementById("on_switchcontainer"),
    inertia: false,

    // Finish dragging element //
    onDragEnd: function () {
        // Play audio once drag function is finished //
        ignitionSound.play();
        // Hide old elements on page //
        dragme.style.visibility = "hidden";
        bikeon.style.visibility = "visible";
        tyreicon.style.visibility = "visible";
        engineicon.style.visibility = "visible";
        bodyicon.style.visibility = "visible";
        featuresicon.style.visibility = "visible";
        // Make new elements appear on page //
        bikeon.style.opacity = "1";
        tyreicon.style.opacity = "1";
        bodyicon.style.opacity = "1";
        engineicon.style.opacity = "1";
        featuresicon.style.opacity = "1";
    },
  });

// Declare functions for new "tyre" elements //
let tyreInfoButton = document.querySelector('.tyres_infoicon')
let tyreInfo = document.querySelector('.tyre')
let tyreInfoBackButton = document.querySelector('.tyre_info_back_button')

tyreInfoButton.addEventListener('click', function(){
    tyreInfo.style.visibility = "visible";
    tyreInfo.style.opacity = '1';

    bikeon.style.visibility = "visibility";
    bikeoff.style.visibility = "hidden";
    tyreicon.style.visibility = "hidden";
    engineicon.style.visibility = "hidden";
    bodyicon.style.visibility = "hidden";
    featuresicon.style.visibility = "hidden";

    onSwitchContainer.style.opacity = "0.2";    
    bikeon.style.opacity = "0.2";
    tyreicon.style.opacity = "0";
    bodyicon.style.opacity = "0";
    engineicon.style.opacity = "0";
    featuresicon.style.opacity = "0";
})

tyreInfoBackButton.addEventListener('click', function(){
    tyreInfo.style.visibility = 'hidden';

    bikeon.style.visibility = "visible";
    bikeoff.style.visibility = "visible";
    tyreicon.style.visibility = "visible";
    engineicon.style.visibility = "visible";
    bodyicon.style.visibility = "visible";
    featuresicon.style.visibility = "visible";

    onSwitchContainer.style.opacity = "1";  
    bikeon.style.opacity = "1";
    tyreicon.style.opacity = "1";
    bodyicon.style.opacity = "1";
    engineicon.style.opacity = "1";
    featuresicon.style.opacity = "1";
})

// Declare functions for new "engine" elements //
let engineInfoButton = document.querySelector('.engine_infoicon')
let engineInfo = document.querySelector('.engine')
let engineBackButton = document.querySelector('.engine_info_back_button')

engineInfoButton.addEventListener('click', function(){
    engineInfo.style.visibility = "visible";
    engineInfo.style.opacity = '1';

    bikeon.style.visibility = "visibility";
    bikeoff.style.visibility = "hidden";
    tyreicon.style.visibility = "hidden";
    engineicon.style.visibility = "hidden";
    bodyicon.style.visibility = "hidden";
    featuresicon.style.visibility = "hidden";

    onSwitchContainer.style.opacity = "0.2";    
    bikeon.style.opacity = "0.2";
    tyreicon.style.opacity = "0";
    bodyicon.style.opacity = "0";
    engineicon.style.opacity = "0";
    featuresicon.style.opacity = "0";
})

engineBackButton.addEventListener('click', function(){
    engineInfo.style.visibility = 'hidden';

    bikeon.style.visibility = "visible";
    bikeoff.style.visibility = "visible";
    tyreicon.style.visibility = "visible";
    engineicon.style.visibility = "visible";
    bodyicon.style.visibility = "visible";
    featuresicon.style.visibility = "visible";

    onSwitchContainer.style.opacity = "1";  
    bikeon.style.opacity = "1";
    tyreicon.style.opacity = "1";
    bodyicon.style.opacity = "1";
    engineicon.style.opacity = "1";
    featuresicon.style.opacity = "1";
})

// Declare functions for new "body" elements //
let bodyInfoButton = document.querySelector('.body_infoicon')
let bodyInfo = document.querySelector('.body')
let bodyBackButton = document.querySelector('.body_info_back_button')

bodyInfoButton.addEventListener('click', function(){
    bodyInfo.style.visibility = "visible";
    bodyInfo.style.opacity = '1';

    bikeon.style.visibility = "visibility";
    bikeoff.style.visibility = "hidden";
    tyreicon.style.visibility = "hidden";
    engineicon.style.visibility = "hidden";
    bodyicon.style.visibility = "hidden";
    featuresicon.style.visibility = "hidden";

    onSwitchContainer.style.opacity = "0.2";    
    bikeon.style.opacity = "0.2";
    tyreicon.style.opacity = "0";
    bodyicon.style.opacity = "0";
    engineicon.style.opacity = "0";
    featuresicon.style.opacity = "0";
})

bodyBackButton.addEventListener('click', function(){
    bodyInfo.style.visibility = 'hidden';

    bikeon.style.visibility = "visible";
    bikeoff.style.visibility = "visible";
    tyreicon.style.visibility = "visible";
    engineicon.style.visibility = "visible";
    bodyicon.style.visibility = "visible";
    featuresicon.style.visibility = "visible";

    onSwitchContainer.style.opacity = "1";  
    bikeon.style.opacity = "1";
    tyreicon.style.opacity = "1";
    bodyicon.style.opacity = "1";
    engineicon.style.opacity = "1";
    featuresicon.style.opacity = "1";
})

// Declare functions for new "features" elements //
let featuresInfoButton = document.querySelector('.features_infoicon')
let featuresInfo = document.querySelector('.features')
let featuresBackButton = document.querySelector('.features_info_back_button')

featuresInfoButton.addEventListener('click', function(){
    featuresInfo.style.visibility = "visible";
    featuresInfo.style.opacity = '1';

    bikeon.style.visibility = "visibility";
    bikeoff.style.visibility = "hidden";
    tyreicon.style.visibility = "hidden";
    engineicon.style.visibility = "hidden";
    bodyicon.style.visibility = "hidden";
    featuresicon.style.visibility = "hidden";

    onSwitchContainer.style.opacity = "0.2";    
    bikeon.style.opacity = "0.2";
    tyreicon.style.opacity = "0";
    bodyicon.style.opacity = "0";
    engineicon.style.opacity = "0";
    featuresicon.style.opacity = "0";
})

featuresBackButton.addEventListener('click', function(){
    featuresInfo.style.visibility = 'hidden';

    bikeon.style.visibility = "visible";
    bikeoff.style.visibility = "visible";
    tyreicon.style.visibility = "visible";
    engineicon.style.visibility = "visible";
    bodyicon.style.visibility = "visible";
    featuresicon.style.visibility = "visible";

    onSwitchContainer.style.opacity = "1";  
    bikeon.style.opacity = "1";
    tyreicon.style.opacity = "1";
    bodyicon.style.opacity = "1";
    engineicon.style.opacity = "1";
    featuresicon.style.opacity = "1";
})