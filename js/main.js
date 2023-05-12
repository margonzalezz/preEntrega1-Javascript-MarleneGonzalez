
const origen = prompt("Ingrese un origen: ");

  while (origen.trim == '' || Number(origen)) {
    origen = prompt("Ingrese un origen");
    alert("ERROR. Por favor, ingrese su lugar de origen nuevamente.");
  }

const destino1 = "New york, Estados Unidos";
const destino2 = "Roma, Italia";
const destino3 = "Ibiza, España";
const destino4 = "Paris, Francia";
const destino5 = "Mykonos, Grecia";
const destino6 = "Bariloche, Argentina";
const destino7 = "Cataratas de Iguazú, Argentina"; 

let nrosDestinos = "A continuación, escriba el número que corresponda a su destino deseado" + 
"\n" + "1. " + destino1 + 
"\n" + "2. " + destino2 + 
"\n" + "3. " + destino3 +
"\n" + "4. " + destino4 + 
"\n" + "5. " + destino5 + 
"\n" + "6. " + destino6 + 
"\n" + "7. " + destino7;
alert(nrosDestinos)

  function mostrarDestino (checkDestino) {
    switch (parseInt(checkDestino)) {
        case 1:
          alert("Usted quiere viajar a New York, Estados Unidos")
        break;
    
        case 2:
          alert("Usted quiere viajar a Roma, Italia")
        break;
    
        case 3:
          alert("Usted quiere viajar a Ibiza, España")
        break;
    
        case 4:
          alert("Usted quiere viajar a Paris, Francia")
        break;
    
        case 5:
          alert("Usted quiere viajar a Mykonos, Grecia")
        break;
    
        case 6:
          alert("Usted quiere viajar a Barloche, Argentina")
        break;
    
        case 7:
          alert("Usted quiere viajar a Cataratas de Iguazú, Argentina")
        break;
    
      default:
        alert("Por favor, intente nuevamente")
        break;
    }
  }

const checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");

  while (checkDestino === '' || isNaN(Number(checkDestino)) || Number(checkDestino) < 1 || Number(checkDestino) > 7) {
    checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");
    alert("Ingrese su destino nuevamente :) ")
  }

function verificarDestino() {
  const checkDestino = prompt("Ingrese un número del 1 al 7 que corresponda a su destino: ");

      if (checkDestino) {
          if (checkDestino) {
            mostrarDestino (checkDestino)
          }
      } else {
        alert("Ingrese su destino nuevamente :) ")
        }
  }
verificarDestino ();

// BOLETOS DE IDA - VUELTA - IDA/VUELTA
const ida = prompt("¿Desea sacar boletos sólo de ida? Escriba SI, si así lo desea: ");
    if(isNaN(ida)) {
        alert("Datos incorrectos. Por favor, vuelva a ingresar los datos.")
    }

  if (ida.toUpperCase() == "SI") {
      let fechaPartida = prompt("Ingrese la fecha de partida:");
      if (fechaPartida != Number) {
        alert("Ingrese una fecha válida")
      }
    let revisionIda = "Lugar de origen: " + origen + "\n" + "Destino: " +  destino + "\n" + "Fecha de partida: " + fechaPartida;
    alert(revisionIda)
    alert("A continuación mostraremos las mejores opciones para que disfrutes tu vuelo :)")

  } else if ( ida.toUpperCase() != "SI") {
    let vuelta = prompt("¿Desea sacar boletos sólo de regreso? Escriba SI, si así lo desea: ");
    alert(vuelta);
     alert("Por favor elija la fecha de regreso");
     let fechaV = prompt("Ingrese una fecha de regreso: ");
     let revisionVuelta = "Lugar de origen: " + origen + "\n" + "Destino: " +  destino + "\n" + "Fecha de regreso: " + fechaV;
     alert(revisionVuelta)
     alert("A continuación mostraremos las mejores opciones para que disfrutes tu vuelo :)")

  } else {
    let iyv = confirm("¿Deseas consultar vuelos de ida y vuelta?");
    alert(iyv);
    let fechaI = prompt("Ingrese una fecha de ida: ");
    let fechaV = prompt("Ingrese una fecha de regreso: ");
    let revisionIyV = "Lugar de origen: " + origen + "\n" + "Destino: " +  destino + "\n" + "Fecha de partida: " + fechaI + "\n" + "Fecha de regreso: " + fechaV;
    alert(revisionIyV);
  }

