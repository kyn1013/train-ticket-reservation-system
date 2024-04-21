const { Payment, Creditcard, TossPay, VirtualAccount, Giftcard } = require('./Payment.js');
const { Selection, DepartureStation, ArrivalStation, DepartureDate, DepartureTime, NumberChoice, 
    TravelTheme, TravelArea, TrainReservation, BasicTrain, TravelTrain } = require('./TrainReservation.js');
const { SeatType, EconomySeat, FreeSeat, PremiumSeat, SeatDecorator, CateringService, WheelchairService } 
    = require('./ServiceSet.js');

const ITX = new BasicTrain();
const KTX = new BasicTrain();
const Saemaeul = new BasicTrain();
const Mugunghwaho = new BasicTrain();
const EastseaSantaTrain = new TravelTrain();
const WestGoldTrain = new TravelTrain();
const ValleyTrain = new TravelTrain();
const ArirangTrain = new TravelTrain();

const PaymentSystem = new Payment();

console.log("<User1 예약 시작>");
const User1 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("일반기차를 선택했습니다.")
    KTX.reserveTrain();
    console.log(KTX.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    try {
        const user1 = new WheelchairService(new CateringService(new FreeSeat()));
        user1.description();
    } catch (error) {
        console.error(error.message); // CateringService는 PremiumSeat에만 추가할 수 있습니다.
    }

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new Creditcard());
    PaymentSystem.excute();

})();

console.log("\n");

console.log("<User2 예약 시작>");
const User2 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("여행기차를 선택했습니다.")
    ValleyTrain.reserveTrain();
    console.log(ValleyTrain.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user2 = new WheelchairService(new CateringService(new PremiumSeat()));
    user2.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new TossPay());
    PaymentSystem.excute();

})();

console.log("\n");

console.log("<User3 예약 시작>");
const User3 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("여행기차를 선택했습니다.")
    WestGoldTrain.reserveTrain();
    console.log(ValleyTrain.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user3 = new WheelchairService(new CateringService(new PremiumSeat()));
    user3.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new VirtualAccount());
    PaymentSystem.excute();

})();

console.log("\n");

// ... user4

console.log("<User4 예약 시작>");
const User4 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("일반기차를 선택했습니다.")
    Saemaeul.reserveTrain();
    console.log(Saemaeul.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user4 = new WheelchairService(new EconomySeat());
    user4.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new Giftcard());
    PaymentSystem.excute();

})();

console.log("\n");

// ... user5

console.log("<User5 예약 시작>");
const User5 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("여행기차를 선택했습니다.")
    ArirangTrain.reserveTrain();
    console.log(ArirangTrain.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user5 = new EconomySeat();
    user5.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new Creditcard());
    PaymentSystem.excute();

})();

console.log("\n");

// ... user6

console.log("<User6 예약 시작>");
const User6 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("여행기차를 선택했습니다.")
    EastseaSantaTrain.reserveTrain();
    console.log(EastseaSantaTrain.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user6 = new CateringService(new PremiumSeat());
    user6.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new TossPay());
    PaymentSystem.excute();

})();

console.log("\n");

// ... user7

console.log("<User7 예약 시작>");
const User7 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("일반기차를 선택했습니다.")
    Mugunghwaho.reserveTrain();
    console.log(Mugunghwaho.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user7 = new PremiumSeat();
    user7.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new VirtualAccount());
    PaymentSystem.excute();

})();

console.log("\n");

// ... user8

console.log("<User8 예약 시작>");
const User8 = (function () {
    console.log("---예약할 기차 유형 선택---");
    console.log("일반기차를 선택했습니다.")
    ITX.reserveTrain();
    console.log(ITX.getSelections());

    console.log("---기차 좌석 서비스 선택---")
    const user8 = new WheelchairService(new CateringService(new PremiumSeat()));
    user8.description();

    console.log("---결제수단 선택---")
    PaymentSystem.setPayment(new TossPay());
    PaymentSystem.excute();

})();






