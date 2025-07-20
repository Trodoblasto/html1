var svg = document.getElementById("malaquitaSVG")
var svgNS =  "http://www.w3.org/2000/svg";
var miElipse = document.getElementById("miEclipse");
var totalEjeMenor = 200;

// ------ Rotacion------------------------
var rotX = 0
var rotY = 0
var rotZ = 0
var rotXCos= 1
var rotYCos = 1
var rotZCos = 1



// ------ Creación de Cabeza ------------------------
var anchuraCara = 20
var alturaCara = 20
var alturaCraneo = 10
var alturaBarbilla = 20
var anchuraCanvas = 800
var alturaCanvas = 800
var inicioCaraH = 300
var curvaturaBarbilla = 0.6
var superCuad = 0.5
var estrech = 1.0

//Funciones de rotacion
function rotacionX(valor) {
    rotX = parseInt(valor)
    rotXCos = Math.cos( rotX * (Math.PI / 180))
}  

function rotacionY(valor) {
    rotY = parseInt(valor)
    rotYCos = Math.cos( rotY * (Math.PI / 180))
}     

function rotacionZ(valor){
    rotY = parseInt(valor)
    rotZCos = Math.cos( rotZ * (Math.PI / 180))
}        

function setAnchuraCara(value){
    anchuraCara = value
}

function  setAlturaCara(value){
    alturaCara = value
}

function  setAlturaCraneo(value){
    alturaCraneo = value
}

function setAlturaBarbilla(value){
    alturaBarbilla = value
}

function setCurvaBarbilla(value){
    curvaturaBarbilla = value*0.1
}

function setSuperCuadratura(value){
    superCuad = value*0.1

}     

function setAnchuraBarbilla(value){
    estrech = value
}



function transformPunto(value){
    return value;
}

function transformPuntoYCir(value){
   return value;
}


