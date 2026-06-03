class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let end = true;
        for (let i = 0; i < intervals.length; i++) {
            if (intervals[i][0] >= newInterval[0]) {
                intervals.splice(i, 0, newInterval)
                end = false;
                break;
            }    
        }
        if (end) intervals.push(newInterval)
        //console.log(intervals)
        // if curr end is greater than next start
        for (let i = 0; i < intervals.length - 1; i++) {
            if (intervals[i][1] >= intervals[i + 1][0]) {
                intervals.splice(i, 2, [Math.min(intervals[i + 1][0], intervals[i][0]), Math.max(intervals[i + 1][1], intervals[i][1])])
                i--;

            }
        }
        return intervals
    }
}
