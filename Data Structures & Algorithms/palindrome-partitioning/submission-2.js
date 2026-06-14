class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = []

        let helper = (currStr, substrList, index) => {
            let palindromeChecker = (el) => {
                let left = 0, right = el.length - 1;
                while (left < right) {
                    if (el[left] !== el[right]) return false;
                    left++, right--;
                }
                return true;
            }
            if (index >= s.length) {
                if (currStr) return
                //console.log('next split is', substrList)
                if (substrList.find(substr => !palindromeChecker(substr))) return
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

       
        helper('', [], 0)
        //console.log(res)
        return res
    }
}
