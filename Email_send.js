
    (function() {
        emailjs.init("bXhmla1SXrnbtClmh"); // Your public key
    })();

    // Form validation and submission
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent form from submitting the default way

        // Validate the email format
        const email = document.getElementById("email").value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        const loading = document.getElementById("loading");
        const successMessage = document.getElementById("successMessage");
        const errorMessage = document.getElementById("errorMessage");

        // Hide previous messages
        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        if (!emailPattern.test(email)) {
            errorMessage.style.display = "block";  // Show error if email is invalid
            return;
        }

        loading.style.display = "block";  // Show loading message

        // Send email using EmailJS
        emailjs.sendForm('service_gbrtsk6', 'template_cf15q55', this)
        .then(() => {
            loading.style.display = "none";  // Hide loading
            successMessage.style.display = "block";  // Show success message

            // Automatically send a reply to the user using the second email template
            return emailjs.send('service_gbrtsk6', 'template_8jwcwi9', {
                user_name: document.getElementById("name").value,
                user_email: email,
                user_message: document.getElementById("message").value
            });
        }, (error) => {
            loading.style.display = "none";  // Hide loading
            errorMessage.textContent = "Error sending message. Please try again.";
            errorMessage.style.display = "block";  // Show error message
            console.error("Error sending email:", error);
        });
    });