
let formulario = document.getElementById("miFormulario");
formulario.style.visibility = "hidden";
let results = document.getElementsByName("Results");
let deleteN = document.getElementById("DeleteButton");
let currentPlanet;
let currentPlanetW;
function ShowResults(resultado) {
    for (let index = results.length-1; index > 0; index--) {
        if(results[index-1].textContent !== ""){
            results[index].textContent = results[index-1].textContent
        }
        
        }
    results[0].textContent = resultado;
    

    Swal.fire(resultado);
    

 
    SaveValues();
}

function SetValues(planet, factor)
{
    currentPlanet = planet;
    currentPlanetW = factor;
    formulario.style.visibility = "visible";
}
function SaveValues()
{
    let texts=[];
results.forEach(element => {
texts.push(element.textContent)

})

let JsonTexts = JSON.stringify(texts)
localStorage.setItem(currentPlanet + "Results", JsonTexts)
}
function RecoverValues()
{

   let texts = JSON.parse(localStorage.getItem(currentPlanet + "Results"));

   if(texts != null)
   {
 
    for (let index = 0; index < Math.min(texts.length,results.length); index++) {
        results[index].textContent = texts[index];
        
       }
   

   }
   else{

    for (let index = 0; index < results.length; index++) {
        results[index].textContent = "";
        
       }
   }


}

deleteN.addEventListener("click", function(){
    localStorage.clear();
    results.forEach(element => {
        element.textContent = "";
    })
})
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById('dato1').value;
    const peso = document.getElementById('dato2').value;

    // Verifica si se han completado todos los campos requeridos
    if (peso.trim() !== "" && nombre.trim() !== "") {
        ShowResults(nombre + " weights " + peso * currentPlanetW + " Kg on the planet " + currentPlanet);
    } 
});
//RecoverValues();
