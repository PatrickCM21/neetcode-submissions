class PrefixTree {
    // node
    // {map: {}, items: []}

    constructor() {
        this.tree = {map: {}, items: []}
    }

    

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let currBranch = this.tree
        for (let letter of word) {
            if (!currBranch.map[letter]) {
                currBranch.map[letter] = {map: {}, items: []}
            }
            currBranch = currBranch.map[letter]

        }
        currBranch.items.push(word)
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let currBranch = this.tree
        for (let letter of word) {
            if (!currBranch.map[letter]) {
                return false
            } else {
                currBranch = currBranch.map[letter]
            }
        }
        if (currBranch.items.find(el => el === word)) return true;
        return false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let currBranch = this.tree
        for (let letter of prefix) {
            if (!currBranch.map[letter]) {
                return false
            } else {
                currBranch = currBranch.map[letter]
            }
        }
        return true;
    }
}
