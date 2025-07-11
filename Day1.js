// What is ECMAScript?
  // ECMAScript is a scripting language specification standardized by ECMA International. 
  // It is the foundation for several programming languages, including JavaScript, JScript, and ActionScript.
  // ECMAScript defines the core features of these languages, such as syntax, types, objects, and standard libraries.
  // It is designed to ensure interoperability between different implementations of the language.
  // ECMAScript is often updated with new features and improvements, with the latest version being ECMAScript 2022 (ES13).
  // The language is widely used for web development, server-side programming, and more.


// Data Types & Type Of Operators
// In JavaScript, data types are categorized into two main groups: primitive data types and non-primitive (reference) data types.
   // Primitive Data Types
   // 1. Number: Represents numeric values, both integers and floating-point numbers.
let num = 42; // Example of a number
// 2. String: Represents a sequence of characters, enclosed in single or double quotes.
let str = "Hello, World!"; // Example of a string
// 3. Boolean: Represents a logical value, either true or false.
let isTrue = true; // Example of a boolean
// 4. Undefined: Represents a variable that has been declared but not assigned a value.
let undef; // Example of an undefined variable
// 5. Null: Represents the intentional absence of any object value.
let emptyValue = null; // Example of a null value
// 6. Symbol: Represents a unique and immutable value, often used as object property keys.
let uniqueSymbol = Symbol("description"); // Example of a symbol
// 7. BigInt: Represents integers with arbitrary precision, useful for very large numbers.
let bigIntValue = BigInt(123456789012345678901234567890);


// Non-Primitive Data Types (Reference Types)
// 1. Object: Represents a collection of key-value pairs, where keys are strings or symbols.
let obj = { name: "Alice", age: 30 }; // Example of an object
// 2. Array: Represents an ordered collection of values, which can be of any type.
let arr = [1, 2, 3, "four", true]; // Example
// of an array
// 3. Function: Represents a reusable block of code that can be called with arguments.
function greet(name) {
    return `Hello, ${name}!`; // Example of a function
}
// 4. Date: Represents a specific point in time, useful for date and time manipulation.
let currentDate = new Date(); // Example of a date object
// 5. RegExp: Represents a regular expression, used for pattern matching in strings.
let regex = /abc/; // Example of a regular expression
// 6. Map: Represents a collection of key-value pairs, where keys can be of any type.
let map = new Map();
map.set("key1", "value1"); // Example of a map
// 7. Set: Represents a collection of unique values, where each value can only occur
let set = new Set();
set.add(1); // Example of a set
set.add(2);
set.add(2); // Duplicate value, will not be added again
// 8. WeakMap: Similar to Map, but keys are weakly referenced, allowing for garbage collection.
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value"); // Example of a weak map
// 9. WeakSet: Similar to Set, but values are weakly referenced, allowing for garbage collection.
let weakSet = new WeakSet();
let weakObj = {};
weakSet.add(weakObj); // Example of a weak set
// 10. ArrayBuffer: Represents a fixed-length binary data buffer, useful for low-level data manipulation.
let buffer = new ArrayBuffer(16); // Example of an ArrayBuffer
// 11. TypedArray: Represents an array of a specific numeric type, such as Int8Array, Uint8Array, Float32Array, etc.
let intArray = new Int8Array(buffer); // Example of a typed array
// 12. DataView: Provides a low-level interface for reading and writing multiple number types in an ArrayBuffer.
let dataView = new DataView(buffer); // Example of a DataView
// 13. Promise: Represents a value that may be available now, or in the future, or never.
let promise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
        resolve("Operation completed successfully!");
    }, 1000);
}); // Example of a promise
// 14. Generator: Represents a function that can be paused and resumed, allowing for lazy evaluation.
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
} // Example of a generator function
// 15. Async Function: Represents a function that returns a promise and allows for asynchronous operations using the await keyword.
async function asyncFunction() {
    let result = await promise; // Example of an async function
    console.log(result);
}
// 16. Proxy: Represents a wrapper around an object that allows for custom behavior when accessing or modifying properties.
let target = {};
let handler = {
    get: function (obj, prop) {
        return prop in obj ? obj[prop] : "Property not found";
    }
};
let proxy = new Proxy(target, handler); // Example of a proxy
// 17. Reflect: Provides a set of static methods for interceptable JavaScript operations, such as property access and function calls.
let reflectResult = Reflect.get(proxy, "someProperty"); // Example of using Reflect to get a property
// 18. Intl: Provides a namespace for internationalization and localization features, such as formatting numbers, dates, and strings.
let numberFormat = new Intl.NumberFormat("en-US", { style: "currency", currency
: "USD" }); // Example of using Intl for number formatting
let formattedNumber = numberFormat.format(123456.789); // Example of formatting a number
// 19. JSON: Represents a built-in object for parsing and stringifying JSON data.   
let jsonString = JSON.stringify({ name: "Alice", age: 30 }); // Example of converting an object to JSON string
let jsonObject = JSON.parse(jsonString); // Example of parsing a JSON string back to an object
// 20. Error: Represents an error that occurs during the execution of a program, providing information about the error type and message.
let error = new Error("Something went wrong!"); // Example of creating an error object
// 21. Eval: Represents a function that evaluates JavaScript code represented as a string.
let evalResult = eval("2 + 2"); // Example of using eval to evaluate a
// string expression
// 22. Function: Represents a callable object that can be invoked with arguments.
function add(a, b) {
    return a + b; // Example of a function that adds two numbers
}
// 23. WeakRef: Represents a weak reference to an object, allowing for garbage collection while still providing access to the object.
let weakRef = new WeakRef(obj); // Example of a weak reference to an object
// 24. FinalizationRegistry: Provides a way to register a callback that will be called when an object is garbage collected.
let finalizationRegistry = new FinalizationRegistry((heldValue) => {
    console.log(`Object with held value ${heldValue} has been garbage collected.`);
}); // Example of using FinalizationRegistry
finalizationRegistry.register(obj, "Object 1"); // Registering an object with the finalization registry
// 25. SharedArrayBuffer: Represents a fixed-length binary data buffer that can be shared between threads, useful for concurrent programming.
let sharedBuffer = new SharedArrayBuffer(16); // Example of a SharedArrayBuffer
// 26. Atomics: Provides atomic operations for shared memory, allowing for safe concurrent programming
let atomicsResult = Atomics.add(new Int32Array(sharedBuffer), 0, 1); // Example of using Atomics to perform an atomic operation
// 27. BigInt64Array: Represents a typed array of 64-bit signed integers, useful for working with large integers.
let bigInt64Array = new BigInt64Array(sharedBuffer); // Example of a BigInt64Array

