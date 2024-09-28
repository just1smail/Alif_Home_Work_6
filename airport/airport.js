class Airport {
  constructor() {
    this.flights = [];
  }

  addFlight(flightNumber, destination, status) {
    this.flights.push({ flightNumber, destination, status });
  }

  findFlight(flightNumber) {
    return this.flights.find((flight) => flight.flightNumber == flightNumber);
  }

  filterDelayedFlights() {
    return this.flights.filter((flight) => flight.status == "delayed");
  }

  getFlightInfo() {
    return this.flights.map(
      (flight) =>
        `Рейс ${flight.flightNumber} летит в ${flight.destination} - статус: ${flight.status}`
    );
  }
}

const airport = new Airport();

airport.addFlight("SU123", "Москва", "on time");
airport.addFlight("AF456", "Париж", "delayed");
airport.addFlight("LH789", "Берлин", "on time");
airport.addFlight("BA101", "Лондон", "delayed");

console.log(airport.findFlight("AF456"));

console.log(airport.filterDelayedFlights());

console.log(airport.getFlightInfo());
