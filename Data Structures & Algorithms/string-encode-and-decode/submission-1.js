class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {

        let strLens = []
        strLens.unshift(strs.length)
        for (let str of strs) {
            strLens.push(str.length)
        }
        let encoded = strLens.toString().concat(',').concat(strs.join(''))
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strLens = []
        //console.log(str)
        let arr = str.split('')
        let strCount = parseInt(arr.splice(0, arr.findIndex(el => el === ',')).join(''))
        //console.log(strCount)
        arr.splice(0, 1)
        for (let i = 0; i < strCount; i++) {
            let len = parseInt(arr.splice(0, arr.findIndex(el => el === ',')).join(''))
            arr.splice(0, 1)
            strLens.push(len)
        }

        let strs = []
        for (let i = 0; i < strCount; i++) {
            let decodedStr = arr.splice(0, strLens[i])
            strs.push(decodedStr.join(''))
        }
        return strs
    }
}
