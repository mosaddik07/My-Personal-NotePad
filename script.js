// Function to save content to local storage
function saveContent() {
    const wordsDiv = document.querySelector('.words');
    const content = wordsDiv.innerText; // Use innerText to get the content
    localStorage.setItem('savedContent', content); // Save to local storage
}

// Load the content from local storage when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem('savedContent');
    if (savedContent) {
        document.querySelector('.words').innerText = savedContent;
    }
});

// Add event listener to save content on input
document.querySelector('.words').addEventListener('input', saveContent);

// Clear the content from local storage and the div
document.getElementById('clearBtn').addEventListener('click', () => {
    localStorage.removeItem('savedContent'); // Remove from local storage
    document.querySelector('.words').innerText = ''; // Clear the div content
});
