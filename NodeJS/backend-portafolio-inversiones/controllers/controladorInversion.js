const Inversion= require("../models/Inversion");

module.exports.inversiones_get = (req, res) => {
    Inversion.find()
    .then((rpta)=>{
        console.log(rpta)
        res.send(rpta)
    }).catch((error) => {
        console.log(error)
        res.status(400).json({error});
    });
};

module.exports.inversiones_post = (req, res) => {
    const {coin_name, inversion, coins, date} = req.body;
    const fecha = new Date(Date.UTC(date.year, date.month, date.day));
    Inversion.create({coin_name, inversion, coins, date: fecha})
    .then((rpta) => {
        console.log(rpta);
        res.status(200).json(rpta)
    }).catch((error) => {
        res.status(400).json(rpta);
    })
}

module.exports.inversiones_delete = (req, res) => {
    const { id }= req.params;
    Inversion.deleteOne({_id: id})
    .then((rpta) => {
        console.log(rpta);
        res.status(200).json(rpta);
    }).catch((error) => {
        console.log(error);
        res.status(400).json(rpta);
    })
}

