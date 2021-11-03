//const { builtinModules } = require("module");
let expensiveHouses = require('./db.json')
let houseId = 4;

module.exports = {
    
    getAllHouses:  (req, res) =>{
    res.status(200).send(expensiveHouses); 
    createHouse: (req, res) => {
        let { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address, 
            price,
            imageURL
        }
    
        expensiveHouses.push(newHouse)
        res.status(200).send(expensiveHouses)
        globalId++
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index =expensiveHouses.findIndex(elem => +elem.id === +id)

        if (expensiveHouses[index].price <= 10000 && type === 'minus') {
            expensiveHouses[index].price = 0
            res.status(200).send(expensiveHouses)
        } else if (type === 'plus') {
            expensiveHouses[index].price += 10000
            res.status(200).send(expensiveHouses)
        } else if (type === 'minus') {
            expensiveHouses[index].price -= 10000
            res.status(200).send(expensiveHouses)
        } else {
            res.sendStatus(400)
        }
    }
}
}

