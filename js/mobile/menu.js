//declaro un evento, exportamos la variable "renderMenu", exportar
// significa que este código podrá ser utilizado en otros archivos.
// "renderMenu" es el nombre de la variable, podemos elegir cualquier
// nombre, pero normalmente debe tener el mismo nombre que el archivo.
export let renderMenu = () => {
    // declaro una variable"menuButton",document hace referencia a mi 
    // documento HTML,"getElementById"busca el elemento por su id, en
    //este caso id collapse-button
    let menuButton = document.getElementById("collapse-button");
    // declaro la variable"menu"
    let menu = document.getElementById("menu");
    // añadir el evento que se llama"click" y en este caso se va 
    // a ejecutar o activar cuando haga click en "menuButton".
    // La función "classList.toggle" dará o quitará un nombre de clase a un 
    // elemento html, si tiene el nombre se lo quitará y si no lo
    // tiene se lo pondrá. 

    menuButton.addEventListener("click", () => {
        menuButton.classList.toggle("active"); 
        menu.classList.toggle("active");
    });
}