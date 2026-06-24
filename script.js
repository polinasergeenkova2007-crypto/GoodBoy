const scenes = [
  {
    id: 1,
    title: "Главная",
    image: "./assets/scenes/desktop-1.png",
    mobileImage: "./assets/scenes/mobile-1.png",
    mobileSize: { width: 853, height: 1844 },
    tabletImage: "./assets/scenes/tablet-1.png",
    tabletSize: { width: 1501, height: 1048 },
    hotspots: [
      {
        x: 14,
        y: 61,
        width: 250,
        height: 230,
        rotate: -6,
        target: 5,
        label: "Перейти от мороженого к пятой сцене",
      },
      {
        x: 76,
        y: 72,
        width: 270,
        height: 260,
        rotate: 9,
        target: 3,
        label: "Перейти от девушки с собачкой к третьей сцене",
      },
      {
        x: 90,
        y: 61,
        width: 300,
        height: 210,
        rotate: -4,
        target: 2,
        label: "Перейти от витрины с десертами ко второй сцене",
      },
      {
        x: 90,
        y: 18,
        width: 300,
        height: 210,
        rotate: 3,
        target: 4,
        label: "Перейти от собачки с шариками к четвертой сцене",
      },
    ],
    mobileHotspots: [
      {
        x: 16,
        y: 58,
        width: 170,
        height: 190,
        rotate: -6,
        target: 5,
        label: "Перейти от мороженого к пятой сцене",
      },
      {
        x: 76,
        y: 68,
        width: 190,
        height: 260,
        rotate: 7,
        target: 3,
        label: "Перейти от девушки с собачкой к третьей сцене",
      },
      {
        x: 88,
        y: 57,
        width: 170,
        height: 230,
        rotate: -5,
        target: 2,
        label: "Перейти от витрины с десертами ко второй сцене",
      },
      {
        x: 78,
        y: 36,
        width: 190,
        height: 190,
        rotate: 3,
        target: 4,
        label: "Перейти от собачки с шариками к четвертой сцене",
      },
    ],
    tabletHotspots: [
      {
        x: 12,
        y: 58,
        width: 250,
        height: 230,
        rotate: -6,
        target: 5,
        label: "Перейти от мороженого к пятой сцене",
      },
      {
        x: 75,
        y: 68,
        width: 280,
        height: 300,
        rotate: 8,
        target: 3,
        label: "Перейти от девушки с собачкой к третьей сцене",
      },
      {
        x: 89,
        y: 58,
        width: 260,
        height: 260,
        rotate: -5,
        target: 2,
        label: "Перейти от витрины с десертами ко второй сцене",
      },
      {
        x: 84,
        y: 21,
        width: 300,
        height: 220,
        rotate: 3,
        target: 4,
        label: "Перейти от собачки с шариками к четвертой сцене",
      },
    ],
  },
  {
    id: 2,
    title: "Витрина",
    text: "Сцена открывается через подсвеченную витрину с десертами на главной иллюстрации.",
    image: "./assets/scenes/desktop-2.png",
    mobileImage: "./assets/scenes/mobile-2.png",
    mobileSize: { width: 853, height: 1844 },
    tabletImage: "./assets/scenes/tablet-2.png",
    tabletSize: { width: 1448, height: 1086 },
    hotspots: [
      {
        x: 50,
        y: 55,
        width: 220,
        height: 180,
        target: 1,
        label: "Вернуться на главную",
      },
    ],
    actions: [
      { x: 816, y: 585, label: "Меню", action: "menu" },
      { x: 1266, y: 598, label: "Напитки", action: "drinks" },
    ],
    mobileActions: [
      { x: 430, y: 820, label: "Меню", action: "menu" },
      { x: 716, y: 1024, label: "Напитки", action: "drinks" },
    ],
    tabletActions: [
      { x: 720, y: 585, label: "Меню", action: "menu" },
      { x: 1225, y: 548, label: "Напитки", action: "drinks" },
    ],
  },
  {
    id: 3,
    title: "Девушка с собачкой",
    text: "Сцена открывается через девушку с собачкой за столиком.",
    image: "./assets/scenes/desktop-3.png",
    mobileImage: "./assets/scenes/mobile-3.png",
    mobileSize: { width: 852, height: 1846 },
    tabletImage: "./assets/scenes/tablet-3.png",
    tabletSize: { width: 1448, height: 1086 },
    hotspots: [
      {
        x: 50,
        y: 55,
        width: 220,
        height: 180,
        target: 1,
        label: "Вернуться на главную",
      },
    ],
  },
  {
    id: 4,
    title: "Собачка с шариками",
    text: "Сцена открывается через верхний этаж с собачкой и шариками.",
    image: "./assets/scenes/desktop-4.png",
    mobileImage: "./assets/scenes/mobile-4.png",
    mobileSize: { width: 941, height: 1672 },
    tabletImage: "./assets/scenes/tablet-4.png",
    tabletSize: { width: 1450, height: 1085 },
    hotspots: [
      {
        x: 50,
        y: 55,
        width: 220,
        height: 180,
        target: 1,
        label: "Вернуться на главную",
      },
    ],
    actions: [
      { x: 716, y: 654, label: "Открыть праздничное окно", action: "birthday" },
      { x: 1042, y: 612, label: "Лапки", action: "celebration" },
    ],
    mobileActions: [
      { x: 485, y: 920, label: "Открыть праздничное окно", action: "birthday" },
      { x: 720, y: 1148, label: "Лапки", action: "celebration" },
    ],
    tabletActions: [
      { x: 730, y: 716, label: "Открыть праздничное окно", action: "birthday" },
      { x: 270, y: 848, label: "Лапки", action: "celebration" },
    ],
  },
  {
    id: 5,
    title: "Мороженое",
    text: "Сцена открывается через мороженщика и тележку с мороженым.",
    image: "./assets/scenes/desktop-5.png",
    mobileImage: "./assets/scenes/mobile-5.png",
    mobileSize: { width: 853, height: 1844 },
    tabletImage: "./assets/scenes/tablet-5.png",
    tabletSize: { width: 1448, height: 1086 },
    hotspots: [
      {
        x: 50,
        y: 55,
        width: 220,
        height: 180,
        target: 1,
        label: "Вернуться на главную",
      },
    ],
    actions: [{ x: 808, y: 594, label: "Мороженое", action: "icecream" }],
    mobileActions: [{ x: 435, y: 680, label: "Мороженое", action: "icecream" }],
    tabletActions: [{ x: 815, y: 592, label: "Мороженое", action: "icecream" }],
  },
];

const stage = document.querySelector(".stage");
const currentImage = document.querySelector(".scene-current");
const nextImage = document.querySelector(".scene-next");
const hotspotsLayer = document.querySelector(".hotspots");
const actionsLayer = document.querySelector(".scene-actions");
const homeButton = document.querySelector(".home-button");
const menuPanel = document.querySelector(".menu-panel");
const menuClose = document.querySelector(".menu-close");
const menuKicker = document.querySelector(".menu-heading .scene-kicker");
const menuTabs = document.querySelector(".menu-tabs");
const catalogTrack = document.querySelector(".catalog-track");
const storyPanel = document.querySelector(".story-panel");
const storyClose = document.querySelector(".story-close");
const cakeBuilder = document.querySelector(".cake-builder");
const ambientLayer = document.querySelector(".ambient-layer");
const cakeGameLayer = document.querySelector(".cake-game-layer");
const cakeGameUiLayer = document.querySelector(".cake-game-ui-layer");
const coverSvg = document.querySelector(".scene-cover-svg");
const coverImage = document.querySelector(".scene-cover-image");
const maskFill = document.querySelector(".mask-fill");
const maskHole = document.querySelector(".mask-hole");
const maskFeather = document.querySelector(".mask-feather");

