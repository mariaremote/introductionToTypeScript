# Introduction to TypeScript

This is just me following along this YouTube Tutorial on TypeScript.
https://www.youtube.com/watch?v=SpwzRDUQ1GI

## Summary

Concepts learnt and practiced:

### `type.ts`

- **Type Aliases**: `type Address` and `type Person` define custom types.
- **Optional Properties**: The address property in Person is optional, denoted by `address?: Address`.
- **Object Type Annotations**: Variables `person1` and `person2` are annotated with the `Person` type.
- **Nested Objects**: `person2` includes a nested address object of type `Address`.
- **Optional Chaining**: The commented `displayInfo` function uses optional chaining (`person1.address?.city`) to safely access nested properties.
- **Array of Custom Types**: `people` is an array of `Person` objects.
- **Literal Types**: `myName` is a literal type that can only hold the value "Joe".
- **Union Types**: The `User` type (partially shown) allows for multiple types.

### `pizza.ts`

- **Union Types**: The `getPizzaDetail` function uses a union type (`number | string`) for the `identifier` parameter.
- **Type Aliases**: `type Pizza` and `type Order` define custom types for pizzas and orders.
- **Generics**: The `addToArray` function is a generic function that can handle arrays of any type.
- **Optional Properties**: The `Omit` utility type is used in `addNewPizza` to create a new pizza without specifying the `id`.
- **Type Assertions**: Type assertions are used to specify the type of items being added to arrays.
- **Array Methods**: Methods like `find` and `push` are used to manipulate arrays.
- **Error Handling**: Custom error messages are thrown when invalid identifiers or orders are encountered.
- **Incrementing Counters**: Variables like `pizzaIdCounter` and `orderIdCounter` are used to generate unique IDs.
- **Enums**: The `status` property in the `Order` type uses a union of string literals to represent order statuses.
- **Destructuring**: The spread operator (`...pizza`) is used to create new pizza objects with additional properties.
- **Function Overloading**: The `getPizzaDetail` function demonstrates function overloading by handling different types of identifiers.
- **Logging**: `console.log` is used to output the menu, cash in register, and order queue.
- **Object.assign**: `Object.assign` is used to merge multiple pizza objects into one.
