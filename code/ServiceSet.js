class SeatType { // Component
    description() {}
}

class EconomySeat extends SeatType { // ConcreteComponent
    description() {
        console.log("입석 선택");
    }
}

class FreeSeat extends SeatType {
    description() {
        console.log("자유석 선택");
    }
}

class PremiumSeat extends SeatType {
    description() {
        console.log("우등석 선택");
    }
}

class SeatDecorator extends SeatType { // Decorator
    constructor(seatType) {
        super();
        this.seatType = seatType;
    }

    description() {
        this.seatType.description();
    }
}

// ConcreteDecorators
// 케이터링 서비스: 음식 및 음료 서비스를 받을 수 있다. -> 우등석 서비스만
class CateringService extends SeatDecorator {
    constructor(seatType) {
        if (!(seatType instanceof PremiumSeat)) {
            throw new Error("CateringService는 PremiumSeat에만 추가할 수 있습니다.");
        }
        super(seatType);
    }

    description() {
        super.description();
        console.log("Catering Service 추가");
    }
}

// 휠체어 서비스: 휠체어 손님은 열차를 타고 내릴 때 서비스를 받을 수 있다. -> 전 좌석 서비스
class WheelchairService extends SeatDecorator {
    constructor(seatType) {
        super(seatType);
    }

    description() {
        super.description();
        console.log("Wheelchair Service 추가");
    }
}

// Usage

// console.log("-user1-");
// const user1 = new WheelchairService(new CateringService(new PremiumSeat()));
// user1.description();

// console.log("-user2-");
// const user2 = new EconomySeat();
// user2.description();

// console.log("-user3-");
// try {
//     const user3 = new CateringService(new FreeSeat());
//     user3.description();
// } catch (error) {
//     console.error(error.message); // CateringService는 PremiumSeat에만 추가할 수 있습니다.
// }

module.exports = { SeatType, EconomySeat, FreeSeat, PremiumSeat, SeatDecorator, CateringService, WheelchairService };



