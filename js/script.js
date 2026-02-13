document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yes-button');
    
    yesButton.addEventListener('click', function() {
        window.location.href = 'yes-page.html';
    });
    const noButton = document.getElementById('no-button');
    noButton.addEventListener('click', function() {
        window.location.href = 'no-page.html';
    });
});