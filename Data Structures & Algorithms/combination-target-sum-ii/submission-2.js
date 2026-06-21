class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b)

        let res = new Map()

        let removeFrom = candidates.findIndex(el => el > target)
        //console.log(removeFrom)
        if (removeFrom !== -1) {
            candidates = candidates.slice(0, removeFrom)
        }
        console.log(candidates)

        let helper = (total, arr, index) => {
            //console.log('index', index, candidates.length)
            //console.log('array is', arr)
            if (total === target) {
                let key = arr.toString()
                if (res.has(key)) return true;
                res.set(key,  [...arr])
                return true;
            } else if (total > target) {
                return true;
            } else if (index >= candidates.length) return true;

            

            // include num
            arr.push(candidates[index])
            helper(total + candidates[index], arr, index + 1)

            arr.pop()

            while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
                index++;
            }

            // skip num
            helper(total, arr, index + 1)

        }
        helper(0, [], 0)
        return [...res.values()]
    }
}