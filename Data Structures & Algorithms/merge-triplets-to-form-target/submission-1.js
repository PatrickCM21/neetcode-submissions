class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {

        let filtered = triplets.filter((curr) => {
            if (curr[0] === target[0] ||
                curr[1] === target[1] ||
                curr[2] === target[2]) return true
        })

        let helper = (curr, index) => {
            if (curr[0] === target[0] &&
                curr[1] === target[1] &&
                curr[2] === target[2]) return true
            if (index === triplets.length) return false;

            let potential = triplets[index];
            if (potential[0] <= target[0] &&
                potential[1] <= target[1] &&
                potential[2] <= target[2]) {
                let newTriplet = [Math.max(potential[0], curr[0]),
                Math.max(potential[1], curr[1]),
                Math.max(potential[2], curr[2])]
                if (helper(newTriplet, index + 1)) return true
            }
            if (helper(curr, index + 1)) return true
            return false;
        }

        for (let i = 0; i < filtered.length; i++) {
            if (helper(filtered[i], i + 1)) return true;
        }
        return false
    }
}
