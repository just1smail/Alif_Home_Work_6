class FraudDetector {
    constructor() {
        this.transactions = [];
    }

    addTransaction(amount, type){
        this.transactions.push({amount, type, isFlagged : false})
    }

    flagLargeTransactions(limit){
        this.transactions.map((item) => {
            if(item.amount > limit){
                item.isFlagged = true;
            }
        })
    }

    getFlaggedTransactions(){
        return this.transactions.filter((item) => item.isFlagged == true)
    }
}

// Пример использования класса FraudDetector
const fraudDetector = new FraudDetector();

// Добавляем несколько транзакций
fraudDetector.addTransaction(500, "debit");
fraudDetector.addTransaction(1500, "credit");
fraudDetector.addTransaction(2500, "debit");

// Помечаем транзакции, которые превышают лимит 1000
fraudDetector.flagLargeTransactions(1000);

// Получаем помеченные транзакции
const flagged = fraudDetector.getFlaggedTransactions();
console.log(flagged); 
// Ожидаемый результат: Транзакции с суммами 1500 и 2500 должны быть помечены как подозрительные.
