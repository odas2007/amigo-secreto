
const nombres=[];

function agregarAmigo()
{
    const input = document.getElementById("amigo");
    const nombre=input.value.trim();
    if(nombre!==""){
        nombres.push(nombre);
        elementoHTML=document.getElementById('listaAmigos').value;
        document.getElementById('resultado').innerHTML=nombres;
        input.value="";
        input.focus();
        console.log(nombres);
        
    }
    else{
        
        alert("Ingresa un nombre");
    }
    
    return;
}

function sortearAmigo(){
    numeroSorteado=Math.floor(Math.random()*nombres.length-1+1);
    alert(`El amigo secreto es: ${nombres[numeroSorteado]}`);
    nombres.length=0;
    elementoHTML=document.getElementById('listaAmigos').value;
    document.getElementById('resultado').innerHTML="";

        
  }
 
        
 
   