let activeScene = getSceneFromPath();
let locked = false;
let revealFrame = 0;
let parallaxFrame = 0;
const parallax = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
};
const desktopArtboard = {
  width: 1440,
  height: 1024,
};
const mobileMedia = window.matchMedia("(max-width: 700px)");
const tabletMedia = window.matchMedia(
  "(min-width: 701px) and (max-width: 1180px)",
);
let viewportMode = getViewportMode();
const cakeGameAssets = "./assets/cake-game";
const cakeGameFramePath = `${cakeGameAssets}/frames`;
const cakeGameSteps = [
  {
    id: "flour",
    title: "Добавьте муку",
    x: 1012,
    y: 732,
    width: 70,
    height: 70,
    hint: "муку",
  },
  {
    id: "eggs",
    title: "Разбейте яйца",
    x: 1126,
    y: 806,
    width: 70,
    height: 70,
    hint: "яйца",
  },
  {
    id: "yogurt",
    title: "Влейте йогуртовую основу",
    x: 316,
    y: 700,
    width: 70,
    height: 70,
    hint: "йогуртовую основу",
  },
  {
    id: "banana",
    title: "Добавьте банан",
    x: 424,
    y: 792,
    width: 70,
    height: 70,
    hint: "банан",
  },
  {
    id: "berries",
    title: "Добавьте ягоды",
    x: 1156,
    y: 704,
    width: 70,
    height: 70,
    hint: "ягоды",
  },
  {
    id: "whisk",
    title: "Перемешайте тесто",
    x: 220,
    y: 760,
    width: 70,
    height: 70,
    hint: "венчик",
    tool: true,
  },
];
const cakeGameAnimations = {
  flour: {
    frames: ["flour-pour-1.png", "flour-pour-2.png", "flour-pour-3.png"],
    bowlImage: "bowl-flour-final.png",
    duration: 1050,
    width: 255,
    height: 150,
    x: 650,
    y: 564,
  },
  eggs: {
    frames: [
      "egg-crack-1.png",
      "egg-crack-2.png",
      "egg-yolk-fall-1.png",
      "egg-yolk-fall-2.png",
    ],
    bowlImage: "bowl-eggs-final.png",
    duration: 1100,
    width: 210,
    height: 250,
    x: 718,
    y: 544,
  },
  yogurt: {
    frames: [
      "yogurt-pour-1.png",
      "yogurt-pour-2.png",
      "yogurt-pour-3.png",
      "yogurt-pour-4.png",
    ],
    bowlImage: "bowl-yogurt-final.png",
    duration: 980,
    width: 210,
    height: 205,
    x: 718,
    y: 592,
  },
  banana: {
    frames: ["banana-fall-1.png", "banana-fall-2.png", "banana-fall-3.png"],
    bowlImage: "bowl-banana-final.png",
    duration: 940,
    width: 175,
    height: 120,
    x: 719,
    y: 594,
  },
  berries: {
    frames: ["berries-fall-1.png", "berries-fall-2.png", "berries-fall-3.png"],
    bowlImage: "bowl-berries-final.png",
    duration: 940,
    width: 175,
    height: 165,
    x: 719,
    y: 542,
  },
  whisk: {
    bowlImage: "whisk-10.png",
    duration: 1300,
  },
};
const cakeGameResponsive = {
  desktop: {
    bowl: {
      x: 724,
      y: 688,
      width: 300,
      height: 214,
      whiskedY: 640,
      whiskedWidth: 300,
      whiskedHeight: 370,
      finishedWidth: 360,
      finishedHeight: 300,
    },
    hint: { x: 845, y: 645 },
    steps: {},
    animations: {},
  },
  tablet: {
    bowl: {
      x: 724,
      y: 790,
      width: 260,
      height: 186,
      whiskedY: 744,
      whiskedWidth: 260,
      whiskedHeight: 320,
      finishedWidth: 320,
      finishedHeight: 266,
    },
    hint: { x: 820, y: 698 },
    steps: {
      yogurt: { x: 305, y: 722, width: 62, height: 62 },
      banana: { x: 425, y: 860, width: 62, height: 62 },
      whisk: { x: 210, y: 880, width: 62, height: 62 },
      flour: { x: 1002, y: 818, width: 62, height: 62 },
      eggs: { x: 1118, y: 918, width: 62, height: 62 },
      berries: { x: 1168, y: 796, width: 62, height: 62 },
    },
    animations: {
      flour: { x: 724, y: 666, width: 220, height: 130 },
      eggs: { x: 724, y: 636, width: 184, height: 220 },
      yogurt: { x: 724, y: 686, width: 184, height: 180 },
      banana: { x: 724, y: 690, width: 158, height: 110 },
      berries: { x: 724, y: 650, width: 158, height: 150 },
    },
  },
  mobile: {
    bowl: {
      x: 426,
      y: 1170,
      width: 214,
      height: 153,
      whiskedY: 1104,
      whiskedWidth: 214,
      whiskedHeight: 264,
      finishedWidth: 258,
      finishedHeight: 214,
    },
    hint: { x: 520, y: 1064 },
    steps: {
      yogurt: { x: 168, y: 1260, width: 54, height: 54 },
      banana: { x: 235, y: 1365, width: 54, height: 54 },
      whisk: { x: 100, y: 1505, width: 54, height: 54 },
      flour: { x: 565, y: 1155, width: 54, height: 54 },
      eggs: { x: 655, y: 1295, width: 54, height: 54 },
      berries: { x: 785, y: 1245, width: 54, height: 54 },
    },
    animations: {
      flour: { x: 426, y: 1088, width: 210, height: 124 },
      eggs: { x: 426, y: 1096, width: 182, height: 216 },
      yogurt: { x: 426, y: 1107, width: 182, height: 178 },
      banana: { x: 426, y: 1129, width: 152, height: 104 },
      berries: { x: 426, y: 1098, width: 152, height: 144 },
    },
  },
};
let cakeGameState = createCakeGameState();
const foodSectionIds = ["human", "pet", "special"];
const drinkSectionIds = ["drinks"];
const iceCreamSectionIds = ["icecream"];
const cakeSteps = [
  {
    title: "Выберите вкус",
    copy: "Все десерты готовятся из ингредиентов, безопасных для собак и подходящих для ежедневного рациона.",
    key: "flavor",
    options: [
      { title: "арахисовая паста и банан", visual: "flavor-peanut" },
      { title: "тыква и йогуртовый крем", visual: "flavor-pumpkin" },
      { title: "яблоко и овсяная основа", visual: "flavor-apple" },
      { title: "морковь и творожный крем", visual: "flavor-carrot" },
      { title: "курица и мягкий сыр", visual: "flavor-chicken" },
    ],
  },
  {
    title: "Выберите ярусы",
    copy: "Выберите формат праздничного оформления.",
    key: "shape",
    options: [
      { title: "1 ярус", visual: "shape-one" },
      { title: "2 яруса", visual: "shape-two", disabled: true },
      { title: "3 яруса", visual: "shape-tall", disabled: true },
    ],
  },
];
const celebrationSteps = [
  {
    title: "Какой праздник вы планируете?",
    copy: "Выберите формат праздника, а мы подготовим пространство под ваш сценарий.",
    key: "format",
    options: [
      {
        title: "Mini Celebration",
        copy: "небольшой праздник для хозяина и питомца",
        image: "./assets/celebration/format-mini.png",
      },
      {
        title: "Friends Party",
        copy: "несколько друзей и питомцев",
        image: "./assets/celebration/format-friends.png",
      },
      {
        title: "Big Birthday Event",
        copy: "большая праздничная встреча",
        image: "./assets/celebration/format-big.png",
      },
    ],
  },
  {
    title: "Выберите атмосферу праздника",
    copy: "Мы оформим пространство в соответствии с выбранным настроением.",
    key: "atmosphere",
    options: [
      {
        title: "Classic",
        copy: "аккуратный минималистичный декор",
        image: "./assets/celebration/style-classic.png",
      },
      {
        title: "Soft Celebration",
        copy: "спокойное эстетичное оформление",
        image: "./assets/celebration/style-soft.png",
      },
      {
        title: "Party Edition",
        copy: "больше декора и праздничных деталей",
        image: "./assets/celebration/style-party.png",
      },
    ],
  },
  {
    title: "Добавьте особенные детали",
    copy: "Персонализируйте праздник с помощью дополнительных элементов.",
    key: "details",
    multiple: true,
    options: [
      {
        title: "Праздничные колпаки",
        image: "./assets/celebration/detail-hat.png",
      },
      {
        title: "Подарочная коробка с лакомствами",
        image: "./assets/celebration/detail-gift.png",
      },
      {
        title: "Свечи для торта",
        image: "./assets/celebration/detail-candle.png",
      },
      {
        title: "Аксессуары для фото",
        image: "./assets/celebration/detail-camera.png",
      },
      {
        title: "Праздничная бандана",
        image: "./assets/celebration/detail-bandana.png",
      },
      {
        title: "Персональная открытка",
        image: "./assets/celebration/detail-card.png",
      },
    ],
  },
  {
    title: "Что будет на праздничном столе?",
    copy: "Мы подготовим десерты для всех участников праздника.",
    key: "table",
    options: [
      {
        title: "Только угощения для питомцев",
        image: "./assets/celebration/table-pets.png",
      },
      {
        title: "Десерты для питомцев и гостей",
        image: "./assets/celebration/table-shared.png",
      },
      {
        title: "Полный праздничный сет",
        image: "./assets/celebration/table-full.png",
      },
    ],
  },
  {
    title: "Выберите дату праздника",
    copy: "Отметьте удобный день, и мы подготовим пространство к вашему событию.",
    key: "date",
    type: "date",
  },
];
const menuSections = [
  {
    id: "human",
    label: "Human",
    title: "Human menu",
    items: [
      {
        name: "Blueberry tart",
        description: "Песочная основа, ванильный крем, черничный конфитюр",
        price: 490,
        image: "./assets/menu/generated/blueberry-tart.png",
      },
      {
        name: "Tiramisu",
        description: "Кофейный бисквит, сливочный маскарпоне, какао",
        price: 470,
        image: "./assets/menu/generated/tiramisu.png",
      },
      {
        name: "Pistachio choux",
        description: "Заварное тесто, фисташковый крем, хрустящий кракелин",
        price: 480,
        image: "./assets/menu/generated/pistachio-choux.png",
      },
      {
        name: "Matcha roll",
        description: "Бисквит матча, сливочный крем, малиновая начинка",
        price: 460,
        image: "./assets/menu/generated/matcha-roll.png",
      },
    ],
  },
  {
    id: "pet",
    label: "Pet",
    title: "Pet menu",
    items: [
      {
        name: "Chicken soufflé",
        description: "Куриное филе, яйцо, рисовая мука",
        price: 250,
        image: "./assets/menu/generated/chicken-souffle.png",
      },
      {
        name: "Pumpkin cookie",
        description: "Овсяная мука, тыква, морковь",
        price: 230,
        image: "./assets/menu/generated/pumpkin-cookie.png",
      },
      {
        name: "Apple chips",
        description: "Яблоко, бережная сушка",
        price: 220,
        image: "./assets/menu/generated/apple-chips.png",
      },
      {
        name: "Cheese bites",
        description: "Сыр нежирный, рисовая мука",
        price: 240,
        image: "./assets/menu/generated/cheese-bites.png",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    title: "Drinks",
    items: [
      {
        name: "Flat White",
        description: "Human drink",
        price: 350,
        image: "./assets/menu/generated/flat-white.png",
      },
      {
        name: "Iced Latte",
        description: "Human drink",
        price: 380,
        image: "./assets/menu/generated/iced-latte.png",
      },
      {
        name: "Peach Tea",
        description: "Human drink",
        price: 360,
        image: "./assets/menu/generated/peach-tea.png",
      },
      {
        name: "Citrus Sparkling",
        description: "Human drink",
        price: 380,
        image: "./assets/menu/generated/citrus-sparkling.png",
      },
      {
        name: "Bone Broth Light",
        description: "Pet drink",
        price: 220,
        image: "./assets/menu/generated/bone-broth-light.png",
      },
      {
        name: "Apple Water",
        description: "Pet drink",
        price: 200,
        image: "./assets/menu/generated/apple-water.png",
      },
      {
        name: "Chicken Tea",
        description: "Pet drink",
        price: 220,
        image: "./assets/menu/generated/chicken-tea.png",
      },
    ],
  },
  {
    id: "icecream",
    label: "Ice cream",
    title: "Ice cream",
    items: [
      {
        name: "Vanilla cloud",
        description: "Ванильное мороженое в вафельном рожке",
        price: 320,
        image: "./assets/menu/generated/vanilla-cloud.png",
      },
      {
        name: "Strawberry gelato",
        description: "Клубничное gelato с ягодными кусочками",
        price: 340,
        image: "./assets/menu/generated/strawberry-gelato.png",
      },
      {
        name: "Pistachio scoop",
        description: "Фисташковый пломбир с ореховой крошкой",
        price: 360,
        image: "./assets/menu/generated/pistachio-ice-cream.png",
      },
      {
        name: "Blueberry sorbet",
        description: "Черничный сорбет в вафельной чашечке",
        price: 350,
        image: "./assets/menu/generated/blueberry-sorbet.png",
      },
    ],
  },
  {
    id: "special",
    label: "Special",
    title: "Shared moments",
    items: [
      {
        name: "Citrus harmony",
        description: "Лимонный тарт и лимонное печенье с тыквой",
        price: 620,
        image: "./assets/menu/generated/citrus-harmony.png",
      },
      {
        name: "Berry bloom",
        description: "Ягодная павлова и ягодное печенье со свёклой",
        price: 680,
        image: "./assets/menu/generated/berry-bloom.png",
      },
      {
        name: "Cocoa & banana",
        description: "Шоколадный брауни и какао-печенье с бананом",
        price: 650,
        image: "./assets/menu/generated/cocoa-banana.png",
      },
      {
        name: "Tropical escape",
        description: "Кокосовый мусс и манговое печенье с кокосом",
        price: 670,
        image: "./assets/menu/generated/tropical-escape.png",
      },
    ],
  },
];
let activeMenuSection = menuSections[0].id;
let activeMenuMode = "food";
let storyMode = "cake";
let cakeBuilderStep = 0;
let cakeBuilderChoices = {};
let celebrationStep = 0;
let celebrationChoices = {};

preloadScenes();
renderAmbient(activeScene);
renderCakeGame(activeScene);
renderScene(activeScene, { immediate: true });
updateSceneMetrics();
startParallax();
renderMenuCatalog();
renderCakeBuilder();

homeButton.addEventListener("click", () => navigateTo(1, { x: 10, y: 5 }));
menuClose.addEventListener("click", closeMenu);
storyClose.addEventListener("click", closeStory);
window.addEventListener("hashchange", () =>
  navigateTo(getSceneFromPath(), { replace: true }),
);
stage.addEventListener("pointermove", handlePointerMove);
stage.addEventListener("pointerleave", resetParallax);
window.addEventListener("resize", handleResize);

function preloadScenes() {
  scenes.forEach((scene) => {
    [scene.image, scene.mobileImage, scene.tabletImage]
      .filter(Boolean)
      .forEach((src) => {
        const image = new Image();
        image.src = src;
      });
  });
}

function isMobileView() {
  return mobileMedia.matches;
}

function isTabletView() {
  return tabletMedia.matches;
}

function getViewportMode() {
  if (isMobileView()) return "mobile";
  if (isTabletView()) return "tablet";
  return "desktop";
}

function getSceneImage(scene) {
  if (isMobileView() && scene.mobileImage) return scene.mobileImage;
  if (isTabletView() && scene.tabletImage) return scene.tabletImage;
  return scene.image;
}

function getSceneArtboard(scene = getScene(activeScene)) {
  if (isMobileView() && scene.mobileSize) {
    return scene.mobileSize;
  }

  if (isTabletView() && scene.tabletSize) {
    return scene.tabletSize;
  }

  return desktopArtboard;
}

function getSceneFromPath() {
  const match = window.location.hash.match(/scene-(\d+)/);
  const id = match ? Number(match[1]) : 1;
  return scenes.some((scene) => scene.id === id) ? id : 1;
}

function getScene(id) {
  return scenes.find((scene) => scene.id === id) || scenes[0];
}

function navigateTo(id, options = {}) {
  if (locked || id === activeScene) return;

  const target = getScene(id);
  const url = id === 1 ? "#" : `#scene-${id}`;
  const transitionMs = 1500;
  closeMenu();
  closeStory();

  if (!options.replace) {
    window.history.pushState({ id }, "", url);
  }

  locked = true;
  activeScene = id;
  stage.dataset.scene = String(id);
  if (id !== 3) {
    renderCakeGame(id);
  }
  const targetImage = getSceneImage(target);
  prepareRevealLayer(targetImage);
  stage.style.setProperty("--x", "50%");
  stage.style.setProperty("--y", "50%");
  stage.style.setProperty("--edge-rotate", `${(options.rotate ?? 0) - 8}deg`);
  stage.style.setProperty(
    "--edge-x",
    `${1 + ((options.width ?? 220) % 37) / 140}`,
  );
  stage.style.setProperty(
    "--edge-y",
    `${0.88 + ((options.height ?? 180) % 29) / 180}`,
  );
  stage.style.setProperty("--reveal", "1px");
  stage.style.setProperty("--reveal-rx", "0px");
  stage.style.setProperty("--reveal-ry", "0px");
  nextImage.src = targetImage;
  nextImage.alt = target.title;
  stage.classList.add("is-transitioning");
  clearHotspots();
  clearActions();
  animateReveal(options, transitionMs);

  window.setTimeout(() => {
    window.cancelAnimationFrame(revealFrame);
    currentImage.src = targetImage;
    currentImage.alt = target.title;
    stage.classList.remove("is-transitioning");
    stage.style.setProperty("--reveal", "0px");
    stage.style.setProperty("--reveal-rx", "0px");
    stage.style.setProperty("--reveal-ry", "0px");
    setRevealMask({ x: 50, y: 50, rx: 0, ry: 0, feather: 0 });
    renderScene(id);
    locked = false;
  }, transitionMs);
}

function animateReveal(options, duration) {
  window.cancelAnimationFrame(revealFrame);

  const rect = stage.getBoundingClientRect();
  const x = rect.width / 2;
  const y = rect.height / 2;
  const maxX = Math.max(x, rect.width - x);
  const maxY = Math.max(y, rect.height - y);
  const targetRadius = Math.hypot(maxX, maxY) * 1.16;
  const startRadius = Math.max(
    44,
    Math.min(options.width ?? 120, options.height ?? 120) * 0.28,
  );
  const started = performance.now();
  const stretchX = 1 + ((options.width ?? 220) % 31) / 120;
  const stretchY = 0.88 + ((options.height ?? 180) % 37) / 160;

  const tick = (now) => {
    const progress = Math.min((now - started) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 2.45);
    const wobble = Math.sin(progress * Math.PI * 7) * 7 * (1 - progress);
    const radius = startRadius + (targetRadius - startRadius) * eased + wobble;
    const feather = Math.max(18, radius * 0.055);

    stage.style.setProperty("--reveal", `${radius}px`);
    stage.style.setProperty("--reveal-rx", `${radius * stretchX}px`);
    stage.style.setProperty("--reveal-ry", `${radius * stretchY}px`);
    setRevealMask({
      x,
      y,
      rx: radius * stretchX,
      ry: radius * stretchY,
      feather,
    });

    if (progress < 1) {
      revealFrame = window.requestAnimationFrame(tick);
    }
  };

  revealFrame = window.requestAnimationFrame(tick);
}

function prepareRevealLayer(imageSrc) {
  const rect = stage.getBoundingClientRect();
  coverSvg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
  coverImage.setAttribute("href", imageSrc);
  coverImage.setAttribute("width", rect.width);
  coverImage.setAttribute("height", rect.height);
  maskFill.setAttribute("width", rect.width);
  maskFill.setAttribute("height", rect.height);
}

function updateSceneMetrics() {
  const artboard = getSceneArtboard();
  const rect = stage.getBoundingClientRect();
  const mediaBox = {
    left: rect.width * -0.02,
    top: rect.height * -0.02,
    width: rect.width * 1.04,
    height: rect.height * 1.04,
  };
  const scale = Math.max(
    mediaBox.width / artboard.width,
    mediaBox.height / artboard.height,
  );
  const renderedWidth = artboard.width * scale;
  const renderedHeight = artboard.height * scale;
  const left = mediaBox.left + (mediaBox.width - renderedWidth) / 2;
  const top = mediaBox.top + (mediaBox.height - renderedHeight) / 2;

  stage.style.setProperty("--scene-left", `${left}px`);
  stage.style.setProperty("--scene-top", `${top}px`);
  stage.style.setProperty("--scene-fit-scale", scale);
  stage.style.setProperty("--art-width", `${artboard.width}px`);
  stage.style.setProperty("--art-height", `${artboard.height}px`);
}

function clampArtboardPoint(x, y, margin = 56) {
  const artboard = getSceneArtboard();
  const rect = stage.getBoundingClientRect();
  const mediaBox = {
    left: rect.width * -0.02,
    top: rect.height * -0.02,
    width: rect.width * 1.04,
    height: rect.height * 1.04,
  };
  const scale = Math.max(
    mediaBox.width / artboard.width,
    mediaBox.height / artboard.height,
  );
  const renderedWidth = artboard.width * scale;
  const renderedHeight = artboard.height * scale;
  const offsetLeft = mediaBox.left + (mediaBox.width - renderedWidth) / 2;
  const offsetTop = mediaBox.top + (mediaBox.height - renderedHeight) / 2;
  const visibleLeft = Math.max(0, -offsetLeft / scale);
  const visibleTop = Math.max(0, -offsetTop / scale);
  const visibleRight = Math.min(
    artboard.width,
    visibleLeft + mediaBox.width / scale,
  );
  const visibleBottom = Math.min(
    artboard.height,
    visibleTop + mediaBox.height / scale,
  );

  return {
    x: Math.min(Math.max(x, visibleLeft + margin), visibleRight - margin),
    y: Math.min(Math.max(y, visibleTop + margin), visibleBottom - margin),
  };
}

function handleResize() {
  const nextViewportMode = getViewportMode();
  updateSceneMetrics();

  if (nextViewportMode !== viewportMode) {
    viewportMode = nextViewportMode;
  }

  renderScene(activeScene, { immediate: true });
}

function setRevealMask({ x, y, rx, ry, feather }) {
  maskHole.setAttribute("cx", x);
  maskHole.setAttribute("cy", y);
  maskHole.setAttribute("rx", Math.max(0, rx));
  maskHole.setAttribute("ry", Math.max(0, ry));
  maskFeather.setAttribute("cx", x);
  maskFeather.setAttribute("cy", y);
  maskFeather.setAttribute("rx", Math.max(0, rx + feather));
  maskFeather.setAttribute("ry", Math.max(0, ry + feather));
}

function renderScene(id, options = {}) {
  const scene = getScene(id);
  const sceneImage = getSceneImage(scene);
  const sceneHotspots =
    isMobileView() && scene.mobileHotspots
      ? scene.mobileHotspots
      : isTabletView() && scene.tabletHotspots
        ? scene.tabletHotspots
        : scene.hotspots;
  const sceneActions =
    isMobileView() && scene.mobileActions
      ? scene.mobileActions
      : isTabletView() && scene.tabletActions
        ? scene.tabletActions
        : scene.actions;
  stage.dataset.scene = String(scene.id);
  updateSceneMetrics();
  renderAmbient(scene.id);
  renderCakeGame(scene.id);
  currentImage.src = sceneImage;
  currentImage.alt = scene.title;

  clearHotspots();
  clearActions();
  sceneHotspots.forEach((hotspot) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.type = "button";
    button.setAttribute("aria-label", hotspot.label);
    button.style.setProperty("--x", `${hotspot.x}%`);
    button.style.setProperty("--y", `${hotspot.y}%`);
    button.style.setProperty(
      "--width",
      `${hotspot.width ?? hotspot.size ?? 170}px`,
    );
    button.style.setProperty(
      "--height",
      `${hotspot.height ?? hotspot.size ?? 170}px`,
    );
    button.style.setProperty("--rotate", `${hotspot.rotate ?? 0}deg`);
    button.addEventListener("click", () => navigateTo(hotspot.target, hotspot));
    hotspotsLayer.append(button);
  });
  (sceneActions || []).forEach((action) => {
    const button = document.createElement("button");
    button.className = "scene-button";
    button.type = "button";
    button.setAttribute("aria-label", action.label);
    if (
      action.action === "menu" ||
      action.action === "drinks" ||
      action.action === "icecream" ||
      action.action === "birthday" ||
      action.action === "celebration"
    ) {
      button.classList.add("scene-button-paw");
      button.innerHTML =
        '<span class="paw-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
    } else {
      button.textContent = action.label;
    }
    button.style.setProperty("--art-x", `${clampArtboardPoint(action.x, action.y).x}px`);
    button.style.setProperty("--art-y", `${clampArtboardPoint(action.x, action.y).y}px`);
    button.addEventListener("click", () => handleSceneAction(action.action));
    actionsLayer.append(button);
  });

  if (options.immediate) {
    nextImage.src = sceneImage;
  }
}

function clearHotspots() {
  hotspotsLayer.replaceChildren();
}

function clearActions() {
  actionsLayer.replaceChildren();
}

function handleSceneAction(action) {
  if (action === "menu") {
    activeMenuMode = "food";
    activeMenuSection = "human";
    renderMenuCatalog();
    openMenu();
  }

  if (action === "drinks") {
    activeMenuMode = "drinks";
    activeMenuSection = "drinks";
    renderMenuCatalog();
    openMenu();
  }

  if (action === "icecream") {
    activeMenuMode = "icecream";
    activeMenuSection = "icecream";
    renderMenuCatalog();
    openMenu();
  }

  if (action === "birthday") {
    openStory("cake");
  }

  if (action === "celebration") {
    openStory("celebration");
  }
}

function openMenu() {
  closeStory();
  menuPanel.classList.add("is-open");
  menuPanel.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  menuPanel.classList.remove("is-open");
  menuPanel.setAttribute("aria-hidden", "true");
}

function openStory(mode = "cake") {
  closeMenu();
  storyMode = mode;
  if (storyMode === "celebration") {
    celebrationStep = 0;
    celebrationChoices = {};
    renderCelebrationPlanner();
  } else {
    cakeBuilderStep = 0;
    cakeBuilderChoices = {};
    renderCakeBuilder();
  }
  storyPanel.classList.add("is-open");
  storyPanel.setAttribute("aria-hidden", "false");
}

function closeStory() {
  storyPanel.classList.remove("is-open");
  storyPanel.setAttribute("aria-hidden", "true");
}

function renderCakeBuilder() {
  if (cakeBuilderStep === 0) {
    cakeBuilder.replaceChildren(
      makeCakeHeader("Создайте идеальный торт для вашего питомца", [
        "День рождения питомца — особенный повод для праздника.",
        "В Goodboy мы создаём праздничные торты, разработанные специально для собак из безопасных ингредиентов и адаптированные под индивидуальные особенности каждого питомца.",
        "Пройдите несколько шагов, чтобы создать уникальный торт специально для вашего праздника.",
      ]),
      makeCakeButton("Начать создание →", () => {
        cakeBuilderStep = 1;
        renderCakeBuilder();
      }),
    );
    return;
  }

  if (cakeBuilderStep >= 1 && cakeBuilderStep <= cakeSteps.length) {
    renderCakeOptionStep(cakeSteps[cakeBuilderStep - 1]);
    return;
  }

  if (cakeBuilderStep === cakeSteps.length + 1) {
    renderCakePhotoStep();
    return;
  }

  renderCakeFinalStep();
}

function makeCakeHeader(title, paragraphs) {
  const header = document.createElement("div");
  header.className = "cake-builder-header";

  const kicker = document.createElement("p");
  kicker.className = "scene-kicker";
  kicker.textContent = "Custom cake";

  const heading = document.createElement("h2");
  heading.textContent = title;

  header.append(
    kicker,
    heading,
    ...paragraphs.map((text) => {
      const paragraph = document.createElement("p");
      paragraph.className = "story-copy";
      paragraph.textContent = text;
      return paragraph;
    }),
  );

  return header;
}

function renderCakeOptionStep(step) {
  const progress = makeCakeProgress(cakeBuilderStep);
  const header = makeCakeHeader(step.title, [step.copy]);
  const list = document.createElement("div");
  list.className = "cake-options";

  step.options.forEach((option, index) => {
    const value = typeof option === "string" ? option : option.title;
    const isDisabled = typeof option !== "string" && option.disabled;
    const button = document.createElement("button");
    button.className = "cake-option";
    button.type = "button";
    button.setAttribute(
      "aria-pressed",
      String(cakeBuilderChoices[step.key] === value),
    );
    button.disabled = isDisabled;
    if (isDisabled) {
      button.setAttribute("aria-disabled", "true");
    }
    button.addEventListener("click", () => {
      if (isDisabled) return;
      cakeBuilderChoices[step.key] = value;
      renderCakeBuilder();
    });

    const visual = document.createElement("span");
    visual.className = `cake-visual ${typeof option === "string" ? `choice-${index + 1}` : option.visual}`;
    visual.setAttribute("aria-hidden", "true");

    const text = document.createElement("span");
    text.className = "cake-option-text";
    text.textContent = value;
    button.append(visual, text);

    if (typeof option !== "string") {
      const caption = document.createElement("small");
      caption.textContent = option.copy;
      button.append(caption);
    }

    list.append(button);
  });

  const next = makeCakeButton("Далее →", () => {
    if (!cakeBuilderChoices[step.key]) return;
    cakeBuilderStep += 1;
    renderCakeBuilder();
  });
  next.disabled = !cakeBuilderChoices[step.key];
  next.setAttribute("aria-disabled", String(next.disabled));

  cakeBuilder.replaceChildren(progress, header, list, next);
}

function renderCakePhotoStep() {
  const progress = makeCakeProgress(cakeSteps.length + 1);
  const header = makeCakeHeader("Познакомьте нас с именинником", [
    "Загрузите фотографию вашего питомца — мы используем её как основу для создания индивидуального дизайна.",
  ]);
  const upload = makeCakeButton("Загрузить фотографию", () => {
    cakeBuilderChoices.photo = true;
    renderCakePhotoStep();
  });
  upload.classList.add("cake-upload-button");

  const content = document.createElement("div");
  content.className = "cake-upload-zone";
  content.append(upload);

  if (cakeBuilderChoices.photo) {
    content.append(makePetPhotoCard());
    const success = document.createElement("p");
    success.className = "cake-success";
    success.textContent = "✓ Фотография успешно загружена";
    content.append(success);
  }

  const next = makeCakeButton("Далее →", () => {
    cakeBuilderChoices.photo = true;
    cakeBuilderStep = cakeSteps.length + 2;
    renderCakeBuilder();
  });

  cakeBuilder.replaceChildren(progress, header, content, next);
}

function renderCakeFinalStep() {
  const title = document.createElement("h2");
  title.className = "cake-final-title";
  title.textContent = "Ваш торт";

  const result = document.createElement("div");
  result.className = "cake-result";
  result.innerHTML = `
    <img class="custom-cake-photo" src="./assets/cake-builder/custom-cake.png" alt="Ваш торт" draggable="false" />
  `;

  const buttons = document.createElement("div");
  buttons.className = "cake-final-actions";
  buttons.append(
    makeCakeButton("Мне нравится", closeStory),
    makeCakeButton("Создать заново", () => {
      cakeBuilderStep = 0;
      cakeBuilderChoices = {};
      renderCakeBuilder();
    }),
  );

  cakeBuilder.replaceChildren(title, result, buttons);
}

function getCakeOptionValue(option) {
  return typeof option === "string" ? option : option.title;
}

function makeCakeProgress(step) {
  const progress = document.createElement("div");
  progress.className = "cake-progress";
  for (let index = 1; index <= cakeSteps.length + 1; index += 1) {
    const dot = document.createElement("span");
    dot.className = index <= step ? "is-active" : "";
    progress.append(dot);
  }
  return progress;
}

function makeCakeButton(label, onClick) {
  const button = document.createElement("button");
  button.className = "cake-action";
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function makePetPhotoCard() {
  const card = document.createElement("div");
  card.className = "pet-photo-card";
  card.innerHTML = `
    <img class="pet-photo" src="./assets/cake-builder/pet-photo.png" alt="Фотография питомца" draggable="false" />
  `;
  return card;
}

function renderCelebrationPlanner() {
  if (celebrationStep === 0) {
    const header = makeCakeHeader("Особенные моменты для самых любимых", [
      "Мы создаём праздники, где питомцы становятся главными героями дня.",
      "Продуманная атмосфера, персональные детали и пространство, в котором можно разделить важный момент вместе.",
    ]);
    header.querySelector(".scene-kicker").textContent = "Birthday celebration";
    cakeBuilder.replaceChildren(
      header,
      makeCakeButton("Организовать праздник", () => {
        celebrationStep = 1;
        renderCelebrationPlanner();
      }),
    );
    return;
  }

  if (celebrationStep >= 1 && celebrationStep <= celebrationSteps.length) {
    renderCelebrationStep(celebrationSteps[celebrationStep - 1]);
    return;
  }

  renderCelebrationFinal();
}

function renderCelebrationStep(step) {
  const progress = makeCelebrationProgress(celebrationStep);
  const header = makeCakeHeader(step.title, [step.copy]);

  if (step.type === "date") {
    const dateLayout = document.createElement("div");
    dateLayout.className = "celebration-date-layout";

    const controls = document.createElement("div");
    controls.className = "celebration-date-controls";

    const field = document.createElement("label");
    field.className = "celebration-date-field";
    field.textContent = "Дата праздника";

    const input = document.createElement("input");
    input.type = "date";
    input.value = celebrationChoices.date || "";
    input.addEventListener("input", () => {
      celebrationChoices.date = input.value;
      renderCelebrationPlanner();
    });
    field.append(input);

    controls.append(field);

    const art = document.createElement("div");
    art.className = "celebration-date-scene";
    art.innerHTML =
      '<img src="./assets/celebration/date-calendar.png" alt="" draggable="false" />';

    dateLayout.append(controls, art);

    const next = makeCakeButton("Далее →", () => {
      if (!celebrationChoices.date) return;
      celebrationStep += 1;
      renderCelebrationPlanner();
    });
    next.disabled = !celebrationChoices.date;
    next.setAttribute("aria-disabled", String(next.disabled));

    cakeBuilder.replaceChildren(progress, header, dateLayout, next);
    return;
  }

  const list = document.createElement("div");
  list.className = `celebration-options${step.key === "details" ? " celebration-options-details" : ""}`;

  step.options.forEach((option) => {
    const selected = step.multiple
      ? (celebrationChoices[step.key] || []).includes(option.title)
      : celebrationChoices[step.key] === option.title;
    const button = document.createElement("button");
    button.className = "celebration-option";
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected));
    button.addEventListener("click", () => {
      if (step.multiple) {
        const current = new Set(celebrationChoices[step.key] || []);
        if (current.has(option.title)) {
          current.delete(option.title);
        } else {
          current.add(option.title);
        }
        celebrationChoices[step.key] = [...current];
      } else {
        celebrationChoices[step.key] = option.title;
      }
      renderCelebrationPlanner();
    });

    button.innerHTML = `
      <span class="celebration-visual celebration-visual-image"><img src="${option.image}" alt="" draggable="false" /></span>
      <span class="celebration-option-title">${option.title}</span>
      ${option.copy ? `<small>${option.copy}</small>` : ""}
    `;
    list.append(button);
  });

  const hasChoice = step.multiple
    ? Boolean((celebrationChoices[step.key] || []).length)
    : Boolean(celebrationChoices[step.key]);
  const next = makeCakeButton("Далее →", () => {
    if (!hasChoice) return;
    celebrationStep += 1;
    renderCelebrationPlanner();
  });
  next.disabled = !hasChoice;
  next.setAttribute("aria-disabled", String(next.disabled));

  cakeBuilder.replaceChildren(progress, header, list, next);
}

