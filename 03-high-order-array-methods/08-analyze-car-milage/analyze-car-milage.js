function analyzeCarMileage(cars) {
  const totalMileage = cars.reduce((acc, cur) => acc + cur.mileage, 0);
  const highestMileage = cars.reduce(
    (highest, cur) => (cur.mileage > highest.mileage ? cur : highest),
    cars[0]
  );
  const lowestMileage = cars.reduce(
    (lowest, cur) => (cur.mileage < lowest.mileage ? cur : lowest),
    cars[0]
  );
  const averageMileage = totalMileage / cars.length;
  return {
    averageMileage,
    highestMileageCar: highestMileage,
    lowestMileageCar: lowestMileage,
    totalMileage,
  };
}

module.exports = analyzeCarMileage;