// typeof Operators
// The `typeof` operator in JavaScript is used to determine the type of a given value or variable.
// It returns a string indicating the type of the operand. Here are some examples:
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof isTrue); // "boolean"
console.log(typeof undef); // "undefined"
console.log(typeof emptyValue); // "object" (null is considered an object in JavaScript)
console.log(typeof uniqueSymbol); // "symbol"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object" (arrays are a type of object)
console.log(typeof greet); // "function"
console.log(typeof currentDate); // "object" (Date is a type of object)
console.log(typeof regex); // "object" (RegExp is a type of object)
console.log(typeof map); // "object" (Map is a type of object)
console.log(typeof set); // "object" (Set is a type of object)
console.log(typeof weakMap); // "object" (WeakMap is a type of object)
console.log(typeof weakSet); // "object" (WeakSet is a type of object)
console.log(typeof buffer); // "object" (ArrayBuffer is a type of object)
console.log(typeof intArray); // "object" (TypedArray is a type of object)

// Variables 
// In JavaScript, variables are used to store data values. You can declare variables using `var`, `let`, or `const`.
// 1. `var`: Declares a variable that can be re-assigned and has
// function scope or global scope.
var globalVar = "I am a global variable"; // Example of a global variable
function exampleFunction() {
    var functionVar = "I am a function variable"; // Example of a function-scoped variable
    console.log(functionVar); // Output: "I am a function variable"
}
// 2. `let`: Declares a block-scoped variable that can be re-assigned.
let blockScopedVar = "I am a block-scoped variable"; // Example of a block-scoped variable
if (true) {
    let insideBlockVar = "I am inside a block"; // Example of a variable inside a block
    console.log(insideBlockVar); // Output: "I am inside a block"
}
// 3. `const`: Declares a block-scoped variable that cannot be re-assigned.
const constantVar = "I am a constant variable"; // Example of a constant variable
constantVar = "Trying to change"; // This will throw an error because const variables cannot be re-assigned  
console.log(constantVar); // Output: "I am a constant variable"
// Note: Variables declared with `var` can be re-declared, while `let` and `const` cannot be re-declared in the same scope.

