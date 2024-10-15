// Get the popup element
const popupForm = document.getElementById('popupForm');

// Get all buttons with the "open-popup" class
const openPopupButtons = document.querySelectorAll('.open-popup');

// Get the close button
const closeBtn = document.querySelector('.close');

// Function to show the popup
openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        popupForm.style.display = 'flex';  // Show the popup
    });
});

// Function to close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

// Close the popup if the user clicks outside the popup content
window.addEventListener('click', (event) => {
    if (event.target == popupForm) {
        popupForm.style.display = 'none';
    }
});

// animation

  new WOW().init();