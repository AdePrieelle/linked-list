const Node = (value = null, next = null) => {
  return {
    value,
    next
  };
};

export const LinkedList = () => {
  let linkedList = { head: null };

  const append = (value) => {
    /*
    append a Node(value) at the end of a linked list,
    make head point to the new Node if the linked list is empty
    and return the linked list
    */
    const newNode = Node(value);
    let cur = linkedList.head;

    if (cur === null) {
      linkedList.head = newNode;
    } else {
      while (cur.next !== null) {
        cur = cur.next;
      };
      cur.next = newNode;
    };
    return linkedList;
  };

  const prepend = (value) => {
    /*
    prepend a Node(value) at the beginning of a linked list 
    and return the linked list
    */
    let newNode = Node(value);
    newNode.next = linkedList.head;
    linkedList.head = newNode;
    return linkedList;
  };

  const size = () => {
    /*
    return the size of the linked list
    */
    let cur = linkedList.head;
    let count = 0;
    while (cur) {
      count++;
      cur = cur.next;
    };
    return count;
  };

  const head = () => {
    /*
    return the first Node of the linked list
    */
    return linkedList.head;
  };

  const tail = () => {
    /*
    return the last Node of the linked list
    */
    let cur = linkedList.head;
    if (cur !== null) {
      while(cur.next !== null) {
        cur = cur.next;
      };
    };
    return cur;
  };

  const at = (id) => {
    /*
    return the Node at given index (id) of a linked list 
    or return null if the Node at given index isn't found
    */
    let cur = linkedList.head;
   
    if (cur === null || (!(Number.isInteger(id))) || (id < 0)) {
      return null;
    };

    for (let i = 0; i < id; i++) {
      cur = cur.next;
      /* return null if the linked list already traversed till the end 
         before finding a Node at given id
      */
      if (cur === null) {
        return null;
      };
    };
    return cur;
  };

  const pop = () => {
    /*
    remove the last Node of the linked list
    and return the linked list
    */
    let cur = linkedList.head;

    if (cur === null) {
      return linkedList;
    };
    
    if (cur.next === null) {
      linkedList.head = null;
      return linkedList;
    };

    while (cur.next.next !== null) {
      cur = cur.next;
    };
    cur.next = null;
    return linkedList;
  };

  const contains = (value) => {
    /*
    return true if the value is in the linked list
    return false if the value isn't in the linked list
    */
    let cur = linkedList.head;
    while (cur !== null) {
      if (cur.value === value) {
        return true;
      };
      cur = cur.next;
    };
    return false;
  };

  const find = (value) => {
    /*
    return the first Node where the value equals the Node.value
    return null if there isn't a Node in the linked list with the value
    */
    let cur = linkedList.head;
    while (cur !== null) {
      if (cur.value === value) {
        return cur;
      };
      cur = cur.next;
    };
    return null;
  };

  const toStringLinkedList = () => {
    /*
    return a string from the linked list in the format of:
    head -> ( value0 ) -> .. -> ( valueN ) -> null
    */
    let cur = linkedList.head;
    let linkedListString = "head -> ";
    while (cur !== null) {
      linkedListString = linkedListString.concat(`( ${cur.value} )`, " -> ");
      cur = cur.next;
    };
    linkedListString = linkedListString.concat("null");
    return linkedListString;
  };

  const insertAt = (value, id) => {
    /*
    if the given id is valid, 
    insert a Node(value) at given index (id) in the linked list 
    and return the linked list
    */
    if (id === 0) {
      return prepend(value);
    };

    let prev = at(id - 1);

    if ((id < 0) || (!(Number.isInteger(id))) || (!prev)) {
      return linkedList;
    };

    if (prev && !prev.next) {
      return append(value);
    };

    const newNode = Node(value);
    newNode.next = prev.next;
    prev.next = newNode;

    return linkedList;
  };

  const removeAt = (id) => {
    /*
    if the given id is valid, 
    remove a Node at given index (id) from the linked list
    and return the linked list
    */
    let cur = linkedList.head;

    if ((cur === null) || (!(Number.isInteger(id))) || (id < 0)) {
      return linkedList;
    };

    if (id === 0) {
      linkedList.head = cur.next;
      return linkedList;
    };

    let prev = at(id - 1);
    if (!prev || !prev.next) {
      return linkedList;
    };
    prev.next = prev.next.next;

    return linkedList;
  };

  const getLinkedList = () => {
    /*
    return the linked list
    */
    return linkedList;
  };

  return Object.freeze({
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toStringLinkedList,
    insertAt,
    removeAt,
    getLinkedList
  });
};
