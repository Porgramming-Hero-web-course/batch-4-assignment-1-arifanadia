{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Tshape = Circle | Rectangle;

  const calculateShapeArea = (shape: Tshape): number => {
    if (shape.shape === "circle") {
      const circleResult = Math.PI * 5 * 5;
 
      return circleResult;
    } else if (shape.shape === "rectangle") {
      const rectangleResult = shape.width * shape.height;

      return rectangleResult;
    }
    throw new Error("invalid shape");
  };

  const circle = calculateShapeArea({ shape: "circle", radius: 5 });
//   console.log(circle);
  const rectangle = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
//   console.log(rectangle);
}
