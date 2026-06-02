class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        hand.sort((a, b) => a - b)

        if (hand.length % groupSize !== 0) return false
        
        let hands = hand.length / groupSize

        for (let i = 0; i < hands; i++) {
            let curr = hand.shift()
            let index = 0;
            let found = 1;
            let complete = false
            while (!complete) {
                if (found === groupSize) {
                    complete = true;
                } else if (hand[index] <= curr) {
                    index++;
                } else if (hand[index] === curr + 1) {
                    found++
                    curr++
                    hand.splice(index, 1)
                } else {
                    return false
                }
            }
        }
        return true;
    }
}
