document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll(".gallery img");
    const slider = document.getElementById("slider");
    const slidesContainer = document.getElementById("slides");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const closeBtn = document.querySelector(".close");

    let index = 0;

    // Open slider when clicking a gallery image
    galleryImages.forEach((img, i) => {
        img.addEventListener("click", () => {
            index = i;
            openSlider();
            showSlide(index);
        });
    });

    function openSlider() {
        // Add all images into slider
        slidesContainer.innerHTML = "";
        galleryImages.forEach(img => {
            let clone = img.cloneNode(true);
            slidesContainer.appendChild(clone);
        });
        slider.style.display = "flex";
    }

    function closeSlider() {
        slider.style.display = "none";
    }

    function showSlide(i) {
        if (i >= galleryImages.length) index = 0;
        else if (i < 0) index = galleryImages.length - 1;
        else index = i;
        slidesContainer.style.transform = `translateX(${-index*100}%)`;
    }

    nextBtn.addEventListener("click", () => showSlide(index + 1));
    prevBtn.addEventListener("click", () => showSlide(index - 1));
    closeBtn.addEventListener("click", closeSlider);

    // Swipe gestures
    let startX = 0;
    slidesContainer.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });
    slidesContainer.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) showSlide(index + 1);
        if (startX < endX - 50) showSlide(index - 1);
    });
});