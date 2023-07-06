function addAreaExperience() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("experienceField");

    let b = document.getElementById("experienceButton")
    let t = document.getElementsByClassName("experienceArea")[0]

    t.insertBefore(newNode, b)
}

function addAreaEducation() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("educationField");

    let b = document.getElementById("educationButton")
    let t = document.getElementsByClassName("educationArea")[0]

    t.insertBefore(newNode, b)

}

function addAreaProject() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("projectField");

    let b = document.getElementById("projectButton")
    let t = document.getElementsByClassName("projectArea")[0]

    t.insertBefore(newNode, b)

}

function addAreaSkill() {
    let newNode = document.createElement("input");
    newNode.style.display = "block"
    newNode.classList.add("skillField");

    let b = document.getElementById("skillButton")
    let t = document.getElementsByClassName("skillArea")[0]

    t.insertBefore(newNode, b)

}


function cvGenerator() {
    let name = document.getElementById("nameField").value;
    document.getElementById("nameSet").innerHTML = name;

    document.getElementById("designationSet").innerHTML = document.getElementById("designationField").value;



    document.getElementById("addressSet").innerHTML = document.getElementById("addressField").value;



    document.getElementById("phoneSet").innerHTML = document.getElementById("phoneField").value;

    document.getElementById("emailSet").innerHTML = document.getElementById("emailField").value;

    let skill = document.getElementsByClassName("skillField");
    let str = ''
    for (let e of skill) {
        str = str + `<li>${e.value}</li>`
    }
    document.getElementById("skillSet").innerHTML = str;






    let experience = document.getElementsByClassName("experienceField");
    let str1 = ''
    for (let e of experience) {
        str1 = str1 + `<li>${e.value}</li>`
    }
    document.getElementById("experienceSet").innerHTML = str1;





    let education = document.getElementsByClassName("educationField");
    let str2 = ''
    for (let e of education) {
        str2 = str2 + `<li>${e.value}</li>`
    }
    document.getElementById("educationSet").innerHTML = str2;




    let project = document.getElementsByClassName("projectField");
    let str3 = ''
    for (let e of project) {
        str3 = str3 + `<li>${e.value}</li>`
    }
    document.getElementById("projectSet").innerHTML = str3;


    let file = document.getElementById("imageField").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.getElementById("imageSet").src = reader.result;
    }


    document.getElementsByClassName("cv-input")[0].style.display = "none";
    document.getElementsByClassName("cv")[0].style.display = "block";
}

function printResume() {
    window.print();
}