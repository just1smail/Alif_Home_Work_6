class BankQueue {
  constructor() {
    this.queue = [];
  }

  addClient(name) {
    this.queue.push(name);
  }

  serveClient() {
    if (this.queue.length === 0) {
      return "Очередь пуста";
    }
    return this.queue.shift();
  }

  getQueue() {
    return this.queue.join(", ");
  }
}

const bankQueue = new BankQueue();

// Добавляем клиентов в очередь
bankQueue.addClient("Иван");
bankQueue.addClient("Анна");
bankQueue.addClient("Сергей");

// Обслуживаем клиента
console.log(bankQueue.serveClient());

// Показываем текущую очередь
console.log(`В Очереди ${bankQueue.getQueue()}`);

// Добавляем еще одного клиента
bankQueue.addClient("Мария");

// Обслуживаем клиента
console.log(bankQueue.serveClient());

// Показываем текущую очередь
console.log(`В Очереди ${bankQueue.getQueue()}`);
