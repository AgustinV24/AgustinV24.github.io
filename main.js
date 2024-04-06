class PlanetInfo
{
constructor(name, imageRef, mass, diameter, sunDistance, day, year, moons,gravityfactor){
    this.name = name ;
this.imageRef = imageRef;
this.mass = mass;
this.diameter = diameter;
this.sunDistance = sunDistance;
this.day = day;
this.year = year;
this.moons = moons;
this.gravityfactor = gravityfactor;
}
}
const planetsImgs = document.getElementsByName("Planets");
let imgB = document.getElementById("PlanetB");
imgB.style.visibility = "hidden";
let cont = 0;
let nameP = document.getElementById("Name");
let mass = document.getElementById("Mass");
let diameter = document.getElementById("Diameter");
let sunDistance = document.getElementById("SunDistance");;
let day = document.getElementById("Day");
let year = document.getElementById("Year");
let moons = document.getElementById("Moons");
async function fetchPlanets() {
  try {
      const response = await fetch('Planets.json');
      const data = await response.json();

      const planets = data.map(planet => new PlanetInfo(
          planet.name,
          planet.imageRef,
          planet.mass,
          planet.diameter,
          planet.sunDistance,
          planet.day,
          planet.year,
          planet.moons,
          planet.gravityfactor
      ));

      const planetsImgs = document.getElementsByName("Planets");

      for (let index = 0; index < planetsImgs.length; index++) {
          const element = planetsImgs[index];
          

          element.addEventListener("mouseover",function(){
            element.classList.add("ampliada")
            
        })
        element.addEventListener("mouseout",function(){
            element.classList.remove("ampliada")
            
        })
          
          element.addEventListener("click", function () {
              imgB.style.visibility = "visible";
              imgB.src = planets[index].imageRef;
              nameP.textContent = planets[index].name;
              mass.textContent = "Mass: " + planets[index].mass;
              diameter.textContent = "Diameter: " + planets[index].diameter;
              sunDistance.textContent = "Distance from Sun: " + planets[index].sunDistance;
              day.textContent = "Day duration: " + planets[index].day;
              year.textContent = "Year duration: " + planets[index].year;
              moons.textContent = "Moons: " + planets[index].moons;
              
              SaveValues();
              SetValues(planets[index].name, planets[index].gravityfactor);
              RecoverValues();
          });
      }
  } catch (error) {
      console.error('Error fetching planets:', error);
  }
  
}

fetchPlanets();

// for (let index = 0; index < planetsImgs.length; index++) {
//     const element = planetsImgs[index];
    
//     element.addEventListener("mouseover",function(){
//         element.classList.add("ampliada")
        
//     })
//     element.addEventListener("mouseout",function(){
//         element.classList.remove("ampliada")
        
//     })

//     element.addEventListener("click", function() {
//         element.classList.remove("ampliada")
//         imgB.style.visibility = "visible";
//         imgB.src = planets[index].imageRef;
//         nameP.textContent = planets[index].name;
//         mass.textContent = "Mass: " + planets[index].mass;
//         diameter.textContent = "Diameter: " + planets[index].diameter;
//         sunDistance.textContent = "Distance from Sun: " + planets[index].sunDistance;
//         day.textContent = "Day duration: " + planets[index].day;
//         year.textContent = "Year duration: " + planets[index].year;
//         moons.textContent = "Moons: " + planets[index].moons;
//         SaveValues();
//         SetValues(planets[index].name,planets[index].gravityfactor);
//         RecoverValues();

//     })
  

// }
//alert(cont);
// let cont = 0;



// asd.forEach(element => {
//     element.addEventListener("mouseover",function(){
//         element.classList.add("ampliada")
        
//     })
//     element.addEventListener("mouseout",function(){
//         element.classList.remove("ampliada")
        
//     })

//     element.addEventListener("click", function() {
//         element.classList.remove("ampliada")
//         imgB.style.visibility = "visible";
//         imgB.src = "Mercury.jpg";
//         for (let index = 0; index < asd.length; index++) 
//         {          
//             if(asd[index] == element)
//             {

//             }
//         }
//     })
//     cont ++;
// })
//alert(cont);
