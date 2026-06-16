class WordDictionary {
    constructor() {
        // structure is a object with a reference to the next object
        // as well as a signifier that a word exists there
        this.head = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let currIndex = 0;
        let trie = this.head;
        while (currIndex < word.length) {
            let letter = word[currIndex]
            if (trie[letter]) {
                trie = trie[letter].map
            } else {
                let next = {}
                trie[letter] = {map: next}

                trie = next
            }
            currIndex++;
        }
        trie.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        return this.recursiveSearch(this.head, word)
    }

    recursiveSearch(trie, remainingWord) {
        if (remainingWord.length === 0) {
            return trie?.word || false
        }

        if (remainingWord[0] === '.') {
            for (let letter in trie) {
                let obj = trie[letter]
                if (this.recursiveSearch(obj.map, remainingWord.slice(1))) return true;
            }
            return false;
        }

        if (trie[remainingWord[0]]) {

            let obj = trie[remainingWord[0]]

            if (this.recursiveSearch(obj.map, remainingWord.slice(1))) return true;
        }
        return false;
    }
}
