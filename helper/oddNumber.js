module.exports = function getOdd() {
    let data = []
    for (let i = 0; i < 20; i++) {
        if ( i % 2 != 0) {
            data.push({ value: i })
        }
    }
    return data
}