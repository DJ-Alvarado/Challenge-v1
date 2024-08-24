

function btnEncriptar()
{
    let textArea = document.querySelector(".text-area");
    let mensaje = document.querySelector(".mensaje");
    
    let textoEncriptado =  encriptar(textArea.Value);
    mensaje.Value = textoEncriptado;
    textArea.Value = "";
    mensaje.style.backgrounImage = "none";

}


function encriptar(stringEncriptado)
{
let matrizCodigo = [["e","enter"],["i", "imes"],["a","ai"],["o","ober"],["u","ufat"]];
//console.table(matrizCodigo);

stringEncriptado  = stringEncriptado.toLowerCase();

for (let i = 0; i < matrizCodigo.length;i++)
{
    if(stringEncriptado.includes(matrizCodigo[i][0]))
        {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
}

return stringEncriptado;
}

/*
function btnEncriptar()
{
    let texto1 = document.querySelector(".text-area");

    let textoTransferido = texto1.Value;

    let texto2 = document.querySelector(".mensaje");

    texto2.Value = textoTransferido;

}
    */