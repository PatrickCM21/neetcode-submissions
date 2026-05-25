class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let stack = []
        for (let i = 0; i < position.length; i++) {
            let timeTaken = (target - position[i]) / speed[i]
            stack.push({pos: position[i], timeTaken: timeTaken})
        }
        stack.sort((a, b) => a.pos - b.pos)
        //console.log(stack)


        let fleetCount = position.length;

        let bottleneck = stack[stack.length - 1].timeTaken 
        for (let i = stack.length - 1; i > 0; i--) {
            if (stack[i - 1].timeTaken <= bottleneck) {
                fleetCount--;
            } else {
                bottleneck = stack[i - 1].timeTaken
            }
        }
        return fleetCount;
    }
}
