import { LinkedList } from '../LinkedList';

// Testing the interface of factory function LinkedList

describe("Testing the factory function LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = LinkedList();
  });

  describe("Testing the method types of factory function LinkedList", () => {
    test("The append method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.append).toBe("function");
    });
    
    test("The prepend method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.prepend).toBe("function");
    });
  
    
    test("The size method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.size).toBe("function");
    });
    
    test("The head method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.head).toBe("function");
    });
    
    test("The tail method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.tail).toBe("function");
    });
    
    test("The at method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.at).toBe("function");
    });
    
    test("The pop method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.pop).toBe("function");
    });
    
    test("The contains method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.contains).toBe("function");
    });
    
    test("The find method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.find).toBe("function");
    });
    
    test("The toStringLinkedList method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.toStringLinkedList).toBe("function");
    });
    
    test("The insertAt method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.insertAt).toBe("function");
    });
    
    test("The removeAt method of factory function LinkedList is a function", () => {
      expect(typeof linkedList.removeAt).toBe("function");
    });
  });

  describe("Testing the return type for the methods of factory function LinkedList", () => {
    test("The return type of the append method of factory function LinkedList is an object if the method is called without an argument", () => {
      expect(typeof linkedList.append()).toBe("object");
    });
    
    test("The return type of the append method of factory function LinkedList is an object if the method is called with an argument", () => {
      expect(typeof linkedList.append("value")).toBe("object");
    });
    
    test("The return type of the prepend method of factory function LinkedList is an object if the method is called without an argument", () => {
      expect(typeof linkedList.prepend()).toBe("object");
    });
    
    test("The return type of the prepend method of factory function LinkedList is an object if the method is called with an argument", () => {
      expect(typeof linkedList.prepend("value")).toBe("object");
    });
    
    test("The return type of the size method of factory function LinkedList is a number", () => {
      expect(typeof linkedList.size()).toBe("number");
    });
    
    test("The return type of the head method of factory function LinkedList is an object", () => {
      expect(typeof linkedList.head()).toBe("object");
    });
    
    test("The return type of the tail method of factory function LinkedList is an object", () => {
      expect(typeof linkedList.tail()).toBe("object");
    });
    
    test("The return type of the at method of factory function LinkedList is an object if the method is called without an argument", () => {
      expect(typeof linkedList.at()).toBe("object");
    });
    
    test("The return type of the prepend method of factory function LinkedList is an object if the method is called with an argument", () => {
      expect(typeof linkedList.at(0)).toBe("object");
    });
    
    test("The return type of the pop method of factory function LinkedList is an object", () => {
      expect(typeof linkedList.pop()).toBe("object");
    });
    
    test("The return type of the contains method of factory function LinkedList is a boolean if the method is called without an argument", () => {
      expect(typeof linkedList.contains()).toBe("boolean");
    });
    
    test("The return type of the contains method of factory function LinkedList is a boolean if the method is called with an argument", () => {
      expect(typeof linkedList.contains("value")).toBe("boolean");
    });
    
    test("The return type of the find method of factory function LinkedList is an object if the method is called without an argument", () => {
      expect(typeof linkedList.find()).toBe("object");
    });
    
    test("The return type of the find method of factory function LinkedList is an object if the method is called with an argument", () => {
      expect(typeof linkedList.find("value")).toBe("object");
    });
    
    test("The return type of the toStringLinkedList method of factory function LinkedList is a string", () => {
      expect(typeof linkedList.toStringLinkedList()).toBe("string");
    });
    
    test("The return type of the insertAt method of factory function LinkedList is an object if the method is called without an argument for the value parameter and without an argument for the id parameter", () => {
      expect(typeof linkedList.insertAt()).toBe("object");
    });
    
    test("The return type of the insertAt method of factory function LinkedList is an object if the method is called without an argument for the value parameter and with an argument for the id parameter", () => {
      expect(typeof linkedList.insertAt(undefined, 0)).toBe("object");
    });
    
    test("The return type of the insertAt method of factory function LinkedList is an object if the method is called with an argument for the value parameter and without an argument for the id parameter", () => {
      expect(typeof linkedList.insertAt("value")).toBe("object");
    });
    
    test("The return type of the insertAt method of factory function LinkedList is an object if the method is called with an argument for the value parameter and with an argument for the id parameter", () => {
      expect(typeof linkedList.insertAt("value", 0)).toBe("object");
    });
    
    test("The return type of the removeAt method of factory function LinkedList is an object if the method is called without an argument", () => {
      expect(typeof linkedList.removeAt()).toBe("object");
    });
    
    test("The return type of the removeAt method of factory function LinkedList is an object if the method is called with an argument", () => {
      expect(typeof linkedList.removeAt(0)).toBe("object");
    });
  });

  describe("Testing the return values for the methods of factory function LinkedList", () => {
    test("The append method of factory function LinkedList works correctly if the method is called without an argument and the linked list is empty", () => {
      expect(linkedList.append()).toStrictEqual(
        { head: { value: null, next: null } }
      );
    });

    test("The append method of factory function LinkedList works correctly if the method is called without an argument and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.append()).toStrictEqual(
        { head: { value: "value1", next: { value: null, next: null } } }
      );
    });

    test("The append method of factory function LinkedList works correctly if the method is called without an argument and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.append()).toStrictEqual(
        { head: { value: "value1", next: { value: "value2", next: { value: null, next: null } } } }
      );
    });

    test("The append method of factory function LinkedList works correctly if the method is called with an argument and the linked list is empty", () => {
      expect(linkedList.append("value1")).toStrictEqual(
        { head: { value: "value1", next: null } }
      );
    });
    
    test("The append method of factory function LinkedList works correctly if the method is called with an argument and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.append("value2")).toStrictEqual(
        { head: { value: "value1", next: { value: "value2", next: null } } }
      );
    });

    test("The append method of factory function LinkedList works correctly if the method is called with an argument and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.append("value3")).toStrictEqual(
        { head: { value: "value1", next: { value: "value2", next: { value: "value3", next: null } } } }
      );
    });


    test("The prepend method of factory function LinkedList works correctly if the method is called without an argument and the linked list is empty", () => {
      expect(linkedList.prepend()).toStrictEqual(
        { head: { value: null, next: null } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the method is called without an argument and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.prepend()).toStrictEqual(
        { head: { value: null, next: { value: "value1", next: null } } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the method is called without an argument and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.prepend()).toStrictEqual(
        { head: { value: null, next: { value: "value1", next: { value: "value2", next: null } } } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the method is called with an argument and the linked list is empty", () => {
      expect(linkedList.prepend("value0")).toStrictEqual(
        { head: { value: "value0", next: null } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the method is called with an argument and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.prepend("value0")).toStrictEqual(
        { head: { value: "value0", next: { value: "value1", next: null } } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the method is called with an argument and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.prepend("value0")).toStrictEqual(
        { head: { value: "value0", next: { value: "value1", next: { value: "value2", next: null } } } }
      );
    });

    test("The size method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.size()).toBe(0);
    });

    test("The size method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.size()).toBe(1);
    });

    test("The size method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.size()).toBe(2);
    });

    test("The head method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.head()).toStrictEqual(null);
    });

    test("The head method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.head()).toStrictEqual(
        { value: "value1", next: null }
      );
    });

    test("The head method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.head()).toStrictEqual(
        { value: "value1", next: { value: "value2", next: null } }
      );
    });

    test("The tail method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.tail()).toStrictEqual(null);
    });

    test("The tail method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.tail()).toStrictEqual(
        { value: "value1", next: null }
      );
    });

    test("The tail method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.tail()).toStrictEqual(
        { value: "value2", next: null }
      );
    });

    test("The at method of factory function LinkedList works correctly if the method is called without an argument and the linked list is empty", () => {
      expect(linkedList.at()).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called without an argument and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at()).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called without an argument and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at()).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument smaller than 0 and the linked list is empty", () => {
      expect(linkedList.at(-1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument smaller than 0 and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at(-1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument smaller than 0 and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(-1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument bigger than the index of the last Node in the linked list and the linked list is empty", () => {
      expect(linkedList.at(1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument bigger than the index of the last Node in the linked list and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at(1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument bigger than the index of the last Node in the linked list and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(2)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that isn't an integer and the linked list is empty", () => {
      expect(linkedList.at(1.5)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that isn't an integer and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at(1.5)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that isn't an integer and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(1.5)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument of 0 and the linked list is empty", () => {
      expect(linkedList.at(0)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument of 0 and there is one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at(0)).toStrictEqual(
        { value: "value1", next: null }
      );
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument of 0 and there is more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(0)).toStrictEqual(
        { value: "value1", next: { value: "value2", next: null } }
      );
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that is equal to the index of the last Node in the linked list and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(1)).toStrictEqual(
        { value: "value2", next: null }
      );
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that is bigger than 0 and smaller than the index of the last Node in the linked list and the linked list has more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.at(1)).toStrictEqual(
        { value: "value2", next: { value: "value3", next: null } }
      );
    });

    test("The at method of factory function LinkedList works correctly if the method is called with an argument that is the index of the last Node in the linked list and the linked list has more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.at(2)).toStrictEqual(
        { value: "value3", next: null }
      );
    });

    test("The pop method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.pop()).toStrictEqual(
        { head: null }
      );
    });

    test("The pop method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.pop()).toStrictEqual(
        { head: null }
      );
    });

    test("The pop method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.pop()).toStrictEqual(
        { head: { value: "value1", next: null } }
      );
    });

    test("The contains method of factory function LinkedList works correctly if the method is called without an argument and the linked list is empty", () => {
      expect(linkedList.contains()).toBe(false);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that isn't in the linked list and the linked list is empty", () => {
      expect(linkedList.contains("value1")).toBe(false);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that isn't in the linked list and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.contains("value2")).toBe(false);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that isn't in the linked list and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.contains("value3")).toBe(false);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.contains("value1")).toBe(true);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the first Node and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.contains("value1")).toBe(true);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the linked list but not in the first Node or the last Node of the linked list, and the linked list has more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.contains("value2")).toBe(true);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the last Node and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.contains("value2")).toBe(true);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument exists in more than one Node, the argument is in the first Node and the linked list has more than one Node", () => {
      linkedList.append("value2");
      linkedList.append("value2");
      expect(linkedList.contains("value2")).toBe(true);
    });

    test("The contains method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument exists in more than one Node, the argument isn't in the first Node and the linked list has more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value2");
      expect(linkedList.contains("value2")).toBe(true);
    });

    test("The find method of factory function LinkedList works correctly if the method is called without an argument and the linked list is empty", () => {
      expect(linkedList.find()).toStrictEqual(null);
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument and the linked list is empty", () => {
      expect(linkedList.find("value1")).toStrictEqual(null);
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that isn't in the linked list and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.find("value2")).toStrictEqual(null);
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that isn't in the linked list and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.find("value3")).toStrictEqual(null);
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list and the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.find("value1")).toStrictEqual(
        { value: "value1", next: null }
      );
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the first Node and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.find("value1")).toStrictEqual(
        { value: "value1", next: { value: "value2", next: null } }
      );
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the linked list but not in the first Node or the last Node of the linked list, and the linked list has more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.find("value2")).toStrictEqual(
        { value: "value2", next: { value: "value3", next: null } }
      );
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument is in the last Node and the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.find("value2")).toStrictEqual(
        { value: "value2", next: null }
      );
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument exists in more than one Node, the argument exists in the first Node and the linked list has more than one Node (returns the first Node where the argument is found in the linked list)", () => {
      linkedList.append("value1");
      linkedList.append("value1");
      expect(linkedList.find("value1")).toStrictEqual(
        { value: "value1", next: { value: "value1", next: null } }
      );
    });

    test("The find method of factory function LinkedList works correctly if the method is called with an argument that is in the linked list, the argument exists in more than one Node, the argument doesn't exist in the first Node and the linked list has more than two Node (returns the first Node where the argument is found in the linked list)", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value2");
      expect(linkedList.find("value2")).toStrictEqual(
        { value: "value2", next: { value: "value2", next: null } }
      );
    });

    test("The toStringLinkedList method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.toStringLinkedList()).toBe(
        "head -> null"
      );
    });

    test("The toStringLinkedList method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.toStringLinkedList()).toBe(
        "head -> ( value1 ) -> null"
      );
    });

    test("The toStringLinkedList method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.toStringLinkedList()).toBe(
        "head -> ( value1 ) -> ( value2 ) -> null"
      );
    });


    // insertAt
    

  });


});
  

 









// test("Creating a linkedList factory function creates a linked list with a head node that points to null", () => {
//   // const mockLinkedList = jest.fn(() => { head: null });
//   const linkedList = LinkedList();

//   expect(linkedList.getLinkedList()).toStrictEqual({ head: null });
// });


// test("Prepend to linkedList works correctly if the linked list is empty", () => {
//   const linkedList = LinkedList();

//   expect(linkedList.prepend("prependValue")).toStrictEqual(
//     { head: { value: "prependValue", next: null } }
//   );
// });




// Testing the method implementation of factory function LinkedList

// test("The append method of LinkedList is called with the correct argument", () => {
//   const linkedList = LinkedList();
//   const appendSpy = jest.spyOn(linkedList, "append");
//   linkedList.append("value1");
//   expect(appendSpy).toHaveBeenCalledWith("value1");
// });


// Testing the return values for the methods of factory function LinkedList

