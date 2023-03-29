// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
// в якому необхідно реалізувати методи для роботи з балансом та історією
// транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  id: 0,

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {
    this.id++;
    return { id: this.id, amount, type };
  },

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    return `Рахунок поповнено на ${amount} уо.`;
  },

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      return `Зняття такої суми не можливе, недостатньо коштів`;
    }
    this.balance -= amount;
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW)
    );
    return `З рахунку знято ${amount} уо.`;
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return `Ваш баланс: ${this.balance} уо.`;
  },

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    if (this.transactions.includes(this.transactions[id])) {
      return this.transactions.find((transaction) => transaction.id === id);
    }
    return `Транзакції з id: ${id} не існує`;
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    const total = [...this.transactions]
      .filter((transaction) => transaction.type === type)
      .reduce((total, transaction) => total + transaction.amount, 0);
    return `Всього за цим типом транзакції було проведено ${total} уо.`;
  },
};

console.log(account.getBalance());
console.log(account.deposit(100));
console.log(account.transactions);
console.log(account.deposit(200));
console.log(account.getBalance());
console.log(account.withdraw(200));
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getBalance());
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.deposit(1000));
console.log(account.getBalance());