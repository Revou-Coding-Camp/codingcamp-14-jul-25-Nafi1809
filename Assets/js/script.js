// Show welcome popup when the page loads
showWelcomePopup();

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    // If the user clicks "Cancel", userName will be null
    if (userName != '') {
        document.getElementById('welcome-user').innerHTML = userName;
    }
}

document.getElementById('project1').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const output = document.getElementById('message-output');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name-input').value.trim();
        const born = document.getElementById('born-input').value;
        const gender = form.gender.value;
        const message = document.getElementById('message-input').value.trim();

        output.innerHTML = `
            <h3 class="font-bold mb-2">Your Submission</h3>
            <p><span class="font-semibold">Name:</span> ${name}</p>
            <p><span class="font-semibold">Born:</span> ${born}</p>
            <p><span class="font-semibold">Gender:</span> ${gender}</p>
            <p><span class="font-semibold">Message:</span> ${message}</p>
        `;
        output.classList.remove('hidden');
        form.reset();
    });
});