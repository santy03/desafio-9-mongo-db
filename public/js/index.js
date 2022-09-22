//logica lado del cliente
/*
const socket = io()
socket.on("mensajes", (data)=>{
	console.log(data);
	document.getElementById("msj").innerHTML=data
});
socket.on("respuestaServer", (data)=>{
	alert(data.msj)
	document.getElementById("btn").addEventListener("click", ()=>{
		let msj = document.getElementById("mensajes").value;
		socket.emit("respuesta", msj)
})
})
socket.on("notificacion", (data)=>{
    data.map(m=>document.getElementById("msj").innerHTML+=`<p>${m}</p>`)
})

*/