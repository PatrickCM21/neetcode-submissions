/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0
        let maxRooms = 1;
        let stack = []

        intervals.sort((a, b) => a.start - b.start)
        stack.push(intervals[0])
        let index = 1;

        while (stack.length && index !== intervals.length) {
            let newInterval = intervals[index];
            let replaced = false;
            //console.log(stack)
            //console.log(newInterval)
            for (let i = 0; i < stack.length; i++) {
                if (stack[i].end <= newInterval.start) {
                    //console.log(newInterval, "can replace", stack[i])
                    stack.splice(i, 1, newInterval)
                    i = stack.length;
                    replaced = true;
                }
            }
            if (!replaced) stack.push(newInterval)
            maxRooms = Math.max(maxRooms, stack.length)
            index++;
        }
        return maxRooms;
    }
}
