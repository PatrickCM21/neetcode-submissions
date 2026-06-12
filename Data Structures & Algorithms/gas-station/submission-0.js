class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let len = gas.length;

        for (let i = 0; i < len; i++) {
            let gasCount = 0
            //console.log('checking index', i, 'starting gas', gas[i])
            for (let j = i; j < len + i; j++) {
                let ind = j % len;
                gasCount += gas[ind]
                gasCount -= cost[ind]
                //console.log('gas Count is', gasCount)
                if (gasCount < 0) break;
                if ((ind + 1) % len === i) return i
            }
        }
        return -1;
    }
}