//<path d="M 200 200, C 200 120, 400 100, 500 100 C 600 100, 800 120, 800 200  C 800 300, 800, 400, 800 600 C 800 700, 650 900, 500 900"  fill= "none" stroke="red" stroke-width="2" />
function createHead(){

    //-------------------------------------------------------------------------------------------------------
    //-----------------------------------------------------------------------------------------------------
    //------------------------------ DEFINICION PUNTOS ORIGINALES------------------------------------------
    let mitadCanvas = anchuraCanvas/2
    let Mh = mitadCanvas - anchuraCara * 10
    let pendienteCara = (anchuraCara*estrech - anchuraCara)/alturaCara

    //--------------- puntoM ------------------------------------------------------------------------------------
    let pMx = Mh 
    let pMy = inicioCaraH -100

    //--------------- puntoTopCr-------------------------------------------------------------------------------------
    let man1XTopCr = ( Mh + (alturaCraneo*7.5*pendienteCara))
    let man1YTopCr = (pMy - alturaCraneo*7.5)
    let man2XTopCr = (anchuraCanvas/2 - anchuraCara*10/2)
    let man2YTopCr = (pMy - alturaCraneo*10)
    let pXTopCr = mitadCanvas 
    let pYTopCr = (pMy - alturaCraneo*10)
    //--------------- puntoCaraA-----------------------------------------------------------------------------------------  
    let man1XCaraA = (anchuraCanvas/2 + anchuraCara*10/2)
    let man1YCaraA = (pMy - alturaCraneo*10)
    let man2XCaraA =  (mitadCanvas + anchuraCara*10)- ((pMy - alturaCraneo*7.5) *pendienteCara)
    let man2YCaraA = (pMy - alturaCraneo*7.5) 
    let pXCaraA = (mitadCanvas + anchuraCara*10)
    let pYCaraA = pMy;  
    //--------------- puntoCaraB-----------------------------------------------------------------------------------------   
    let pXCaraB =(mitadCanvas + anchuraCara*10*estrech)
    let pYCaraB = pMy + alturaCara*10
    //--------------- puntoBarbilla------------------------------------------------------------------------------------------
    let man1XBar = (mitadCanvas + (anchuraCara*10*estrech + ((alturaBarbilla * 10 * curvaturaBarbilla ) * pendienteCara)))
    let man1YBar = (pMy + alturaCara*10 + alturaBarbilla * 10 * curvaturaBarbilla )
    let man2XBar =  (anchuraCanvas/2 + anchuraCara*10*superCuad)
    let man2YBar =  (pMy + alturaCara*10 + alturaBarbilla * 10)
    let pXBar = (anchuraCanvas/2) 
    let pYBar = (pMy + alturaCara*10 + alturaBarbilla * 10) 

    //--------------- puntoCaraC------------------------------------------------------------------------------------------
    let man1XCaraC =  (anchuraCanvas/2 - anchuraCara*10*superCuad ) 
    let man1YCaraC = (pMy + alturaCara*10 + alturaBarbilla * 10)
    let man2XCaraC =  (mitadCanvas - (anchuraCara*10*estrech + ((alturaBarbilla * 10 * curvaturaBarbilla ) * pendienteCara)))
    let man2YCaraC = (pMy + alturaCara*10 + alturaBarbilla * 10 * curvaturaBarbilla )
    let pXCaraC = (mitadCanvas - anchuraCara*10*estrech )
    let pYCaraC = (pMy + alturaCara*10 ) 

    //--------------- puntoCaraD------------------------------------------------------------------------------------------
    let pXCaraD=(mitadCanvas - anchuraCara*10)
    let pYCaraD = pMy
    //--------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------------------------------------------


    
    let pMxTT =  transformPunto(Mh)
    let pMyTT = transformPunto(inicioCaraH -100)
    let puntoM = "M " + pMxTT + " " + pMyTT + ", "

    //--------------- puntoTopCr-------------------------------------------------------------------------------------
    let man1XTopCrTT = transformPunto(man1XTopCr)
    let man1YTopCrTT = transformPuntoYCir(man1YTopCr)
    let man2XTopCrTT = transformPunto(man2XTopCr)
    let man2YTopCrTT = transformPuntoYCir(man2YTopCr)
    let pXTopCrTT = transformPunto(pXTopCr)
    let pYTopCrTT = transformPuntoYCir(pYTopCr)
    let puntoTopCraneo=  "C " + man1XTopCrTT + " " + man1YTopCrTT + ", " + man2XTopCrTT + " " + man2YTopCrTT + ", " + pXTopCrTT + " " + pYTopCrTT + ", "

    //--------------- puntoCaraA----------------------------------------------------------------------------------------


    let man1XCaraATT = transformPunto(man1XCaraA)
    let man1YCaraATT = transformPuntoYCir(man1YCaraA)
    let man2XCaraATT = transformPunto(man2XCaraA)
    let man2YCaraATT = transformPuntoYCir(man2YCaraA)
    let pXCaraATT = transformPunto(pXCaraA)
    let pYCaraATT = transformPuntoYCir(pYCaraA)

    let puntoCaraA =  "C " + man1XCaraATT + " " + man1YCaraATT + ", " + man2XCaraATT  + " " + man2YCaraATT + ", " + pXCaraATT + " " + pYCaraATT
    //--------------- puntoCaraB-----------------------------------------------------------------------------------------   
    let pXCaraBTT = transformPunto(pXCaraB)
    let pYCaraBTT = transformPuntoYCir(pYCaraB)
    let puntoCaraB =  "C " + pXCaraATT + " " + pYCaraATT + ", " + pXCaraBTT + " " + pYCaraBTT + ", " + pXCaraBTT + " " + pYCaraBTT + ", " 

    //--------------- puntoBarbilla------------------------------------------------------------------------------------------
    let man1XBarTT = transformPunto(man1XBar)
    let man1YBarTT = transformPuntoYCir(man1YBar)
    let man2XBarTT = transformPunto(man2XBar)
    let man2YBarTT = transformPuntoYCir(man2YBar)
    let pXBarTT = transformPunto(pXBar)
    let pYBarTT = transformPuntoYCir(pYBar)
    let puntoBarbilla =  "C " + man1XBarTT + " " + man1YBarTT + ", " + man2XBarTT + " " + man2YBarTT + ", " + pXBarTT + " " + pYBarTT + ", "

    //--------------- puntoCaraC------------------------------------------------------------------------------------------
    let man1XCaraCTT =  transformPunto(man1XCaraC)
    let man1YCaraCTT = transformPuntoYCir(man1YCaraC)
    let man2XCaraCTT =  transformPunto(man2XCaraC)
    let man2YCaraCTT = transformPuntoYCir(man2YCaraC)
    let pXCaraCTT = transformPunto(pXCaraC)
    let pYCaraCTT = transformPuntoYCir(pYCaraC)
    let puntoCaraC =  "C " + man1XCaraCTT + " " + man1YCaraCTT + ", " +   + man2XCaraCTT + " " + man2YCaraCTT + ", "
                           + pXCaraCTT + " " + pYCaraCTT + ", "

    //--------------- puntoCaraD------------------------------------------------------------------------------------------
    let pXCaraDTT = transformPunto(pXCaraD)
    let pYCaraDTT = transformPuntoYCir(pYCaraD)
    let puntoCaraD =  "C " +  pXCaraDTT  + " " + pYCaraDTT  + ", " + pXCaraDTT + " " + pYCaraDTT + ", " + pXCaraDTT + " " + pYCaraDTT + "Z" 

    //--------------------------------------------------------------------------------------------------------------------




    let dFINAL = puntoM + puntoTopCraneo + puntoCaraA + puntoCaraB + puntoBarbilla + puntoCaraC + puntoCaraD

    let referencia1 = document.getElementById("referencia1")
    //let referencia2 = document.getElementById("referencia1")
    referencia1.setAttribute("cy", "300")
   
    let pathCabeza =document.getElementById("pathCabeza") 
    pathCabeza.setAttribute("d", dFINAL)
}

