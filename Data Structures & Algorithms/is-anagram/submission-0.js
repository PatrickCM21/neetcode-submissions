class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let chars = new Array(26).fill(0)

        let offset = 'a'.charCodeAt(0)

        for (let i = 0; i < s.length; i++) {
            chars[s.charCodeAt(i) - offset]++
        }
        for (let i = 0; i < t.length; i++) {
            let letter = t.charCodeAt(i) - offset
            //console.log(letter)
            //console.log(chars[letter])
            if (chars[letter] === 0) return false;
            chars[letter]--;
        }
        return true
    }
}
