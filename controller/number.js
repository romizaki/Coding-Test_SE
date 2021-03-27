const { result } = require('../models')
const { spawn } = require("child_process");
const getOdd = require('../helper/oddNumber')

class NumberController{
    static async insertOdd(req, res) {
        try {
            let data = await getOdd()
            let temp = await result.bulkCreate(data)
            res.status(201).json({ message: 'Create data succes' })
        } catch (error) {
            res.staus(400).json({ message: 'Internal server error' })
        }
    }
}

module.exports = { NumberController }