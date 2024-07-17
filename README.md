## 개요
프로젝트의 주제는 온라인 열차 티켓 예매 프로그램으로, 사용자는 일반열차, 여행열차를 선 택하여 예매할 수 있으며 사용자가 예매한 좌석의 등급의 따라 우등석 서비스, 전 좌석 서비스를 나누어 신청할 수 있다. 또한 사용자는 열차 티켓을 예매할 때 신용카드, 토스페이, 가상 계좌, 문화상품권을 결제수단으로 선택할 수 있다.


## 객체 지향 설계
- <strong>Strategy 패턴
    - 예매시 결제수단을 선택 할 수 있도록 설계
    - Creditcard, TossPay, VirtualAccount, Giftcard의 4가지 종류의 결제수단을 선택 가능
- <strong>Factory Method 패턴
    - 열차를 예약하기 위해서는 DepartureStation, DepartureTime, ArrivalStation, NumberCh oice, TravelArea, TravelTheme, DepartureDate 항목들을 선택해야 함
    - 일반열차(Basic Train)와 여행열차(TravelTrain)에 따라서 선택해야하는 항목들이 다름
    - TrainReser vation를 상속한 BasicTrain, TravelTrain들이 컴포지션하는 선택할 항목인 Section 객체들 을 동일한 reserveTrain 메소드에서 생성
- <strong>Decorator 패턴
    - 열차 좌석 선택 및 다양한 추가 서비스를 적용
    - SeatType는 기본 동작을 추상화하며 EconomySeat, FreeSeat, PremiumSeat에서 구체적인 좌석을 정의
    - SeatDecorator는 데코레이터 역할을 수행하며 생성자로 전달된 seatType 객체의 description 메소드를 호출하여 기본 좌석 서비스의 설명을 반환
    - 추가 서비스로는 CateringService와 WheelchairService가 있으며, CateringService는 PremiumSeat에서만 사용 가능


<img width="962" alt="스크린샷 2024-04-21 오후 10 09 05" src="https://github.com/kyn1013/train-ticket-reservation-system/assets/87893678/8df29711-3e9e-4731-b58b-f50bed8d55aa">

