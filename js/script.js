window.onload = function() {
    let form = document.querySelector("form");
    form.onsubmit = function(event) {
        event.preventDefault();

        document.getElementById("mybutton").onclick = function() {

            var quest1 = document.querySelector("input[name='learn']:checked").value;
            var quest2 = document.querySelector("input[name='angular']:checked").value;
            var quest3 = document.querySelector("input[name='online']:checked").value;
            var quest4 = document.querySelector("input[name='gaming']:checked").value;
            var quest5 = document.querySelector("input[name='Mcdonald']:checked").value;

       


        if (quest1 && quest2 && quest3 && quest4 && quest5) {
            result = "javaScript"
        } else if (quest1 === cross && quest2 === net && quest3 === school && quest4 === web && quest5 === Burger) {
            result = "C#"
        } else if (quest1 === learn && quest2 === net && quest3 === online && quest4 === gaming && quest5 === Burger) {
            result = "Swift"
        } 
    }}
}

console.log()