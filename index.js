console.log(
  "1. При нажатии на кнопки:Gardens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n3. В разделе contacts реализован select с выбором городов +25\nИтого: 100 баллов"
);

const btnMenu = document.querySelector(".nav-btn");
const menu = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");
const toggleMenu = function () {
  menu.classList.toggle("menu-open");
};

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target == menu || menu.contains(target);
  const its_btnMenu = target == btnMenu;
  const menu_is_active = menu.classList.contains("menu-open");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});

navLinks.forEach((button) => {
  button.addEventListener("click", toggleMenu);
});

/**************** Service filter ****************/
// 1. Выбрать кнопки по классу
const allButtons = document.querySelectorAll(".service-link");
const gardenButton = document.querySelector(".service-link-garden");
const lawnButton = document.querySelector(".service-link-lawn");
const plantingButton = document.querySelector(".service-link-planting");

// 2. Повесить обработчики событий на кнопки
allButtons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
gardenButton.addEventListener("click", handleGardenClick);
lawnButton.addEventListener("click", handleLawnClick);
plantingButton.addEventListener("click", handlePlantingClick);

// 3. Создать функцию обработки клика
numOfPressedBtns = document.querySelectorAll(".pressedBtn").length;
numOfGardenBlur = document.querySelectorAll(".garden-card.blur").length;
numOfLawnBlur = document.querySelectorAll(".lawn-card.blur").length;
numOfPlantingBlur = document.querySelectorAll(".planting-card.blur").length;

function handleClick(e) {
  if (numOfPressedBtns < 2) {
    const currentButton = e.target;
    currentButton.classList.toggle("pressedBtn");
  } else if (numOfPressedBtns < 3) {
    const currentButton = e.target;
    currentButton.classList.remove("pressedBtn");
  }
  numOfPressedBtns = document.querySelectorAll(".pressedBtn").length;
  console.log(numOfPressedBtns);
}

function handleGardenClick() {
  const checkLawnClass = document.querySelectorAll(".lawn-card.blur");
  const checkPlantingClass = document.querySelectorAll(".planting-card.blur");

  if (
    (numOfPressedBtns >= 1 && checkLawnClass.length > 0) ||
    (numOfPressedBtns >= 1 && checkPlantingClass.length > 0)
  ) {
    const gardenCards = document.querySelectorAll(".garden-card");
    gardenCards.forEach((card) => {
      card.classList.toggle("blur");
    });
  } else if (numOfPressedBtns === 0 || numOfPressedBtns === 1) {
    const lawnCards = document.querySelectorAll(".lawn-card");
    lawnCards.forEach((card) => {
      card.classList.toggle("blur");
    });
    const plantingCards = document.querySelectorAll(".planting-card");
    plantingCards.forEach((card) => {
      card.classList.toggle("blur");
    });
  }
}

function handleLawnClick() {
  const checkGardenClass = document.querySelectorAll(".garden-card.blur");
  const checkPlantingClass = document.querySelectorAll(".planting-card.blur");

  if (
    (numOfPressedBtns >= 1 && checkGardenClass.length > 0) ||
    (numOfPressedBtns >= 1 && checkPlantingClass.length > 0)
  ) {
    const lawnCards = document.querySelectorAll(".lawn-card");
    lawnCards.forEach((card) => {
      card.classList.toggle("blur");
    });
  } else if (numOfPressedBtns === 0 || numOfPressedBtns === 1) {
    const gardenCards = document.querySelectorAll(".garden-card");
    gardenCards.forEach((card) => {
      card.classList.toggle("blur");
    });
    numOfGardenBlur = document.querySelectorAll(".garden-card.blur").length;
    const plantingCards = document.querySelectorAll(".planting-card");
    plantingCards.forEach((card) => {
      card.classList.toggle("blur");
    });
    numOfPlantingBlur = document.querySelectorAll(".planting-card.blur").length;
  }
}

function handlePlantingClick() {
  const checkGardenClass = document.querySelectorAll(".garden-card.blur");
  const checkLawnClass = document.querySelectorAll(".lawn-card.blur");

  if (
    (numOfPressedBtns >= 1 && checkGardenClass.length > 0) ||
    (numOfPressedBtns >= 1 && checkLawnClass.length > 0)
  ) {
    const plantingCards = document.querySelectorAll(".planting-card");
    plantingCards.forEach((card) => {
      card.classList.toggle("blur");
    });
  } else if (numOfPressedBtns === 0 || numOfPressedBtns === 1) {
    const gardenCards = document.querySelectorAll(".garden-card");
    gardenCards.forEach((card) => {
      card.classList.toggle("blur");
    });
    numOfGardenBlur = document.querySelectorAll(".garden-card.blur").length;
    const lawnCards = document.querySelectorAll(".lawn-card");
    lawnCards.forEach((card) => {
      card.classList.toggle("blur");
    });
    numOfPlantingBlur = document.querySelectorAll(".planting-card.blur").length;
  }
}

/**************** Accordion ****************/
let accordion = document.querySelectorAll(".prices-btn");

accordion.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.classList.contains("prices-link")) {
      event.stopPropagation();
    } else {
      accordion.forEach((item) => {
        if (item !== element) {
          item.classList.remove("prices-btn_show");
        }
      });
      element.classList.toggle("prices-btn_show");
    }
  });
});
/**************** Select ****************/
const select = function () {
  const selectItem = document.querySelectorAll(".contacts-btn-item");

  selectItem.forEach((item) => {
    item.addEventListener("click", function () {
      const text = this.innerText;
      console.log(text);

      if (text === "Canandaigua, NY") {
        const currentInfo = document.getElementsByClassName("contacts-info")[0];
        currentInfo.classList.toggle("active");
      } else if (text === "Yonkers, NY") {
        const currentInfo = document.getElementsByClassName("contacts-info")[1];
        currentInfo.classList.toggle("active");
      } else if (text === "Sherrill, NY") {
        const currentInfo = document.getElementsByClassName("contacts-info")[2];
        currentInfo.classList.toggle("active");
      } else if (text === "New York City") {
        const currentInfo = document.getElementsByClassName("contacts-info")[3];
        currentInfo.classList.toggle("active");
      }

      const input = document.querySelector(".contacts-btn-input");
      input.classList.add("green");

      let currentText = this.closest(".contacts-btn").querySelector(
        ".contacts-btn-input"
      );
      currentText.innerText = text;

      this.parentElement.classList.toggle("open");
    });
  });
};

select();
