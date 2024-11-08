🚀🚀The significance of union and intersection types in Typescript.

In TypeScript, Union and Intersection Types are powerful tools for creating versatile and reusable types. They enable developers to combine types, resulting in more expressive and type-safe code. Let’s dive into the purpose of each type and see how they improve TypeScript’s type system.

# ⚙️Union Types:

A Union Type is a type that can hold a value from multiple possible types. This is achieved by using the | symbol to combine types. Union types are valuable when we want a variable or parameter to accept multiple types without enforcing that all are present simultaneously.

## 🌟Purpose of Union Types

✔️ Enhanced Flexibility: Union types make a variable adaptable by allowing it to accept multiple types, enabling more versatile code.
✔️ Type Safety and Clarity: Union types add a layer of type safety that prevents arbitrary assignments, allowing only predefined types while ensuring clarity in what types are expected.

## Example:

type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };
type Tshape = Circle | Rectangle;

const calculateArea = (shape: Tshape): number => {
if (shape.shape === "circle"){
const circleResult = Math.PI \* shape.radius \* shape.radius;
return circleResult;

}
else if (shape.shape === "rectangle") {
const rectangleResult = shape.width \* shape.height;
return rectangleResult;
}

};

const circleArea = calculateArea({ shape: "circle", radius: 5 });
const rectArea = calculateArea({ shape: "rectangle", width: 4, height: 6 });

console.log(circleArea); // Circle area
console.log(rectArea); // Rectangle area
console.log(rectangle);

In this example, the function calculateShapeArea can handle both circles and rectangles by using a union type Tshape. This way, the function adapts to different shapes while ensuring only valid shapes are passed in.


# ⚙️Intersection Types:

An Intersection Type combines multiple types into one, enforcing that a variable has all the properties from each type involved. This type is created using the & symbol, and it is particularly useful when you want an object to satisfy multiple type constraints simultaneously.

🌟 Purpose of Intersection Types
✔️ Precision and Composability: Intersection types ensure that objects meet multiple criteria, offering more detailed and precise data models.
✔️ Support for Complex Data Structures: These types are especially helpful when combining multiple interfaces or types, commonly seen in mixins and models with multiple requirements.

## Example:

type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const user: Person = { name: "Alice", age: 30 };

function displayUser(user: Person) {
  console.log(`Name: ${user.name}, Age: ${user.age}`);
}

displayUser(user); // Output: Name: Alice, Age: 30

In this case, Person is an intersection of HasName and HasAge. The user object must contain both name and age properties to match the Person type, making the type more restrictive and precise.