function renderCelebrationFinal() {
  const title = document.createElement("h2");
  title.className = "cake-final-title celebration-final-title";
  title.textContent = "Ваш праздник готов";

  const preview = document.createElement("div");
  preview.className = "celebration-preview";
  preview.innerHTML =
    '<div class="celebration-preview-image"><img src="./assets/celebration/final-birthday-room.png" alt="" draggable="false" /></div>';

  const buttons = document.createElement("div");
  buttons.className = "cake-final-actions";
  buttons.append(
    makeCakeButton("Мне нравится", closeStory),
    makeCakeButton("Создать заново", () => {
      celebrationStep = 0;
      celebrationChoices = {};
      renderCelebrationPlanner();
    }),
  );

  cakeBuilder.replaceChildren(title, preview, buttons);
}

function makeCelebrationProgress(step) {
  const progress = document.createElement("div");
  progress.className = "cake-progress";
  for (let index = 1; index <= celebrationSteps.length; index += 1) {
    const dot = document.createElement("span");
    dot.className = index <= step ? "is-active" : "";
    progress.append(dot);
  }
  return progress;
}

function renderMenuCatalog() {
  const visibleSectionIds =
    activeMenuMode === "drinks"
      ? drinkSectionIds
      : activeMenuMode === "icecream"
        ? iceCreamSectionIds
        : foodSectionIds;
  const visibleSections = menuSections.filter((item) =>
    visibleSectionIds.includes(item.id),
  );
  const section =
    menuSections.find((item) => item.id === activeMenuSection) ||
    menuSections[0];
  menuKicker.textContent = section.title;

  menuTabs.replaceChildren(
    ...visibleSections.map((item) => {
      const button = document.createElement("button");
      button.className = "menu-tab";
      button.type = "button";
      button.textContent = item.label;
      button.setAttribute("aria-selected", String(item.id === section.id));
      button.addEventListener("click", () => {
        activeMenuSection = item.id;
        renderMenuCatalog();
      });
      return button;
    }),
  );

  catalogTrack.replaceChildren(
    ...section.items.map((item) => {
      const card = document.createElement("article");
      card.className = "catalog-card";

      if (!item.image) {
        card.classList.add("catalog-card-text");
      }

      const info = document.createElement("div");
      info.className = "catalog-info";

      const title = document.createElement("h3");
      title.textContent = item.name;

      const description = document.createElement("p");
      description.textContent = item.description;

      const footer = document.createElement("div");
      footer.className = "catalog-footer";

      const price = document.createElement("b");
      price.textContent = String(item.price);

      footer.append(price);
      info.append(title, description, footer);
      if (item.image) {
        const image = document.createElement("img");
        image.className = "catalog-photo";
        image.src = item.image;
        image.alt = "";
        image.draggable = false;
        card.append(image);
      }

      card.append(info);
      return card;
    }),
  );
}