// Example of variable scope
  if (true) {
    var x = 5 ;
    let y = 10;
    const z = 15;
  }
    console.log(x); // Output: 5 (x is accessible outside the block)
    console.log(y); // This will throw an error because y is block-scoped and not accessible outside the block
    console.log(z); // This will throw an error because z is block-scoped and not accessible outside the block
 // Reassignment of variables
var a = 1 ;
var a = 2; // Re-declaring a variable with var is allowed
let b = 3;
b = 4; // Re-assigning a variable declared with let is allowed
// let b = 4; // This will throw an error because b is already declared with let
const c = 5;
// c = 6; // This will throw an error because c is a constant
// const c = 6; // This will throw an error because c is already declared with const

// Variable Hoisting
   console.log(a); // Output: undefined (a is hoisted)
    var a = 10; // Variable declaration is hoisted, but assignment is not
    
    console.log(a); // Output: 10 (a is now assigned)
    // let b = 20; // let is not hoisted, so this will throw an error if accessed before declaration

     console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization
      //  const c = 30; // const is not hoisted, so this will throw an error if accessed before declaration

   

// String & Character
// In JavaScript, strings are sequences of characters used to represent text.
// Strings can be created using single quotes, double quotes, or backticks (template literals).
let singleQuoteString = 'Hello, World!'; // Single quotes
let doubleQuoteString = "Hello, World!"; // Double quotes
let templateLiteralString = `Hello, World!`; // Template literals (backticks)
// Strings can contain any characters, including letters, numbers, symbols, and whitespace.
// You can access individual characters in a string using indexing, similar to arrays.
let exampleString = "JavaScript";
console.log(exampleString[0]); // Output: "J" (first character) 
console.log(exampleString[4]); // Output: "S" (fifth character)
// You can also use string methods to manipulate strings, such as `length`, `toUpperCase()`, `toLowerCase()`, `substring()`, and more.
console.log(exampleString.length); // Output: 10 (length of the string)
console.log(exampleString.toUpperCase()); // Output: "JAVASCRIPT" (convert to uppercase)
console.log(exampleString.toLowerCase()); // Output: "javascript" (convert to lowercase)
console.log(exampleString.substring(0, 4)); // Output: "Java" (substring from index 0 to 4)
console.log(exampleString.indexOf("Script")); // Output: 4 (index of the substring "Script")
console.log(exampleString.includes("Java")); // Output: true (check if the string contains "Java")
console.log(exampleString.replace("Script", "Programming")); // Output: "JavaProgramming" ( replace "Script" with "Programming")

// immutable , index-based and zero-indexed

// CONCATENATION
// In JavaScript, you can concatenate strings using the `+` operator or template literals.
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Using + operator
console.log(fullName); // Output: "John Doe"
let templateFullName = `${firstName} ${lastName}`; // Using template literals
console.log(templateFullName); // Output: "John Doe"
// string + number 
let age = 30;
let greeting = "Hello, " + firstName + "! You are " + age + " years old."; // Concatenating string and number
console.log(greeting); // Output: "Hello, John! You are 30 years old."   string
// You can also use the `concat()` method to concatenate strings.
let concatenatedString = firstName.concat(" ", lastName); // Using concat() method
console.log(concatenatedString); // Output: "John Doe"
// Note: When concatenating strings with numbers, JavaScript automatically converts the number to a string.
let numberString = "The answer is: " + 42; // Concatenating string
console.log(numberString); // Output: "The answer is: 42"
// You can also use the `String()` function to convert other data types to strings.
let numberValue = 100;
let stringValue = String(numberValue); // Converting number to string
console.log(stringValue); // Output: "100" (string representation of the number)
// You can also use the `toString()` method to convert other data types to strings.
let booleanValue = true;
let booleanString = booleanValue.toString(); // Converting boolean to string
console.log(booleanString); // Output: "true" (string representation of the boolean)

