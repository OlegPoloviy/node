import bcrypt from "bcrypt";

class User {
    async addUser(name, email, password) {
        const hash = bcrypt.hashSync(password, 10);

        try {
            const response = await fetch(process.env.PATH_TO_SERVER, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: hash,
                }),
            });

            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.error("Error adding user:", err);
        }
    }

    async getUser(login, password) {
        try {
            let response = await fetch("http://localhost:3000/users");
            let users = await response.json();

            const user = users.find(
                (element) => login === element.name || login === element.email
            );

            if (user && bcrypt.compareSync(password, user.password)) {
                return true;
            }

            return false;
        } catch (err) {
            console.error("Error fetching users:", err);
            return false;
        }
    }
}

export default new User();
