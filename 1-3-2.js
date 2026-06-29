const saleList = { regular: 10, extended: 15, premium: 20, vip: 30 };

let accountStatus = 'vip';
let username = 'vova';
let saleStatus = saleList[accountStatus] ? accountStatus : 'regular';
let cashbackPercentage = saleList[saleStatus];

console.log(
  `${username} | ${saleStatus} аккаунт\nВы получаете ${cashbackPercentage} % с покупок на бонусный счёт`
);
