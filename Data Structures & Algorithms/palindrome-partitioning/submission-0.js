class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = []

        let helper = (currStr, substrList, index) => {
            if (index >= s.length) {
                if (currStr) return
                //console.log('next split is', substrList)
                res.push([...substrList])
                return
            }
            // option 1 is increase substr
            currStr += s[index]
            helper(currStr, substrList, index + 1)

            // option 2 is partition and move on
            substrList.push(currStr)
            helper('', substrList, index + 1)
            substrList.pop()
        }

        let palindromeChecker = (el) => {
            return el !== el.split('').reverse().join('')
        }
        helper('', [], 0)
        //console.log(res)
        return res.filter((el) => {
            if (el.find(substr => palindromeChecker(substr))) return false;
            return true
        })
    }
}
