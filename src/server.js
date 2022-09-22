//logica lado del servidor

const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const messages = [
	{author:"Santiago", text:"Hola ¿que tal?"},
	{author:"Carlos", text:"Hola Buenas Tardes?"},
	{author:"Fabio", text:"Hola ¿como va"}
]
app.use(express.static("public"))

app.get("/", ()=>{
	res.sendFile("index.html", {root:__dirname})
})

const server = httpServer.listen(3000, ()=>{
	console.log(`El servidor esta escuchando por el puerto 3000`);
})

server.on("error", (err)=>{
	console.log(err);
})

io.on("connection", (socket)=>{
	console.log("Se conecto un cliente");
	//para enviar
	socket.emit("messages", messages)

})