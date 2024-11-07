{
  type Person = {
    name: string;
    age: number;
    email: string;
  };
  function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    for (const key of keys) {
      if (!(key in obj)) {
        return false;
      }
    }
    return true;
  }

  const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
  const validKeys = validateKeys<Person>(person, ["name", "age"]);
  console.log(validKeys);
}
