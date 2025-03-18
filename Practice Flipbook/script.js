let currentPage = 0; //check if this is correct with index.html
const totalPages = 7;
const pages = document.querySelectorAll(".page");

function updateZIndex() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.zIndex = totalPages;
        } else if (index < currentPage) {
            page.style.zIndex = totalPages - index;
        } else {
            page.style.zIndex = index;
        }
    });
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        pages[currentPage].classList.add("flipping");
        setTimeout(() => {
            pages[currentPage].classList.add("flipped");
            pages[currentPage].classList.remove("flipping");
            currentPage++;
            updateZIndex(); //check update z index
        }, 500); // Ensuring the page stays visible while flipping
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.add("flipping");
        setTimeout(() => {
            pages[currentPage].classList.remove("flipped");
            pages[currentPage].classList.remove("flipping");
            updateZIndex();
        }, 500);
    }
}

function restartBook() {
    pages.forEach(page => page.classList.remove("flipped", "flipping"));
    currentPage = 0;
    updateZIndex();
}


