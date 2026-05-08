class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0, p2 = 1;

        while (true) {
            let addition = numbers[p1] + numbers[p2];
            if (addition === target) return [p1 + 1, p2 + 1]
            if (addition < target) {
                p2++
            } else {
                p1++
                p2 = p1 + 1;
            }
        }
    }
}
