class Selection { }
class DepartureStation extends Selection { }
class ArrivalStation extends Selection { }
class DepartureDate extends Selection { }
class DepartureTime extends Selection { }
class NumberChoice extends Selection { }
class TravelTheme extends Selection { }
class TravelArea extends Selection { }

class TrainReservation {
    constructor() {
        this.selections = [];
    }

    addSelection(selection) {
        this.selections.push(selection);
    }

    getSelections() {
        const selections = this.selections.map(selection => Object.getPrototypeOf(selection).constructor.name);
        return `${selections.join(", ")} 선택`;
    }
}

class BasicTrain extends TrainReservation { //일반 열차를 예약하기 위해 필요한 항목들
    reserveTrain() {
        this.addSelection(new DepartureStation());
        this.addSelection(new ArrivalStation());
        this.addSelection(new DepartureDate());
        this.addSelection(new DepartureTime());
        this.addSelection(new NumberChoice());
    }
}

class TravelTrain extends TrainReservation { //여행 열차를 예약하기 위해 필요한 항목들
    reserveTrain() {
        this.addSelection(new TravelTheme());
        this.addSelection(new TravelArea());
        this.addSelection(new DepartureDate());
        this.addSelection(new NumberChoice());
    }
}

// const Saemaeul = new BasicTrain();
// const Mugunghwaho = new BasicTrain();
// const EastseaSantaTrain = new TravelTrain();

// Saemaeul.reserveTrain();
// console.log(Saemaeul.getSelections());

// Mugunghwaho.reserveTrain();
// console.log(Mugunghwaho.getSelections());

// EastseaSantaTrain.reserveTrain();
// console.log(EastseaSantaTrain.getSelections());

module.exports = { Selection, DepartureStation, ArrivalStation, DepartureDate, DepartureTime, NumberChoice, 
                    TravelTheme, TravelArea, TrainReservation, BasicTrain, TravelTrain };






