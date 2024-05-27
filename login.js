const googleSignInButton = document.querySelector(".google-sign-in button");
googleSignInButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Perform Google sign-in logic here
    // For demonstration purposes, let's assume the user is signed in successfully
    window.location.href = "internal_rp.html";
});
