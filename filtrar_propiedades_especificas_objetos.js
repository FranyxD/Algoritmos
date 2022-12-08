function whatIsInAName(collection, source) {
  Object.keys(collection);
  const sourceKeys = Object.keys(source);
  return collection.filter((obj) =>
    sourceKeys.every((key) => obj.hasOwnProperty(key) &&
                              obj[key] === source[key]          
                    )
  );
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })

whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})
/*
[
  { apple: 1, bat: 2 },
  { apple: 1, bat: 2, cookie: 2 },
];
*/
