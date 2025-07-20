var svg = document.getElementById("malaquitaSVG")
var svgNS =  "http://www.w3.org/2000/svg";
var miElipse = document.getElementById("miEclipse");
var totalEjeMenor = 200;

function cambiaRatioElipse(porcentaje){
    let rxMedida =  miElipse.getAttribute("rx")
    totalEjeMenor = (rxMedida*porcentaje)/100
    miElipse.setAttribute("ry", totalEjeMenor)    
}

function achataEclipse (){
    let circulo1 =  document.createElementNS(svgNS, "circle")
    var svg = document.getElementById("miEclipse")
}

function radElipse(angulo, a, b, centroX, centroY){
    let anguloMOD = angulo % 360
    let a2 = a*a
    let b2 = b*b
    let a2b2 = a2*b2
    let anguloOK 
    if (anguloMOD < 89.8 ){
        anguloOK = anguloMOD
    } else if (anguloMOD > 89.8 && anguloMOD < 90.2) {
        anguloOK = 89.9   
    } else if ( anguloMOD > 269.8 && anguloMOD < 270.2){
       anguloOK = 269.9     
    } else {
         anguloOK = anguloMOD
    }
    let tang =  Math.tan((anguloOK * Math.PI) / 180)
    
    //Para posible calculos de longitud del radio
    //let x2 = a2b2 /(b2 + (a2*tang*tang))
    //let y2 = b2*( 1-(x2/a2))
   
    let xOK = Math.sqrt(a2b2 /(b2 + (a2*tang*tang))) 
    let yOK = Math.sqrt(b2*( 1-((xOK*xOK)/a2))) 

    if (anguloMOD > 90  && anguloMOD < 180){
        xOK = -1*xOK
    }  else if (anguloMOD >180 && anguloMOD < 270) {
        xOK = -1*xOK
        yOK = -1*yOK
    } else if ( anguloMOD > 270 && anguloMOD < 360){
        yOK = -1*yOK
    } 
    let result = []
    result[0] = (xOK + centroX)
    result[1] = (centroY - yOK) 
    return result
}


function alturaRadiElipse(angulo, a, b){
    let anguloMOD = angulo % 360
    let a2 = a*a
    let b2 = b*b
    let a2b2 = a2*b2
    let anguloOK 
    if (anguloMOD < 89.8 ){
        anguloOK = anguloMOD
    } else if (anguloMOD > 89.8 && anguloMOD < 90.2) {
        anguloOK = 89.9   
    } else if ( anguloMOD > 269.8 && anguloMOD < 270.2){
       anguloOK = 269.9     
    } else {
         anguloOK = anguloMOD
    }
    let tang =  Math.tan((anguloOK * Math.PI) / 180)
    
    //Para posible calculos de longitud del radio
    //let x2 = a2b2 /(b2 + (a2*tang*tang))
    //let y2 = b2*( 1-(x2/a2))
    
    let xOK2 = a2b2 /(b2 + (a2*tang*tang))
    let xOK = Math.sqrt(a2b2 /(b2 + (a2*tang*tang)))
    let yOK2= b2*( 1-((xOK*xOK)/a2))

    /*
    if (anguloMOD > 90  && anguloMOD < 180){
        xOK = -1*xOK
    }  else if (anguloMOD >180 && anguloMOD < 270) {
        xOK = -1*xOK
        yOK = -1*yOK
    } else if ( anguloMOD > 270 && anguloMOD < 360){
        yOK = -1*yOK
    } 
        */

    let result =Math.sqrt(xOK2 + yOK2)
    return result
}
function colocaExtremo(angulo, ejemayor,  totalEjeMenor){
    let coordenadas = radElipse(angulo, ejemayor, totalEjeMenor, 300, 300)
    let radVector = document.getElementById("radioVector")
    radVector.setAttribute("x2", coordenadas[0] )
    radVector.setAttribute("y2", coordenadas[1] )
}

function gestionaBase( anguloX){
    let anguloXOK = anguloX%360
    radianes = anguloXOK * Math.PI / 180
    let base = document.getElementById("baseCirculo")
    base.setAttribute("ry", 200* Math.sin(radianes))
}

function gestionaCupula( anguloX){
    let anguloXOK = anguloX%360
    radianes = anguloXOK * Math.PI / 180
    let cupula = document.getElementById("miEclipse")
    let alturaCupula = alturaRadiElipse(anguloXOK, 200, 360) + ""

    cupula.setAttribute("ry", alturaCupula)
}

function manageEccentricitySlider(){
    let relSliderElipse = document.getElementById("relSlider")
    let cajaRelElipse = document.getElementById("relElipse")
    let value1 = relSliderElipse.value
    cajaRelElipse.value= value1   
    let value2 = relSliderElipse.value
    cajaRelElipse.value= value2
    cambiaRatioElipse(value2)
    
}

window.onload = function() {
    //Gestion de Rotación
    let cajaRotX = document.getElementById("rotBoxX")
    let sliderRotX= document.getElementById("rotSliderX") 
    cajaRotX.value ="0"   
    /*
    cajaRotX.addEventListener('input', function () { 
        sliderRotX.value = cajaRotX.value
        console.log(">>> ")
        gestionaBase( sliderRotX.value)
    }, false);
    */

    sliderRotX.addEventListener('input', function () {
      cajaRotX.value = sliderRotX.value
      gestionaBase( cajaRotX.value)
      gestionaCupula(cajaRotX.value - 90)
    }, false);

    /*
    sliderRotX.addEventListener('input', function () {
        console.log(">>>> sliderRotX.value: " + sliderRotX.value)
        cajaRotX.value = sliderRotX.value
    }, false);
    */   

    // Gestion de Excentricidad
    let relSliderElipse = document.getElementById("relSlider")
    let cajaRelElipse = document.getElementById("relElipse")
    let value = relSliderElipse.value
    cajaRelElipse.value= value   

    
    relSliderElipse.addEventListener('input', function () {
        let value = relSliderElipse.value
        cajaRelElipse.value= value
        cambiaRatioElipse(value)
    }, false);

    cajaRelElipse.addEventListener('input', function () {       
        let value = cajaRelElipse.value
        relSliderElipse.value =  cajaRelElipse.value
        cambiaRatioElipse(value)
    }, false);

    // Gestion de ÁNGULO r
    let sliderAnguloR = document.getElementById("anguloSlider")
    let cajaAnguloR = document.getElementById("angulo")
    let valueAnguloR = sliderAnguloR.value
    valueAnguloR.value= valueAnguloR

    sliderAnguloR.addEventListener('input', function () {
        let value2 = sliderAnguloR.value
        cajaAnguloR.value= value2
        colocaExtremo(value2, 200,  totalEjeMenor)
    }, false);

    cajaAnguloR.addEventListener('input', function () {       
        let value3 = cajaAnguloR.value
        sliderAnguloR.value =  value3
        //cambiaRatioElipse(value)
    }, false);



}



