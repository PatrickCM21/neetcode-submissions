class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if (arr.length === 0) return 0;
        let longest = 1;
        let comparison = 0 // 0 comparison is < and 1 is >
        let streak = 1;
        
        for (let i = 0; i < arr.length - 1; i++) {
            if (streak < 2) { // if not streaking
                if (arr[i] < arr[i + 1]) {
                    comparison = 0
                } else if (arr[i] > arr[i + 1]) {
                    comparison = 1
                } else continue; // skip equal to
                streak = 2;
                //console.log('starting streak from', arr[i], 'with', comparison)
            } else {
                //console.log('comparing', arr[i], 'with', arr[i + 1])
                if (comparison === 0) {
                    if (arr[i] > arr[i + 1]) {
                        streak++
                        comparison++
                    } else {
                        i--;
                        streak = 0;
                    }
                } else {
                    if (arr[i] < arr[i + 1]) {
                        streak++
                        comparison--;
                    } else {
                        i--;
                        streak = 0
                    }
                }
            }
            longest = Math.max(longest, streak)
        }
        return longest
    }
}
