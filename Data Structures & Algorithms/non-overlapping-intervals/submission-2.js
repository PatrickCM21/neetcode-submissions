class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        let count = 0;

        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] > intervals[i + 1][0]) {
                let remove = intervals[i][1] > intervals[i + 1][1] ? i : i + 1
                intervals.splice(remove, 1)
                i--;
                count++;
            }
        }
        return count
    }
}
