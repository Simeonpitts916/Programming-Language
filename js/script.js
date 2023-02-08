window.onload = (function() {
    const form = document.querySelector("form");
    form.onsubmit = (function(event) {
        event.preventDefault();
        const feature = document.querySelector("input[type=radio][name='quest1']:checked").value;
        const framework = document.querySelector("input[type=radio][name='quest2']:checked").value;
        const Learn = document.querySelector("input[type=radio][name='quest3']:checked").value;
        const projects = document.querySelector("input[type=radio][name='quest4']:checked").value;
        const favorit = document.querySelector("input[type=radio][name='quest5']:checked").value;
        
        let result;
        if (feature === "1" && framework === "1" && Learn === "1" && projects === "1" && favorit === "1") {
            result = "javaScript";
        } else if (feature === "1" && framework === "1" && Learn === "2" && projects === "1" && favorit === "2") {
            result = "C#";
        } else if (feature === "2" && framework === "1" && Learn === "2" && projects === "1" && favorit === "2") {
            result = "Swift";
        } else if (feature === "1" && framework === "2" && Learn === "2" && projects === "2" && favorit === "1") {
            result = "javaScript";
        } else if (feature === "1" && framework === "2" && Learn === "1" && projects === "2" && favorit === "1") {
            result = "Swift";
        } else if (feature === "2" && framework === "1" && Learn === "1" && projects === "1" && favorit === "1") {
            result = "C#";
        } else if (feature === "2" && framework === "2" && Learn === "1" && projects === "1" && favorit === "1") {
            result = "javaScript";
        }
        document.getElementById("answer").innerText = result;
        console.log(results)
    });
});