class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();

        // Create dummy boundaries to eliminate null pointer checks
        this.head = { key: 0, val: 0, prev: null, next: null };
        this.tail = { key: 0, val: 0, prev: null, next: null };
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // Helper: Remove a node from its current position in the list
    _remove(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    // Helper: Insert a node right before the dummy tail (Most Recently Used)
    _insertAtTail(node) {
        let prevEnd = this.tail.prev;
        
        prevEnd.next = node;
        node.prev = prevEnd;
        node.next = this.tail;
        this.tail.prev = node;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) return -1;

        let node = this.map.get(key);
        // Move to tail since it was just accessed
        this._remove(node);
        this._insertAtTail(node);

        return node.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // If key exists, delete the old node from the list before updating
        if (this.map.has(key)) {
            this._remove(this.map.get(key));
        }

        // Create/Update node
        let node = { key, val: value, prev: null, next: null };
        this.map.set(key, node);
        this._insertAtTail(node);

        // If capacity exceeded, evict the Least Recently Used (right after dummy head)
        if (this.map.size > this.capacity) {
            let lruNode = this.head.next;
            this._remove(lruNode);
            this.map.delete(lruNode.key);
        }
    }
}