class ShoppingList {
    constructor() {
        this.list = [];
    }

    addItem(item) {
        this.list.push(item);
        this.printList();
    }

    printList() {
        let list = document.getElementById("list");

        list.innerHTML = '';
        let counter = 0;

        for (let item of this.list) {
            console.log(item.name);

            let div = document.createElement("div");
            div.classList.add("item");
            div.id = counter;
            counter++;


            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            if (item.added) {
                checkbox.setAttribute("checked");
            }

            div.appendChild(checkbox);

            let span = document.createElement("span");
            span.innerHTML = item.amount;

            div.appendChild(span);

            span = document.createElement("span");
            span.innerHTML = item.name;

            div.appendChild(span);

            list.appendChild(div);

        }


    }
}