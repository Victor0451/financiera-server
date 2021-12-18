const express = require("express");
const router = express.Router();
const creditos = require('../../models/sistema/creditos')
const planCuotas = require('../../models/sistema/plan_cuotas')
const empleados = require('../../models/sistema/empleados')


router.get("/listadocreditos", (req, res) => {
    creditos
        .findAll()
        .then((listado) => res.json(listado))
        .catch((err) => res.json(err));
});

router.get("/listadoplancuotas", (req, res) => {
    planCuotas
        .findAll()
        .then((listado) => res.json(listado))
        .catch((err) => res.json(err));
});

router.get("/listadoempleados", (req, res) => {
    empleados
        .findAll()
        .then((listado) => res.json(listado))
        .catch((err) => res.json(err));
});



module.exports = router;
