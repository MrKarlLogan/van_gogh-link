const cardContainer = document.querySelector(".products__items");
const navigation = document.querySelector(".header__nav");
const burgerBtn = document.querySelector(".header__burger-btn");

const burgerMenu = () => {
  navigation.classList.toggle("active-burger");

  burgerBtn.querySelector(".header__burger-btn-icon").src =
    navigation.classList.contains("active-burger")
      ? "./styles/assets/burger open.svg"
      : "./styles/assets/burger close.svg";
};

const closeBurgerMenu = () => {
  navigation.classList.remove("active-burger");
  burgerBtn.querySelector(".header__burger-btn-icon").src =
    "./styles/assets/burger close.svg";
};

burgerBtn.addEventListener("click", burgerMenu);

const linksNav = navigation.querySelectorAll(".header__nav-link");
linksNav.forEach((nav) => nav.addEventListener("click", closeBurgerMenu));

const mockProducts = [
  {
    title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
    img: "./styles/assets/9X21F.png",
    status: "В наличии",
    quantity: 50,
  },
  {
    title: "Плоский тяговый ремень для лифта GRS AAA717X1 (12 кордов)",
    img: "./styles/assets/AAA717X1.png",
    status: "Под заказ",
    quantity: 0,
  },
  {
    title: "Стальной канат для лифта GRS 8X19S-NFC 1570",
    img: "./styles/assets/8X19S.png",
    status: "В наличии",
    quantity: 50,
  },
  {
    title: "Стальной канат для лифта GRS 9X21F(9Х17)-IWRC 1570",
    img: "./styles/assets/9X21F.png",
    status: "В наличии",
    quantity: 50,
  },
  {
    title: "Стальной канат для лифта GRS 8X19W-CWC 1570",
    img: "./styles/assets/8X19W.png",
    status: "В наличии",
    quantity: 50,
  },
  {
    title: "Купить плоский тяговый ремень для лифта GRS AAA717AJ1(8 кордов)",
    img: "./styles/assets/AAA717AJ1.png",
    status: "В наличии",
    quantity: 50,
  },
];

const createCard = (productData) => {
  const template = document.getElementById("template__card").content;
  const card = template.cloneNode(true);
  const title = card.querySelector(".card__title");
  const img = card.querySelector(".card__image");
  const status = card.querySelector(".card__status");
  const statusImg = status.querySelector(".card__status-icon");
  const statusText = status.querySelector(".card__status-text");

  title.textContent = productData.title;
  img.src = productData.img;
  img.alt = productData.title;
  statusText.textContent =
    productData.status === "В наличии"
      ? `${productData.status} ${productData.quantity} м.`
      : productData.status;
  statusImg.src =
    productData.status === "В наличии"
      ? "./styles/assets/In stock.svg"
      : "./styles/assets/Not available.svg";
  statusImg.alt = productData.status;

  return card;
};

const renderProduct = () => {
  let productArray;

  cardContainer.innerHTML = "";

  if (window.innerWidth <= 576) productArray = mockProducts.slice(0, 4);
  else productArray = mockProducts;

  productArray.forEach((product) => {
    const card = createCard(product);
    cardContainer.append(card);
  });
};

renderProduct();

window.addEventListener("resize", () => {
  renderProduct();
});