// Arithmetic Operators
// In JavaScript, arithmetic operators are used to perform mathematical operations on numbers.
// Here are the basic arithmetic operators:
let a = 10;
let b = 5;
// 1. Addition (+): Adds two numbers together.
let sum = a + b; // Example of addition
console.log("Sum:", sum); // Output: "Sum: 15"
// 2. Subtraction (-): Subtracts the second number from the first.
let difference = a - b; // Example of subtraction
console.log("Difference:", difference); // Output: "Difference: 5"
// 3. Multiplication (*): Multiplies two numbers together.
let product = a * b; // Example of multiplication
console.log("Product:", product); // Output: "Product: 50"
// 4. Division (/): Divides the first number by the second.
let quotient = a / b; // Example of division
console.log("Quotient:", quotient); // Output: "Quotient: 2"
// 5. Modulus (%): Returns the remainder of the division of the first number by the second.
let remainder = a % b; // Example of modulus
console.log("Remainder:", remainder); // Output: "Remainder: 0"
// 6. Exponentiation (**): Raises the first number to the power of the second.
let power = a ** b; // Example of exponentiation
console.log("Power:", power); // Output: "Power: 100000"
// 7. Increment (++) and Decrement (--): Increases or decreases a number by
// 1, respectively.
let incrementedValue = a++; // Example of increment
console.log("Incremented Value:", incrementedValue); // Output: "Incremented Value: 10"
console.log("After Increment:", a); // Output: "After Increment: 11"
let decrementedValue = b--; // Example of decrement
console.log("Decremented Value:", decrementedValue); // Output: "Decremented Value: 5"
console.log("After Decrement:", b); // Output: "After Decrement: 4
// 8. Unary Plus (+): Converts a value to a number, if it is not already.
let stringNumber = "20";
let convertedNumber = +stringNumber; // Example of unary plus
console.log("Converted Number:", convertedNumber); // Output: "Converted Number: 20"
let t = 6 ;
console.log("Unary Plus:", +t); // Output: "Unary Plus: 6" (converts t to a number, which is already a number)
console.log(+true); // Output: 1 (converts true to a number, which is 1)
console.log(+false); // Output: 0 (converts false to a number, which is 0)
console.log(+null); // Output: 0 (converts null to a number, which is 0)
console.log(+undefined); // Output: NaN (converts undefined to a number, which is NaN)
console.log(+NaN); // Output: NaN (converts NaN to a number, which is still NaN)
console.log(+"123abc"); // Output: NaN (converts an invalid string to a number, which is NaN)
// 9. Unary Negation (-): Converts a value to a number and negates it
let negativeValue = -convertedNumber; // Example of unary negation
console.log("Negative Value:", negativeValue); // Output: "Negative Value: -20"
console.log(-t); // Output: -6 (negates t, which is 6)
function sumInputs(input1, input2) {
    return +input1 + +input2; // Example of a function that adds two inputs
}
// console.log(sumInputs("5", "10")); // Output: 15 (adds two string inputs after converting them to numbers)
// 10. NaN (Not a Number): Represents a value that is not a valid number.
let invalidNumber = "abc" / 2; // Example of NaN

// Assignment Operators
// In JavaScript, assignment operators are used to assign values to variables.
let x = 10; // Assignment operator (=) assigns the value 10 to the variable x
let y = 5; // Assigns the value 5 to the variable y
// 1. Assignment (=): Assigns the value on the right to the variable on the left.
x = 20; // Re-assigns the value 20 to the variable x
console.log("x after assignment:", x); // Output: "x after assignment: 20"
// 2. Addition Assignment (+=): Adds the value on the right to the variable on
// the left and assigns the result to the variable on the left.
x += y; // Equivalent to x = x + y
console.log("x after addition assignment:", x); // Output: "x after addition assignment: 25"
// 3. Subtraction Assignment (-=): Subtracts the value on the right from
// the variable on the left and assigns the result to the variable on the left.
x -= y; // Equivalent to x = x - y
console.log("x after subtraction assignment:", x); // Output: "x after subtraction assignment: 20"
// 4. Multiplication Assignment (*=): Multiplies the variable on the left by the value on the right and assigns the result to the variable on the left.
x *= y; // Equivalent to x = x * y
console.log("x after multiplication assignment:", x); // Output: "x after multiplication assignment: 100"
// 5. Division Assignment (/=): Divides the variable on the left by the value on the right and assigns the result to the variable on the left.
x /= y; // Equivalent to x = x / y
console.log("x after division assignment:", x); // Output: "x after division assignment: 20"
// 6. Modulus Assignment (%=): Calculates the remainder of the division of the variable on the left by the value on the right and assigns the result to the variable on the left.
x %= y; // Equivalent to x = x % y
console.log("x after modulus assignment:", x); // Output: "x after modulus assignment: 0"
// 7. Exponentiation Assignment (**=): Raises the variable on the left to the power of the value on the right and assigns the result to the variable on the left.
x **= y; // Equivalent to x = x ** y
console.log("x after exponentiation assignment:", x); // Output: "x after exponentiation assignment: 0"






