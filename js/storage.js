
function ObtenerlistaUsuarios()
{
 var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
    if(listaUsuarios==null)
    {
        listaUsuarios = ['juan','juan123456'],
                        ['pepe','pepe123456'],
                        ['pedro','pepe123456']
    }
}
 
function validar(pnom,Pcontra){

    var listaUsuarios=ObtenerlistaUsuarios();
    var bAcceso =false;
    for (var i = 0; i < 4; i++) {
        if (pnom == listaUsuarios[i][1] && Pcontra == listaUsuarios[i][2]) 
        {
            bAcceso = true;
            
        }
    }
 return bAcceso;
}




