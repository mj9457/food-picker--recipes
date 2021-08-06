const menus_type = [
   {menuType: "한식"},{menuType: "일식"},{menuType: "중식"},{menuType: "양식"},{menuType: "고기"},{menuType: "패스트푸드"},{menuType: "분식"},{menuType: "치킨"}
];

const kr_menus = [
    {krMenu: "국밥"},{krMenu: "불고기"},{krMenu: "비빔밥"},{krMenu: "제육볶음"},{krMenu: "김치찌개"}
];

const jp_menus = [
    {JpMenu: "초밥"},{JpMenu: "우동"},{JpMenu: "회"},{JpMenu: "모밀"},{JpMenu: "가츠동"}
];

const ch_menus = [
    {ChMenu: "짜장면"},{ChMenu: "짬뽕"},{ChMenu: "탕수육"},{ChMenu: "깐풍기"},{ChMenu: "양장피"}
];

const wt_menus = [
    {WtMenu: "스테이크"},{WtMenu: "파스타"},{WtMenu: "스파게티"},{WtMenu: "리조또"},{WtMenu: "오믈렛"}
];

const rm_menus = [
    {RmMenu: "신라면"},{RmMenu: "안성탕면"},{RmMenu: "스낵면"},{RmMenu: "짜파게티"},{RmMenu: "팔도비빔면"}
];

const meat_menus = [
    {MeatMenu: "삼겹살"},{MeatMenu: "소고기"},{MeatMenu: "항정살"},{MeatMenu: "뒷고기"},{MeatMenu: "오겹살"}
];

const ck_menus = [
    {CkMenu: "후라이드치킨"},{CkMenu: "양념치킨"},{CkMenu:"반반"},{CkMenu:"통닭구이"},
    {CkMenu:"간장치킨"},{CkMenu:"파닭"},{CkMenu:"닭강정"},{CkMenu:"허니콤보"},{CkMenu:"레드콤보"},{CkMenu:"마늘치킨"},
    {CkMenu:"황금올리브"},{CkMenu:"자메이카"},{CkMenu:"뿌링클"},{CkMenu:"맛초킹"},{CkMenu:"골드킹"},
    {CkMenu:"고추마요"},{CkMenu:"블랙알리오"},{CkMenu:"양념구이"},{CkMenu:"소금구이"},{CkMenu:"슈크림양념"}
];

const jf_menus = [
    {JfMenu: "피자"},{JfMenu: "햄버거"},{JfMenu: "샌드위치"},{JfMenu: "핫바"},{JfMenu: "핫도그"}
];

const drinks = [
    {drink:"아메리카노"},{drink:"카페라떼"},{drink:"바닐라라떼"},{drink:"카페모카"},{drink:"카라멜마키아또"},{drink:"연유라떼"},{drink:"콜드브루"},{drink:"흑당라떼"},
    {drink:"식혜"},{drink:"초코음료"},{drink:"과일음료"},{drink:"밀크티"},{drink:"아이스티"},{drink:"에이드"},{drink:"얼그레이티"},{drink:"과일차"},{drink:"미숫가루"},
    {drink:"스무디"},{drink:"버블티"}
];

const desserts = [
    {dessert: "아이스크림"},{dessert: "초콜릿"},{dessert: "사탕"},{dessert: "젤리"},{dessert:"크로플"},{dessert:"와플"},{dessert:"빙수"}
];

const menuType = document.querySelector(".random_eat span:nth-child(1)");
const krMenu = document.querySelector(".random_eat span:nth-child(2)");
const JpMenu = document.querySelector(".random_eat span:nth-child(3)");
const ChMenu = document.querySelector(".random_eat span:nth-child(4)");
const WtMenu = document.querySelector(".random_eat span:nth-child(5)");
const RmMenu = document.querySelector(".random_eat span:nth-child(6)");
const MeatMenu = document.querySelector(".random_eat span:nth-child(7)");
const CkMenu = document.querySelector(".random_eat span:nth-child(8)");
const JfMenu = document.querySelector(".random_eat span:nth-child(9)");
const drink = document.querySelector(".random_eat span:nth-child(10)");
const dessert= document.querySelector(".random_eat span:nth-child(11)");

const todaysMenus = menus_type[Math.floor(Math.random() * menus_type.length)];
const todaysKrMenus = kr_menus[Math.floor(Math.random() * kr_menus.length)];
const todaysJpMenus = jp_menus[Math.floor(Math.random() * jp_menus.length)];
const todaysChMenus = ch_menus[Math.floor(Math.random() * ch_menus.length)];
const todaysWtMenus = wt_menus[Math.floor(Math.random() * wt_menus.length)];
const todaysRmMenus = rm_menus[Math.floor(Math.random() * rm_menus.length)];
const todaysMeatMenus = meat_menus[Math.floor(Math.random() * meat_menus.length)];
const todaysCkMenus = ck_menus[Math.floor(Math.random() * ck_menus.length)];
const todaysJfMenus = jf_menus[Math.floor(Math.random() * jf_menus.length)];
const todaysDrinks = drinks[Math.floor(Math.random() * drinks.length)];
const todaysDesserts = desserts[Math.floor(Math.random() * desserts.length)];

menuType.innerText = `오늘의 메뉴 : ${todaysMenus.menuType}
`;
krMenu.innerText = `오늘의 한식 : ${todaysKrMenus.krMenu}
`;
JpMenu.innerText = `오늘의 일식 : ${todaysJpMenus.JpMenu}
`;
ChMenu.innerText = `오늘의 중식 : ${todaysChMenus.ChMenu}
`;
WtMenu.innerText = `오늘의 양식 : ${todaysWtMenus.WtMenu}
`;
RmMenu.innerText = `오늘의 라면 : ${todaysRmMenus.RmMenu}
`;
MeatMenu.innerText = `오늘의 고기 : ${todaysMeatMenus.MeatMenu}
`;
CkMenu.innerText = `오늘의 치킨 : ${todaysCkMenus.CkMenu}
`;
JfMenu.innerText = `오늘의 패스트푸드 : ${todaysJfMenus.JfMenu}
`;
drink.innerText = `오늘의 음료 : ${todaysDrinks.drink}
`;
dessert.innerText = `오늘의 디저트 : ${todaysDesserts.dessert}
`;




