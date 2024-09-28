class MobileOperator {
  constructor() {
    this.clients = [];
  }

  addClient(name, balance) {
    this.clients.push({ name, balance });
  }

  sortClientsByBalance() {
    return this.clients.sort((a, b) => a.balance - b.balance);
  }

  reverseClientList() {
    return this.clients.reverse();
  }

  getClientList() {
    return this.clients.map((client) => `${client.name}: ${client.balance}`);
  }
}

const mobileOperator = new MobileOperator();

// Добавляем клиентов
mobileOperator.addClient("Иван", 100);
mobileOperator.addClient("Анна", 200);
mobileOperator.addClient("Сергей", 50);
mobileOperator.addClient("Мария", 150);

// Сортируем клиентов по балансу
console.log(mobileOperator.sortClientsByBalance());

// Выводим клиентов в обратном порядке
console.log(mobileOperator.reverseClientList());

// Получаем список клиентов
console.log(mobileOperator.getClientList());
