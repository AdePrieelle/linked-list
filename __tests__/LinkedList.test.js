import { LinkedList } from '../LinkedList';

// Testing the interface of factory function LinkedList

describe("Testing the factory function LinkedList", () => {
  let linkedList;
  beforeEach(() => {
    linkedList = LinkedList();
  });

  describe("Testing the method types of factory function LinkedList", () => {
    test("The append method of LinkedList is a function", () => {
      expect(typeof linkedList.append).toBe("function");
    });
    
    test("The prepend method of LinkedList is a function", () => {
      expect(typeof linkedList.prepend).toBe("function");
    });
  
    
    test("The size method of LinkedList is a function", () => {
      expect(typeof linkedList.size).toBe("function");
    });
    
    test("The head method of LinkedList is a function", () => {
      expect(typeof linkedList.head).toBe("function");
    });
    
    test("The tail method of LinkedList is a function", () => {
      expect(typeof linkedList.tail).toBe("function");
    });
    
    test("The at method of LinkedList is a function", () => {
      expect(typeof linkedList.at).toBe("function");
    });
    
    test("The pop method of LinkedList is a function", () => {
      expect(typeof linkedList.pop).toBe("function");
    });
    
    test("The contains method of LinkedList is a function", () => {
      expect(typeof linkedList.contains).toBe("function");
    });
    
    test("The find method of LinkedList is a function", () => {
      expect(typeof linkedList.find).toBe("function");
    });
    
    test("The toStringLinkedList method of LinkedList is a function", () => {
      expect(typeof linkedList.toStringLinkedList).toBe("function");
    });
    
    test("The insertAt method of LinkedList is a function", () => {
      expect(typeof linkedList.insertAt).toBe("function");
    });
    
    test("The removeAt method of LinkedList is a function", () => {
      expect(typeof linkedList.removeAt).toBe("function");
    });
  });

  describe("Testing the return type for the methods of factory function LinkedList", () => {
    test("The return type of the append method without a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.append()).toBe("object");
    });
    
    test("The return type of the append method with a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.append("value")).toBe("object");
    });
    
    test("The return type of the prepend method without a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.prepend()).toBe("object");
    });
    
    test("The return type of the prepend method with a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.prepend("value")).toBe("object");
    });
    
    test("The return type of the size method of LinkedList is a number", () => {
      expect(typeof linkedList.size()).toBe("number");
    });
    
    test("The return type of the head method of LinkedList is an object", () => {
      expect(typeof linkedList.head()).toBe("object");
    });
    
    test("The return type of the tail method of LinkedList is an object", () => {
      expect(typeof linkedList.tail()).toBe("object");
    });
    
    test("The return type of the at method without a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.at()).toBe("object");
    });
    
    test("The return type of the at method with a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.at(0)).toBe("object");
    });
    
    test("The return type of the pop method of LinkedList is an object", () => {
      expect(typeof linkedList.pop()).toBe("object");
    });
    
    test("The return type of the contains method without a parameter of LinkedList is a boolean", () => {
      expect(typeof linkedList.contains()).toBe("boolean");
    });
    
    test("The return type of the contains method with a parameter of LinkedList is a boolean", () => {
      expect(typeof linkedList.contains("value")).toBe("boolean");
    });
    
    test("The return type of the find method without a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.find()).toBe("object");
    });
    
    test("The return type of the find method with a parameter of LinkedList is an object", () => {
      expect(typeof linkedList.find("value")).toBe("object");
    });
    
    test("The return type of the toStringLinkedList method of LinkedList is a string", () => {
      expect(typeof linkedList.toStringLinkedList()).toBe("string");
    });
    
    test("The return type of the insertAt method without the value and id parameter of LinkedList is an object", () => {
      expect(typeof linkedList.insertAt()).toBe("object");
    });
    
    test("The return type of the insertAt method without the value but with the id parameter of LinkedList is an object", () => {
      expect(typeof linkedList.insertAt(undefined, 0)).toBe("object");
    });
    
    test("The return type of the insertAt method with the value but without the id parameter of LinkedList is an object", () => {
      expect(typeof linkedList.insertAt("value")).toBe("object");
    });
    
    test("The return type of the insertAt method with the value and id parameter of LinkedList is an object", () => {
      expect(typeof linkedList.insertAt("value", 0)).toBe("object");
    });
    
    test("The return type of the removeAt method without the value parameter of LinkedList is an object", () => {
      expect(typeof linkedList.removeAt()).toBe("object");
    });
    
    test("The return type of the removeAt method with the value parameter of LinkedList is an object", () => {
      expect(typeof linkedList.removeAt(0)).toBe("object");
    });
  });



  describe("Testing the return values for the methods of factory function LinkedList", () => {

    test("The append method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.append("value1")).toStrictEqual(
        { head: { value: "value1", next: null } }
      );
    });
    
    test("The append method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.append("value2")).toStrictEqual(
        { head: { value: "value1", next: { value: "value2", next: null } } }
      );
    });

    test("The append method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.append("value3")).toStrictEqual(
        { head: { value: "value1", next: { value: "value2", next: { value: "value3", next: null } } } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the linked list is empty", () => {
      expect(linkedList.prepend("value0")).toStrictEqual(
        { head: { value: "value0", next: null } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the linked list has one Node", () => {
      linkedList.append("value1");
      expect(linkedList.prepend("value0")).toStrictEqual(
        { head: { value: "value0", next: { value: "value1", next: null } } }
      );
    });

    test("The prepend method of factory function LinkedList works correctly if the linked list has more than one Node", () => {
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

    test("The at method of factory function LinkedList works correctly if the function isn't called with an index and the linked list is empty", () => {
      expect(linkedList.at()).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with an index lower than than 0 and the linked list is empty", () => {
      expect(linkedList.at(-1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with an index lower than than 0 and the linked list has existing Node(s)", () => {
      linkedList.append("value1");
      expect(linkedList.at(-1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with an index higher than the last element in the linked list and the linked list has existing Node(s)", () => {
      linkedList.append("value1");
      expect(linkedList.at(1)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 0 and the linked list is empty", () => {
      expect(linkedList.at(0)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with a number that isn't an integer", () => {
      linkedList.append("value1");
      expect(linkedList.at(1.5)).toStrictEqual(null);
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 0 and there is one Node", () => {
      linkedList.append("value1");
      expect(linkedList.at(0)).toStrictEqual(
        { value: "value1", next: null }
      );
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 0 and there is more than one Node", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(0)).toStrictEqual(
        { value: "value1", next: { value: "value2", next: null } }
      );
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 1 and there are two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      expect(linkedList.at(1)).toStrictEqual(
        { value: "value2", next: null }
      );
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 0 and there are more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.at(0)).toStrictEqual(
        { value: "value1", next: { value: "value2", next: { value: "value3", next: null } } }
      );
    });

    test("The at method of factory function LinkedList works correctly if the function is called with index 1 and there are more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.at(1)).toStrictEqual(
        { value: "value2", next: { value: "value3", next: null } }
      );
    });

    test("The at method of factory function LinkedList works correctly if the function is called with the last index and there are more than two Nodes", () => {
      linkedList.append("value1");
      linkedList.append("value2");
      linkedList.append("value3");
      expect(linkedList.at(2)).toStrictEqual(
        { value: "value3", next: null }
      );
    });

    // pop method




    

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

