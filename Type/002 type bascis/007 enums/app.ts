// Numeric Enums - Default
// By default, enums will initialize the
// first value to 0 and add 1 to each additional value:

// ! enum is way to create custom variables that are having
// ^ specified list of values
// ? enum makes identifers easy to read and use
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// ! enum is way to create custom variables that are having
// ^ specified list of values
// ? enum makes identifers easy to read and use
// & enum makes identifers const throught out the code
enum CardinalDirections {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

enum Continents {
  North_America = "North_America",
  South_America = "South_America",
  Africa = "Africa",
  Asia = "Asia",
  Europe = "Europe",
  Antartica = "Antartica",
  Australia = "Australia",
}

// usage
var region = Continents.Africa;

let place = {
  city: "newyork",
  Continent: Continents.North_America,
};
