export let renderPlusMinus = () => {
    // let number=document.getElementByType("number")
    // if(number.value >=1)
    // alert("number+1")

    let sumar = document.getElementById("sumar");
    let restar = document.getElementById("restar");

    sumar.addEventListener("click", () => {
     if(sumar.dataset.sumar=="sumar")
     sumar.value=(parseInt(sumar.value)+1);
     console.log(sumar.value);
    });
    

    restar.addEventListener("click", () => {
     if(restar.dataset.restar=="restar") 
     restar.value=(parseInt(restar.value)-1)
     console.log(restar.value);  
    });
}


