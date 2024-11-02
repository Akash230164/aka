const clickSound = new Audio("click.mp3"); // Replace with your sound file path
let currentPage = 1;

function nextPage() {
    clickSound.play(); // Play sound on each click
    document.getElementById(`page${currentPage}`).classList.remove("active");
    currentPage++;
    if (currentPage > 3) currentPage = 1;
    document.getElementById(`page${currentPage}`).classList.add("active");

    // Update page indicator
    document.getElementById("pageIndicator").textContent = `Page ${currentPage} of 3`;
}

function confirmRSVP() {
    clickSound.play();
    document.getElementById("thankYouMessage").style.display = "block";
    setTimeout(() => {
        document.getElementById("thankYouMessage").style.opacity = 1;
    }, 100); // Fade in effect
}







