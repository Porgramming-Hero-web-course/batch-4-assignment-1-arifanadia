{
  const person = {
    name: "Alice",
    age: 30,
  };

  function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

//   console.log(getProperty(person, "name"));
}
