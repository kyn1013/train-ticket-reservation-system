class Payment { //결제 모듈
    constructor() {
        this.payment = null;
    };

    setPayment(payment) {
        this.payment = payment;
    };

    excute() {
        this.payment.excute();
    };
};

class Creditcard extends Payment {
    excute() {
        console.log('신용카드 결제 실행');
    };
};

class TossPay extends Payment {
    excute() {
        console.log('토스페이 결제 실행');
    };
};

class VirtualAccount extends Payment {
    excute() {
        console.log('가상계좌 결제 실행');
    };
};

class Giftcard extends Payment {
    excute() {
        console.log('문화상품권 결제 실행');
    };
};

// const PaymentSystem1 = new Payment();
// PaymentSystem1.setPayment(new Creditcard());
// PaymentSystem1.excute();

// const PaymentSystem2 = new Payment();
// PaymentSystem2.setPayment(new TossPay());
// PaymentSystem2.excute();

// const PaymentSystem3 = new Payment();
// PaymentSystem3.setPayment(new VirtualAccount());
// PaymentSystem3.excute();

// const PaymentSystem4 = new Payment();
// PaymentSystem4.setPayment(new Giftcard());
// PaymentSystem4.excute();

module.exports = { Payment, Creditcard, TossPay, VirtualAccount, Giftcard };




