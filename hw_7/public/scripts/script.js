const form = document.getElementById("order");
const order = document.getElementsByClassName("your-order")[0];


function sendData(data){
    fetch("/api/order", {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("Order confirmed!");
    })
    .catch(err => {
        console.error(err);
        alert("Error");
    })
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formated = Object.fromEntries(formData);
    sendData(formated);
    order.style.display = "block";
    order.innerHTML = JSON.stringify(formated);
});


