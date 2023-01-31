window.addEventListener("load", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        function language() {

        let language;
        let learn = document.getElementById("learn");
        let cross = document.getElementById("cross-platfom");
        let angular = document.getElementById("angular");
        let net = document.getElementById("net");
        let online = document.getElementById("online");
        let school = document.getElementById("inschool");
        let gaming = document.getElementById("gaming");
        let web = document.getElementById("web");
        let mcdonald = document.getElementById("Mcdonald");
        let Burger = document.getElementById("Burger");


        const quest1 = document.querySelector("input[type=radio][name=quest1]:checked").value;
        const quest2 = document.querySelector("input[type=radio][name=quest2]:checked").value;
        const quest3 = document.querySelector("input[type=radio][name=quest3]:checked").value;
        const quest4 = document.querySelector("input[type=radio][name=quest4]:checked").value;
        const quest5 = document.querySelector("input[type=radio][name=quest5]:checked").value;

        document.getElementById("mybutton").onclick = function(){
        if (quest1 === learn && quest2 === angular && quest3 === online && quest4 === gaming && quest5 === Mcdonald) {
           language = "javaScript"
        } else if (quest1 === cross && quest2 === net && quest3 === school && quest4 === web && quest5 === Burger) {
            language = "C#"
        } else if (quest1 === learn && quest2 === net && quest3 === online && quest4 === gaming && quest5 === Burger) {
            language = "Swift"
        } else if (quest1 === learn && quest2 === angular && quest3 === online && quest4 === web && quest5 === Burger) {
            language = "javaScript"
        }

        document.getElementById("result").innerHTML = language;
    }
    }
}
