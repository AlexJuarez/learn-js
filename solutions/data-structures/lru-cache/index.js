class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    link(o) {
        if (o != null) {
            this.next = o;
            o.prev = this;
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    print() {
        let curr = this.head;
        let items = [];
        while(curr != null) {
            items.push(curr.val);
            curr = curr.next;
        }
        return items.join(' ')
    }

    enqueue(val) {
        const node = new Node(val);
        node.link(this.head);

        if (this.head == null) {
            this.tail = node;
        }

        this.head = node;
        this.size++;
        return node;
    }

    dequeue() {
        const node = this.tail;


        if (node != null) {
            this.tail = node.prev;
            this.tail.next = null;
        }

        this.size--;
        return node;
    }

    remove(node) {
        this.size--;

        const { next, prev } = node;
        if (next != null) {
            next.prev = prev;
        }

        if (prev != null) {
            prev.next = next;
        }

        if (this.head === node) {
            this.head = next;
        }

        if (this.tail === node) {
            this.tail = prev;
        }
    }
}

class LRUCache {
    constructor(max) {
        this.list = new LinkedList();
        this.max = max;
        this.cache = {};
    }

    getNode(key) {
        const { node } = this.cache[key];
        this.list.remove(node);
        this.cache[key].node = this.list.enqueue(key);

        return this.cache[key].node;
    }

    get(key) {
        if (this.cache[key] == null) {
            return -1;
        }

        this.getNode(key);

        return this.cache[key].value;
    }

    put(key, value) {
        if (this.cache[key] != null) {
            this.getNode(key);
            this.cache[key].value = value;
            return;
        }

        const node = this.list.enqueue(key);
        this.cache[key] = { node, value };

        if (this.list.size > this.max) {
            const n = this.list.dequeue();
            delete this.cache[n.val];
        }
    }
}class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    link(o) {
        if (o != null) {
            this.next = o;
            o.prev = this;
        }
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    print() {
        let curr = this.head;
        let items = [];
        while(curr != null) {
            items.push(curr.val);
            curr = curr.next;
        }
        return items.join(' ')
    }

    enqueue(val) {
        const node = new Node(val);
        node.link(this.head);

        if (this.head == null) {
            this.tail = node;
        }

        this.head = node;
        this.size++;
        return node;
    }

    dequeue() {
        const node = this.tail;


        if (node != null) {
            this.tail = node.prev;
            this.tail.next = null;
        }

        this.size--;
        return node;
    }

    remove(node) {
        this.size--;

        const { next, prev } = node;
        if (next != null) {
            next.prev = prev;
        }

        if (prev != null) {
            prev.next = next;
        }

        if (this.head === node) {
            this.head = next;
        }

        if (this.tail === node) {
            this.tail = prev;
        }
    }
}

class LRUCache {
    constructor(max) {
        this.list = new LinkedList();
        this.max = max;
        this.cache = {};
    }

    getNode(key) {
        const { node } = this.cache[key];
        this.list.remove(node);
        this.cache[key].node = this.list.enqueue(key);

        return this.cache[key].node;
    }

    get(key) {
        if (this.cache[key] == null) {
            return -1;
        }

        this.getNode(key);

        return this.cache[key].value;
    }

    put(key, value) {
        if (this.cache[key] != null) {
            this.getNode(key);
            this.cache[key].value = value;
            return;
        }

        const node = this.list.enqueue(key);
        this.cache[key] = { node, value };

        if (this.list.size > this.max) {
            const n = this.list.dequeue();
            delete this.cache[n.val];
        }
    }
}