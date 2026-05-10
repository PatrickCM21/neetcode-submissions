class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        if (s.length === 1) return 1;

        let left = 0, right = 1;
        let longest = 0;
        let charCount = new Array(26).fill(0)
        let offset = 'A'.charCodeAt(0)
        charCount[s.charCodeAt(left) - offset]++
        while (right < s.length) {
            let newChar = s.charCodeAt(right) - offset
            charCount[newChar]++;
            let largest = Math.max(...charCount)
            let currSize = right - left + 1;
            let replacements = currSize - largest
            // console.log("---------")
            // console.log("Size:", currSize)
            // console.log("largest char:", largest)
            // console.log("replacements:", replacements)
            // console.log(s.slice(left, right + 1))
            // console.log(charCount)

            if (replacements <= k) {
                console.log("Valid yes")
                longest = Math.max(longest, currSize)
                right++
            } else {
                console.log("Invalid no")
                let oldChar = s.charCodeAt(left) - offset
                charCount[oldChar]--;
                charCount[newChar]--;

                left++;
            }
        }
        return longest;
    }
}