function renderAmbient(sceneId) {
  const smokePuffs =
    sceneId === 1
      ? [
          { x: 481, y: 237, size: 32, drift: -18, duration: 4200, delay: -200 },
          { x: 489, y: 235, size: 28, drift: 10, duration: 4600, delay: -900 },
          { x: 474, y: 241, size: 26, drift: -8, duration: 4300, delay: -1500 },
          { x: 499, y: 238, size: 24, drift: 6, duration: 3900, delay: -2100 },
          {
            x: 484,
            y: 236,
            size: 30,
            drift: -14,
            duration: 4500,
            delay: -2800,
          },
          { x: 495, y: 234, size: 22, drift: 13, duration: 4100, delay: -3300 },
          { x: 477, y: 240, size: 25, drift: -3, duration: 4300, delay: -3800 },
          { x: 490, y: 236, size: 20, drift: 8, duration: 3600, delay: -4300 },
        ]
      : [];

  const headlights =
    sceneId === 1
      ? [
          { x: 496, y: 617, size: 26, delay: -200 },
          { x: 547, y: 616, size: 24, delay: -900 },
        ]
      : [];

  const cafeLights =
    sceneId === 1
      ? [
          { x: 916, y: 544, size: 30, delay: -300 },
          { x: 1043, y: 533, size: 32, delay: -1100 },
          { x: 1223, y: 527, size: 32, delay: -700 },
          { x: 1310, y: 523, size: 30, delay: -1600 },
        ]
      : [];

  const windowLights = [
    ...(sceneId === 1
      ? [
          { x: 1080, y: 237, w: 80, h: 93, delay: -500 },
          { x: 1322, y: 227, w: 104, h: 89, delay: -1700 },
        ]
      : []),
    ...(sceneId === 5
      ? [
          { x: 139, y: 548, w: 62, h: 168, delay: -300 },
          { x: 265, y: 522, w: 26, h: 132, delay: -1200 },
          { x: 383, y: 206, w: 26, h: 68, delay: -2100 },
          { x: 560, y: 264, w: 20, h: 58, delay: -1800 },
          { x: 612, y: 265, w: 20, h: 56, delay: -900 },
          { x: 686, y: 268, w: 22, h: 58, delay: -2600 },
          { x: 994, y: 304, w: 58, h: 94, delay: -1400 },
          { x: 1208, y: 534, w: 38, h: 144, delay: -700 },
          { x: 1298, y: 532, w: 42, h: 150, delay: -2200 },
          { x: 1417, y: 590, w: 32, h: 220, delay: -1200 },
        ]
      : []),
  ];

  const pendantLights =
    sceneId === 2
      ? [
          { x: 99, y: 343, size: 70, delay: -300 },
          { x: 181, y: 428, size: 44, delay: -1300 },
          { x: 1228, y: 404, size: 72, delay: -700 },
          { x: 1299, y: 363, size: 72, delay: -1700 },
        ]
      : [];

  const showcaseLights =
    sceneId === 2
      ? [
          { x: 566, y: 451, w: 170, h: 82, delay: -400 },
          { x: 725, y: 451, w: 190, h: 82, delay: -1200 },
          { x: 884, y: 451, w: 170, h: 82, delay: -800 },
        ]
      : [];

  const candleFlames =
    sceneId === 4
      ? [
          { x: 397, y: 397, size: 16, delay: -200 },
          { x: 417, y: 394, size: 15, delay: -900 },
          { x: 437, y: 398, size: 14, delay: -1400 },
          { x: 767, y: 340, size: 12, delay: -500 },
          { x: 785, y: 340, size: 12, delay: -1100 },
          { x: 1076, y: 548, size: 15, delay: -300 },
          { x: 1097, y: 544, size: 16, delay: -1200 },
          { x: 1120, y: 544, size: 15, delay: -700 },
          { x: 1142, y: 548, size: 14, delay: -1600 },
        ]
      : [];

  ambientLayer.replaceChildren(
    ...smokePuffs.map(createSmoke),
    ...headlights.map(createHeadlight),
    ...cafeLights.map(createCafeLight),
    ...windowLights.map(createWindowLight),
    ...pendantLights.map(createPendantLight),
    ...showcaseLights.map(createShowcaseLight),
    ...candleFlames.map(createCandleFlame),
  );
}

