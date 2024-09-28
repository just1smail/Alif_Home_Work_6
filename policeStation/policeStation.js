class PoliceStation {
  constructor() {
    this.data = [];
  }

  addCase(caseNumber, suspectName, status) {
    this.data.push({ caseNumber, suspectName, status });
  }

  findCaseByNumber(caseNumber) {
    return this.data.find((item) => item.caseNumber == caseNumber);
  }

  findCaseBySuspectName(suspectName) {
    return this.data.find((item) => item.suspectName == suspectName);
  }

  getAllCases() {
    return this.data;
  }
}

const policeStation = new PoliceStation();

// Добавляем дела
policeStation.addCase(101, "Анвар Холиков", "расследуется");
policeStation.addCase(102, "Рухшона Давлатова", "открыто");
policeStation.addCase(103, "Сомон Усмонов", "закрыто");

// Поиск дела по номеру
console.log(policeStation.findCaseByNumber(102));

// Поиск дела по имени подозреваемого
console.log(policeStation.findCaseBySuspectName("Сомон Усмонов"));

// Получение списка всех дел
console.log(policeStation.getAllCases());
