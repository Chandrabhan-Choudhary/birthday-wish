document.addEventListener("DOMContentLoaded", function () {
    // Swiper.js Initialization
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        effect: "fade", // Smooth fading effect
    });

    // GSAP Text Animation
    const messages = [
        "Happy Birthday Ma'am!🎂🥳🎉",
        "Wishing you a fantastic day! 🎁",
        "May all your dreams come true! 🧿",
        "Best wishes! 😇💌",
        "From XII Science and IP 2023 Alumni's! 😊🤓"
    ];
    const typewriterElement = document.getElementById("typewriter");
    let currentMessage = 0;

    function animateMessage() {
        gsap.fromTo(
            typewriterElement,
            { textContent: "" },
            {
                textContent: messages[currentMessage],
                duration: 2,
                ease: "power1.inOut",
                onComplete: () => {
                    setTimeout(() => {
                        currentMessage = (currentMessage + 1) % messages.length;
                        animateMessage();
                    }, 1500); // Pause before next message
                },
            }
        );
    }

    animateMessage();
});
