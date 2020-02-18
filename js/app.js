import "../sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
    const imagesContainerEl = document.querySelector(
        ".slider__images-container"
    );
    const img1El = document.querySelector(
        ".slider__image-container--first img"
    );
    const img2El = document.querySelector(
        ".slider__image-container--second img"
    );
    let dragging = false;
    const imagesContainerLeftOffset = imagesContainerEl.offsetLeft;
    const img1ContainerEl = document.querySelector(
        ".slider__image-container--first"
    );
    const img2ContainerEl = document.querySelector(
        ".slider__image-container--second"
    );
    const handleEl = document.querySelector(".slider__handle");
    const dividerEl = document.querySelector(".slider__divider");
    let imagesContainerWidth;

    function getOffset(clientX) {
        const offset = clientX - imagesContainerLeftOffset;
        if (offset < 0) return 0;
        else if (offset > imagesContainerWidth) return imagesContainerWidth;
        else return offset;
    }

    function move(clientX) {
        const offset = getOffset(clientX);
        const percent = (offset / imagesContainerWidth) * 100;
        dividerEl.style.left = percent + "%";
        img2ContainerEl.style.width = percent + "%";
    }

    function initEvents() {
        handleEl.addEventListener("mousedown", () => {
            dragging = true;
        });
        handleEl.addEventListener("mouseup", () => {
            dragging = false;
        });

        window.addEventListener("mousemove", () => {
            if (dragging) {
                move(event.clientX);
            }
        });
    }

    function adjustImagesSize() {
        imagesContainerWidth = imagesContainerEl.offsetWidth;
        img1El.getElementsByClassName.width = imagesContainerWidth + "px";
        img2El.getElementsByClassName.width = imagesContainerWidth + "px";
    }

    window.addEventListener("resize", () => {
        adjustImagesSize();
    });

    adjustImagesSize();
    initEvents();
});
