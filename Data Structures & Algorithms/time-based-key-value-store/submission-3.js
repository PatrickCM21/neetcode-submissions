class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        let store = this.keyStore.has(key) ? [...this.keyStore.get(key), [timestamp, value]] : [[timestamp, value]]
        this.keyStore.set(key, store)
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return ''

        let arr = this.keyStore.get(key)

        let low = 0, high = arr.length - 1;
        let mid;
        let bestOption = -1;
        //console.log(timestamp)
        //console.log(arr)
        while (low <= high) {
            mid = Math.floor((high - low) / 2) + low
            //console.log('considering', mid)
            //console.log('which is',arr[mid])
            let currTime = arr[mid][0]
            //console.log(currTime, timestamp)
            if (currTime === timestamp) return arr[mid][1]

            if (currTime > timestamp) {
                high = mid - 1
            } else {
                //console.log('settign best option to', low)
                bestOption = mid;
                low = mid + 1
            }
        }
        return bestOption !== -1 ? arr[bestOption][1] : ''
    }
}
