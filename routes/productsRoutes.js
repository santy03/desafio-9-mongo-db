const express = require("express")
const router = express.Router();
let id = 3;
let listaProductos = [
	{id:1, title: "PlayStation 3", price: 60000, img:"https://http2.mlstatic.com/D_NQ_NP_930365-MLA32732578056_112019-O.webp"},
	{id:2, title: "PlayStation 4", price: 120000, img:"https://http2.mlstatic.com/D_NQ_NP_690761-MLA49613056842_042022-O.webp"},
	{id:3, title: "PlayStation 5", price: 250000, img:"https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp"}
]

router.get("/mostrarProductos", (req, res)=>{
	res.render("productos", {productos:listaProductos})
})
router.get("/agregarProducto", (req, res)=>{
	res.render("agregarProducto")
})
//ruta parametrizada
router.get("/detalle/:id", (req, res)=>{
	 let id = req.params.id;
	 let miProducto = listaProductos.filter(p=>p.id == id);
	 if(miProducto.length ==0){
        return res.send(`No existe el producto`)
    }
	 res.send(miProducto)
})
router.post("/", (req, res)=>{
	let datos = req.body;
	datos.id= id++;
	listaProductos=[...listaProductos, datos]
	//almacenar los datos
	res.redirect("/productos/agregarProducto");	
})
module.exports = router;