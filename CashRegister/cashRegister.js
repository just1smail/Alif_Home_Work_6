class CashRegister {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  removeItem(name) {
    this.items = this.items.filter((item) => item.name != name);
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity, 0);
  }

  getReceipt() {
    const receiptItems = this.items.map(
      (item) =>
        `${item.quantity} - ${item.name} = $ ${item.price * item.quantity}`
    );
    const total = this.calculateTotal();
    return `
${receiptItems.join("\n")}
Итого: $${total}`;
  }
}

const cashRegister = new CashRegister();

cashRegister.addItem("Яблоки", 1.5, 3);
cashRegister.addItem("Бананы", 1.2, 5);
cashRegister.addItem("Апельсины", 2.0, 2);

cashRegister.removeItem("Бананы");

console.log(cashRegister.getReceipt());