function createSmoke(item) {
  const puff = document.createElement("span");
  puff.className = "smoke";
  puff.style.setProperty("--art-x", `${item.x}px`);
  puff.style.setProperty("--art-y", `${item.y}px`);
  puff.style.setProperty("--size", `${item.size}px`);
  puff.style.setProperty("--drift", `${item.drift}px`);
  puff.style.setProperty("--duration", `${item.duration}ms`);
  puff.style.setProperty("--delay", `${item.delay}ms`);
  return puff;
}

function createHeadlight(item) {
  const light = document.createElement("span");
  light.className = "headlight";
  light.style.setProperty("--art-x", `${item.x}px`);
  light.style.setProperty("--art-y", `${item.y}px`);
  light.style.setProperty("--size", `${item.size}px`);
  light.style.setProperty("--delay", `${item.delay}ms`);
  return light;
}

function createCafeLight(item) {
  const light = document.createElement("span");
  light.className = "cafe-light";
  light.style.setProperty("--art-x", `${item.x}px`);
  light.style.setProperty("--art-y", `${item.y}px`);
  light.style.setProperty("--size", `${item.size}px`);
  light.style.setProperty("--delay", `${item.delay}ms`);
  return light;
}

function createWindowLight(item) {
  const light = document.createElement("span");
  light.className = "window-light";
  light.style.setProperty("--art-x", `${item.x}px`);
  light.style.setProperty("--art-y", `${item.y}px`);
  light.style.setProperty("--w", `${item.w}px`);
  light.style.setProperty("--h", `${item.h}px`);
  light.style.setProperty("--delay", `${item.delay}ms`);
  return light;
}

