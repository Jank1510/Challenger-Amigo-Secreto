var listadedatos = []//liosta donde se almacenaran los nombres de los amigos

function agregarAmigo() {
    var nuevoAmigo = document.getElementById("amigo")//nombre de una nueva persona
    var listaDeAmigos = document.getElementById("listaAmigos")//lista de los amigos
    var listarAmigonuevo = document.createElement("li")//elementos dentros de la lista
    var listaAmigoSeleccionado = document.getElementById("resultado")//lista de el amigo ganador

    listaAmigoSeleccionado.replaceChildren()

    listadedatos.push(nuevoAmigo.value)//añadimos los amigos nuevos ingresados a la lista

    listarAmigonuevo.textContent = nuevoAmigo.value//agregamos un nuevo amigo a la lista
    listaDeAmigos.appendChild(listarAmigonuevo)//luego lo listamos


    if (nuevoAmigo.value.trim() === '') {//validamos los datos de entrada
        nuevoAmigo.value = ''//limpiamos el cuadro de texto cuando agregemos un nuevo nombre
        alert("Por favor ingrese un nombre valido")
    } else {
        nuevoAmigo.value = ''//limpiamos el cuadro de texto cuando agregemos un nuevo nombre

    }
}

function sortearAmigo() {
    var indiceAleatorioDeLaLista = Math.floor(Math.random() * listadedatos.length)//generamos un indice aleatorio
    var listaAmigoSeleccionado = document.getElementById("resultado")//lista de el amigo ganador
    var listaDeAmigos = document.getElementById("listaAmigos")//lista de los amigos que vamos a borrar
    var amigoSeleccionado = document.createElement("li")


    amigoSeleccionado.textContent = "El amigo secreto seleccionado es: "+listadedatos[indiceAleatorioDeLaLista]//agregamos el amigo seleccioanado en la lista por el indice 
    listaAmigoSeleccionado.appendChild(amigoSeleccionado)//luego lo listamos
    listaDeAmigos.replaceChildren()//borramos los amigos para limpiar el campo

}