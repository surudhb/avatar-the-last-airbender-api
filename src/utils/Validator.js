

const isAlphabetical = (string) => {
    const regex = new RegExp(/^[A-Za-z]+( [A-Za-z]+)*$/)
    return regex.test(string)
}

const isNumeric = (string) => {
    const regex = new RegExp(/^\d+$/)
    return regex.test(string)
}

module.exports = {
    isAlphabetical,
    isNumeric
}