function createPendantLight(item) {
  const light = document.createElement("span");
  light.className = "pendant-light";
  light.style.setProperty("--art-x", `${item.x}px`);
  light.style.setProperty("--art-y", `${item.y}px`);
  light.style.setProperty("--size", `${item.size}px`);
  light.style.setProperty("--delay", `${item.delay}ms`);
  return light;
}

function createShowcaseLight(item) {
  const light = document.createElement("span");
  light.className = "showcase-light";
  light.style.setProperty("--art-x", `${item.x}px`);
  light.style.setProperty("--art-y", `${item.y}px`);
  light.style.setProperty("--w", `${item.w}px`);
  light.style.setProperty("--h", `${item.h}px`);
  light.style.setProperty("--delay", `${item.delay}ms`);
  return light;
}

function createCandleFlame(item) {
  const flame = document.createElement("span");
  flame.className = "candle-flame";
  flame.style.setProperty("--art-x", `${item.x}px`);
  flame.style.setProperty("--art-y", `${item.y}px`);
  flame.style.setProperty("--size", `${item.size}px`);
  flame.style.setProperty("--delay", `${item.delay}ms`);
  return flame;
}

function createCakeGameState() {
  return {
    currentStep: 0,
    completed: [],
    bowlImage: "bowl-empty.png",
    hint: "",
    animating: false,
    framePlayer: null,
    isAdded: false,
    isMixing: false,
    finished: false,
  };
}

