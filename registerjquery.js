 "use strict";

$(document).ready(() => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const processEntries = (event) => {
        event.preventDefault(); // stop form reload
        let isValid = true;

        // Get values
        const email = $("#email_address").val().trim();
        const password1 = $("#password1").val().trim();
        const password2 = $("#password2").val().trim();
        const phone = $("#phone").val().trim();
        const country = $("#country").val();
        const terms = $("#terms").is(":checked");

        // Clear previous output
        $("#form_output").text("");

        // Email validation
        if (email === "") {
            $("#email_error").text("This field is required.");
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $("#email_error").text("Please enter a valid email address.");
            isValid = false;
        } else {
            $("#email_error").text("");
        }

        // Password validation
        if (password1 === "" || password2 === "") {
            $("#form_output").append("<p>Passwords cannot be empty.</p>");
            isValid = false;
        } else if (password1 !== password2) {
            $("#form_output").append("<p>Passwords do NOT match.</p>");
            isValid = false;
        } else {
            $("#form_output").append("<p>Passwords match!</p>");
        }

        // Phone validation
        if (phone === "") {
            $("#phone_error").text("This field is required.");
            isValid = false;
        } else {
            $("#phone_error").text("");
        }

        // Country validation
        if (country === "") {
            $("#country_error").text("Please select a country.");
            isValid = false;
        } else {
            $("#country_error").text("");
        }

        // Terms validation
        if (!terms) {
            $("#terms_error").text("This box must be checked.");
            isValid = false;
        } else {
            $("#terms_error").text("");
        }

        // Output email if everything is valid
      if (isValid) {
        const query = $("#registration_form").serialize();
    window.open(
    "register_account.html" + window.location.search,
    "RegistrationSuccess",
    "width=450,height=350,left=400,top=200"
);

}

    };

    const resetForm = () => {
        $("#registration_form")[0].reset();
        $("#email_error, #phone_error, #country_error, #terms_error").text("");
        $("#form_output").text("");
        $("#email_address").focus();
    };

    $("#register").on("click", processEntries);
    $("#reset_form").on("click", resetForm);

    $("#email_address").focus();
});