//-------------------------------------------

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
     //Rotaciones   <div class = "controlGroupA">
    let rotXText  = document.getElementById("rotXText")
    let rotXSlider  = document.getElementById("rotXSlider")
    rotXText.value ="0" 
    rotXSlider.value = "0" 

    rotXText.addEventListener('input', function () { 
        rotXSlider.value = rotXText.value     
        rotacionX( rotXText.value   )        
    }, false);

    rotXSlider.addEventListener('input', function () { 
        rotXText.value = rotXSlider.value 
        rotacionX( rotXSlider.value )        
    }, false);

    let rotYText  = document.getElementById("rotYText")
    let rotYSlider  = document.getElementById("rotYSlider")
    rotYText.value ="0" 
    rotYSlider.value = "0" 
    rotYText.addEventListener('input', function () { 
        rotYSlider.value = rotYText.value     
        rotacionY(rotYText.value )        
    }, false);

    rotYSlider.addEventListener('input', function () { 
        rotYText.value = rotYSlider.value 
        rotacionX( rotYSlider.value )        
    }, false);


    let rotZText  = document.getElementById("rotZText")
    let rotZSlider  = document.getElementById("rotZSlider")
    rotZText.value ="0" 
    rotZSlider.value = "0" 
    rotZText.addEventListener('input', function () { 
        rotZSlider.value = rotZText.value     
        rotacionY(rotZText.value    )        
    }, false);

    rotZSlider.addEventListener('input', function () { 
        rotZText.value = rotZSlider.value 
        rotacionZ(rotZSlider.value )        
    }, false);

    //Gestion de Anchura
    let anchuraCabTEX = document.getElementById("anchuraCabTEX")
    let anchuraCabSlider= document.getElementById("anchuraCabSlider")
    anchuraCabTEX.value ="20" 
    anchuraCabSlider.value = "20" 

    rotYText.addEventListener('input', function () { 
        rotYSlider.value = rotYText.value     
        //rotacionY(valorOK)        
    }, false);

    rotXSlider.addEventListener('input', function () { 
        rotYText.value = rotYSlider.value 
        //rotacionX( valorOK)        
    }, false);

    anchuraCabSlider.addEventListener('input', function () {  
        anchuraCabTEX.value = anchuraCabSlider.value
        setAnchuraCara( anchuraCabSlider.value)     
    }, false);

    //Gestion de Altura
    let alturaTEX = document.getElementById("alturaTEX")
    let alturaSlider= document.getElementById("alturaSlider") 
    alturaTEX.value ="20" 
    alturaSlider.value = "20"  
   
    alturaTEX.addEventListener('input', function () { 
        alturaSlider.value = alturaTEX.value
        setAlturaCara(alturaTEX.value)
        
    }, false);

    alturaSlider.addEventListener('input', function () { 
        alturaTEX.value = alturaSlider.value
        setAlturaCara( alturaSlider.value)       
    }, false);

    //Gestion del Craneo
    let craneoTEX = document.getElementById("craneoTEX")
    let craneoSlider= document.getElementById("craneoSlider") 
    craneoTEX.value ="10" 
    craneoSlider.value = "10"  
   
    craneoTEX.addEventListener('input', function () { 
        craneoSlider.value = craneoTEX.value
        setAlturaCraneo(craneoTEX.value)
        
    }, false);

    craneoSlider.addEventListener('input', function () { 
        craneoTEX.value = craneoSlider.value
        setAlturaCraneo(craneoSlider.value)    
    }, false);

    //Gestion de Barbilla
    let barbillaTEX = document.getElementById("barbillaTEX")
    let barbillaSlider= document.getElementById("barbillaSlider") 
    barbillaTEX.value ="20" 
    barbillaSlider.value = "20"  
   
    /*barbillaTEX.addEventListener('input', function () { 
        barbillaSlider.value = barbillaTEX.value
        setAlturaBarbilla(barbillaTEX.value)        
    }, false);*/

    barbillaSlider.addEventListener('input', function () { 
        barbillaTEX.value = barbillaSlider.value 
        setAlturaBarbilla( barbillaSlider.value)  
    }, false);

     // Anchura de Barbilla
    let anchuraBarTEX = document.getElementById("anchuraBarTEX")
    let anchuraBarSlider= document.getElementById("anchuraBarSlider") 
    anchuraBarTEX.value ="1.0" 
    anchuraBarSlider.value = "1.0" 
    
    anchuraBarSlider.addEventListener('input', function () { 
        anchuraBarTEX.value = anchuraBarSlider.value 
        setAnchuraBarbilla( anchuraBarSlider.value )  
    }, false);


    // Curvatura de Barbilla
    let curvaBarTEX = document.getElementById("curvaBarTEX")
    let curvaBarSlider= document.getElementById("curvaBarSlider") 
    curvaBarTEX.value ="3" 
    barbillaSlider.value = "3"  
    
    curvaBarSlider.addEventListener('input', function () { 
        curvaBarTEX.value = curvaBarSlider.value 
        setCurvaBarbilla(  curvaBarSlider.value )  
    }, false);

    //Supercuadratura
    let superCuadraturaTEX = document.getElementById("superCuadraturaTEX")
    let superCuadraturaSlider= document.getElementById("superCuadraturaSlider") 
    superCuadraturaTEX.value ="5" 
    superCuadraturaSlider.value = "5"    
    
    superCuadraturaSlider.addEventListener('input', function () { 
        superCuadraturaTEX.value = superCuadraturaSlider.value 
        setSuperCuadratura(  superCuadraturaSlider.value )  
    }, false);


    //Botón de Creación
    let botonDibujaCabeza = document.getElementById("dibujaCabezaBUTTON")
    botonDibujaCabeza.addEventListener('click', function () { 
        createHead()
    }, false);

}



