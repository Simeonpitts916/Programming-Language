window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        const learn = document.getElementById("learn").value;
        const platform = document.getElementById("cross-platform").value;
        const angular = document.getElementById("angular").value;
        const net = document.getElementById("net").value;
        const online = document.getElementById("online").value;
        const inschool = document.getElementById("inschool").value;
        const gaming = document.getElementById("gaming").value;
        const web = document.getElementById("web").value;
        const mcdonald = document.getElementById("Mcdonald").value;
        const burger = document.getElementById("Burger").value;

        document.querySelector("quest1").innerHTML = lear
        document.querySelector("quest2").innerHTML = angular
        document.querySelector("quest3").innerHTML = online
        document.querySelector("quest4").innerHTML = gaming
        document.querySelector("quest5").innerHTML = mcdonald

        if (quest1 === learn && quest2 === angular && quest3 === online && quest4 === gaming && quest5 === Mcdonald) {
            result = "javaScript"
        } else if (quest1 === cross && quest2 === net && quest3 === school && quest4 === web && quest5 === Burger) {
            result = "C#"
        } else if (quest1 === learn && quest2 === net && quest3 === online && quest4 === gaming && quest5 === Burger) {
            result = "Swift"
        } 

        document.getElementById("output").innerText = result;
    }
}