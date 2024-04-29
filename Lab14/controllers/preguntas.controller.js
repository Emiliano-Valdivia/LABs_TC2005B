const model = require("../models/preguntas.models.js")

module.exports.ventajas = async(req,res) =>{
    res.render("preguntas/ventajas");
}

module.exports.desventajas = async(req,res) =>{
    res.render("preguntas/desventajas");
}