function renderCakeGame(sceneId) {
  if (!cakeGameLayer) return;
  if (sceneId !== 3) {
    cakeGameLayer.replaceChildren();
    cakeGameUiLayer?.replaceChildren();
    return;
  }

  const viewportModeClass = getViewportMode();
  const game = document.createElement("div");
  game.className = `cake-game is-${viewportModeClass}`;

  const ui = document.createElement("div");
  ui.className = `cake-game-ui is-${viewportModeClass}`;

  const intro = document.createElement("div");
  intro.className = "cake-game-intro";
  intro.innerHTML = `
    <p class="scene-kicker">GOODBOY CAKE</p>
    <h2>Приготовьте торт для вашего питомца</h2>
    <p>Добавляйте ингредиенты по рецепту, смешайте основу и украсьте праздничный десерт.</p>
  `;

  const recipe = document.createElement("aside");
  recipe.className = "cake-game-recipe";
  recipe.innerHTML = `
    <h3>Рецепт</h3>
    <ol>
      ${cakeGameSteps
        .map((step, index) => {
          const stateClass = cakeGameState.completed.includes(step.id)
            ? "is-done"
            : index === cakeGameState.currentStep
              ? "is-current"
              : "";
          return `<li class="${stateClass}">${step.title}</li>`;
        })
        .join("")}
    </ol>
  `;

  ui.append(intro, recipe);

  const bowl = document.createElement("div");
  applyCakeGameBowlLayout(bowl);
  bowl.className = [
    "cake-game-bowl",
    cakeGameState.bowlImage ? "has-state" : "",
    cakeGameState.isAdded ? "is-added" : "",
    cakeGameState.isMixing ? "is-mixing is-whisked" : "",
    cakeGameState.finished ? "is-finished" : "",
    cakeGameState.framePlayer ? "is-covered" : "",
  ]
    .filter(Boolean)
    .join(" ");
  if (cakeGameState.finished) {
    bowl.innerHTML = `<img class="cake-game-cake" src="${cakeGameAssets}/cake.png?v=4" alt="Готовый торт" draggable="false" />`;
  } else if (cakeGameState.bowlImage) {
    bowl.innerHTML = `<img class="cake-game-bowl-state" src="${cakeGameFramePath}/${cakeGameState.bowlImage}?v=10" alt="" draggable="false" />`;
  }

  const ingredients = document.createElement("div");
  ingredients.className = "cake-game-ingredients";
  cakeGameSteps.forEach((step) => {
    if (cakeGameState.completed.includes(step.id) || cakeGameState.finished)
      return;

    const stepLayout = getCakeGameStepLayout(step);
    const button = document.createElement("button");
    button.className = "cake-game-item";
    button.type = "button";
    button.setAttribute("aria-label", step.title);
    button.style.setProperty("--art-x", `${stepLayout.x}px`);
    button.style.setProperty("--art-y", `${stepLayout.y}px`);
    button.style.setProperty(
      "--item-size",
      `${stepLayout.width ?? step.width}px`,
    );
    button.innerHTML =
      '<span class="paw-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
    button.addEventListener("click", () => handleCakeGameClick(step, button));
    ingredients.append(button);
  });

  const hint = document.createElement("div");
  hint.className = `cake-game-hint${cakeGameState.hint ? " is-visible" : ""}`;
  applyCakeGameHintLayout(hint);
  hint.textContent = cakeGameState.hint;

  game.append(bowl, ingredients, hint);

  if (cakeGameState.framePlayer) {
    game.append(cakeGameState.framePlayer);
  }

  if (cakeGameState.finished) {
    const final = document.createElement("div");
    final.className = "cake-game-final";
    final.innerHTML = `
      <h3>Торт готов ✨</h3>
      <p>Праздничный десерт для вашего питомца создан.</p>
      <div class="cake-game-actions">
        <button class="cake-game-action" type="button" data-action="restart">Приготовить заново</button>
        <button class="cake-game-action" type="button" data-action="order">Перейти к заказу</button>
      </div>
    `;
    final
      .querySelector('[data-action="restart"]')
      .addEventListener("click", () => {
        cakeGameState = createCakeGameState();
        renderCakeGame(3);
      });
    final
      .querySelector('[data-action="order"]')
      .addEventListener("click", () => openStory("cake"));
    ui.append(final);
  }

  cakeGameLayer.replaceChildren(game);
  cakeGameUiLayer?.replaceChildren(ui);
}

