const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // LOGIN VALIDATION
    const mail = document.getElementById("email").value;
    if (mail === "") {
        alert("Please enter your email.");
        return;
    } else {
        alert("Login successful!");
    }

    const email = document.getElementById("email").value;

    localStorage.setItem("clientEmail", email);

    window.location.href = "dashboard.html";
});

//  const userProjects = projects.filter(
//         p => p.email.trim().toLowerCase() === email.trim().toLowerCase()
//     );