class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b)

        let res = []

        let removeFrom = candidates.findIndex(el => el > target)
        //console.log(removeFrom)
        if (removeFrom !== -1) {
            candidates = candidates.slice(0, removeFrom)
        }
        //console.log(candidates)

        let helper = (total, arr, index) => {
            if (total === target) {
                res.push([...arr])
                return;
            }
            if (index >= candidates.length) return;

            for (let i = index; i < candidates.length; i++) {
                if (i > index && candidates[i] === candidates[i - 1]) continue;

                if (total + candidates[i] > target) {
                    break;
                }

                arr.push(candidates[i])
                helper(total + candidates[i], arr, i + 1)
                arr.pop()
            }

        }
        helper(0, [], 0)
        return res
    }
}
