document.addEventListener("DOMContentLoaded", function(e) {
    let list = document.getElementById("ul_list");

    list.addEventListener("click", function(event) {
        if (event.target.tagName == "LI") {
            event.target.remove();
        }
    })

    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", function(e) {
        let message = document.getElementById("message");
        let new_message = document.createElement("li");
        new_message.innerHTML = message.value;

        let div = document.getElementById("ul_list");
        div.appendChild(new_message);

        message.value = "";
        message.focus();
    });
})