function handleCakeGameClick(step, button) {
  if (cakeGameState.animating || cakeGameState.finished) return;

  const expected = cakeGameSteps[cakeGameState.currentStep];
  if (!expected || step.id !== expected.id) {
    button.classList.remove("is-wrong");
    void button.offsetWidth;
    button.classList.add("is-wrong");
    cakeGameState.hint = `Сначала добавьте ${expected?.hint || "следующий ингредиент"}`;
    renderCakeGame(3);
    window.setTimeout(() => {
      cakeGameState.hint = "";
      renderCakeGame(3);
    }, 1600);
    return;
  }

  completeCakeGameStep(step);
}

function completeCakeGameStep(step) {
  cakeGameState.animating = true;
  cakeGameState.hint = "";
  if (step.id === "whisk") {
    cakeGameState.isMixing = true;
    renderCakeGame(3);
    window.setTimeout(() => {
      cakeGameState.completed.push(step.id);
      cakeGameState.currentStep += 1;
      cakeGameState.isMixing = false;
      cakeGameState.finished = true;
      cakeGameState.animating = false;
      renderCakeGame(3);
    }, cakeGameAnimations.whisk.duration);
    return;
  }

  playCakeGameFrames(step, () => {
    const animation = getCakeGameAnimation(step.id);
    cakeGameState.completed.push(step.id);
    cakeGameState.currentStep += 1;
    cakeGameState.bowlImage = animation.bowlImage;
    cakeGameState.framePlayer = null;
    cakeGameState.isAdded = true;
    cakeGameState.animating = false;
    renderCakeGame(3);
    window.setTimeout(() => {
      cakeGameState.isAdded = false;
      renderCakeGame(3);
    }, 650);
  });
}

function playCakeGameFrames(step, onComplete) {
  const animation = getCakeGameAnimation(step.id);
  if (!animation) {
    onComplete();
    return;
  }

  const player = document.createElement("div");
  player.className = "cake-game-frame-player";
  player.style.setProperty("--frame-left", `${animation.x}px`);
  player.style.setProperty("--frame-top", `${animation.y}px`);
  player.style.setProperty("--frame-width", `${animation.width}px`);
  player.style.setProperty("--frame-height", `${animation.height}px`);

  const images = animation.frames.map((frame, index) => {
    const image = document.createElement("img");
    image.src = `${cakeGameFramePath}/${frame}?v=7`;
    image.alt = "";
    image.draggable = false;
    if (index === 0) image.classList.add("is-active");
    player.append(image);
    return image;
  });

  cakeGameState.framePlayer = player;
  renderCakeGame(3);

  let index = 0;
  const frameMs = animation.duration / images.length;
  const timer = window.setInterval(() => {
    images[index]?.classList.remove("is-active");
    index += 1;
    if (index >= images.length) {
      window.clearInterval(timer);
      player.classList.add("is-leaving");
      window.setTimeout(onComplete, 160);
      return;
    }
    images[index].classList.add("is-active");
  }, frameMs);
}

function getCakeGameLayout() {
  return cakeGameResponsive[getViewportMode()] || cakeGameResponsive.desktop;
}

function getCakeGameStepLayout(step) {
  return {
    ...step,
    ...(getCakeGameLayout().steps?.[step.id] || {}),
  };
}

function getCakeGameAnimation(stepId) {
  const animation = cakeGameAnimations[stepId];
  if (!animation) return null;

  return {
    ...animation,
    ...(getCakeGameLayout().animations?.[stepId] || {}),
  };
}

function applyCakeGameBowlLayout(element) {
  const bowl = getCakeGameLayout().bowl;
  element.style.setProperty("--bowl-left", `${bowl.x}px`);
  element.style.setProperty("--bowl-top", `${bowl.y}px`);
  element.style.setProperty("--bowl-width", `${bowl.width}px`);
  element.style.setProperty("--bowl-height", `${bowl.height}px`);
  element.style.setProperty("--bowl-whisked-top", `${bowl.whiskedY}px`);
  element.style.setProperty("--bowl-whisked-width", `${bowl.whiskedWidth}px`);
  element.style.setProperty("--bowl-whisked-height", `${bowl.whiskedHeight}px`);
  element.style.setProperty("--bowl-finished-width", `${bowl.finishedWidth}px`);
  element.style.setProperty(
    "--bowl-finished-height",
    `${bowl.finishedHeight}px`,
  );
}

function applyCakeGameHintLayout(element) {
  const hint = getCakeGameLayout().hint;
  element.style.setProperty("--hint-left", `${hint.x}px`);
  element.style.setProperty("--hint-top", `${hint.y}px`);
}

function handlePointerMove(event) {
  const rect = stage.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  parallax.targetX = x * -62;
  parallax.targetY = y * -40;
}

function resetParallax() {
  parallax.targetX = 0;
  parallax.targetY = 0;
}

function startParallax() {
  const tick = () => {
    parallax.x += (parallax.targetX - parallax.x) * 0.075;
    parallax.y += (parallax.targetY - parallax.y) * 0.075;

    stage.style.setProperty("--parallax-x", `${parallax.x.toFixed(2)}px`);
    stage.style.setProperty("--parallax-y", `${parallax.y.toFixed(2)}px`);

    parallaxFrame = window.requestAnimationFrame(tick);
  };

  window.cancelAnimationFrame(parallaxFrame);
  parallaxFrame = window.requestAnimationFrame(tick);
}
