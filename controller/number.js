const { result } = require('../models')

class NumberController{
    static insertOdd(req, res) {
        console.log('get here');
    }
    static function(req, res) {
        const { spawn } = require('child_process')
        const script = spawn('script', ['./generate.py'])
        script.stdout.on('data', function (data) {
            console.log(data.toString());
            res.write(data)
            res.end('end')
            })
    }
}

module.exports = { NumberController }