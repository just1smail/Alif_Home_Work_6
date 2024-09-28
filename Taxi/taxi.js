class TaxiOperator {
  constructor() {
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  removeOrder(index) {
    return this.orders.splice(index, 1);
  }

  getLastOrders(count) {
    return this.orders.slice(-count);
  }

  getOrders() {
    return this.orders;
  }
}

const taxiOperator = new TaxiOperator();

taxiOperator.addOrder("Заказ от Анвар, маршрут: А -> В");
taxiOperator.addOrder("Заказ от Насиба, маршрут: С -> D");
taxiOperator.addOrder("Заказ от Шахром, маршрут: Е -> F");

console.log(taxiOperator.removeOrder(1));

console.log(taxiOperator.getLastOrders(2));

console.log(taxiOperator.getOrders());
