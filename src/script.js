const changeThemeBtn = document.querySelector("#change-theme");

changeThemeBtn.addEventListener("change", function() { // aciona o evento ao mudar o seletor checkbox
    document.body.classList.toggle("dark"); // procura a classe do body do documento, aciona o toggle que avalia a classList, se não tiver a
    // classe informada, ele add, se tiver, remove
});