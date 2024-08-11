const auth = document.getElementById("auth");

auth.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(auth);
    const login = formData.get("login");
    const password = formData.get("password");

    fetch("http://localhost:3050/user", {
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    })
        .then(res => {
            if (res.status === 403) {
                return fetch("http://localhost:3050/user/refresh", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ refreshToken: localStorage.getItem("refreshToken") })
                });
            }
            return res.json();
        })
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem("jwt", data.accessToken);
                return fetch("http://localhost:3050/user", {
                    headers: {
                        "Authorization": "Bearer " + data.accessToken
                    }
                });
            }
            return data;
        })
        .then(user => {
            console.log(user);
        })
        .catch(err => {
            console.error(err);
        });
});
