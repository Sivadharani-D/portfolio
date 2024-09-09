// Handle contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(Message from ${name} (${email}): ${message});
    alert('Your message has been sent!');
    
    // Optionally reset the form
    contactForm.reset();
});