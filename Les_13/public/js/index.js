const form = document.getElementById("register");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const login = formData.get("login");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm_password = formData.get("confirm_password");

    fetch("http://localhost:3050/user", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            login: login,
            email: email,
            password: password,
            confirm_password: confirm_password
        })
    })
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem("jwt", data.token);
            alert("Success!")
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
