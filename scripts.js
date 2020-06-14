// Obtain DOM Elements
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const meridiemTextContainer = document.querySelector(
  "#meridiem-text-container"
);

// Obtain Date and Time
const currentDate = new Date(Date.now()).toLocaleTimeString();
const getCurrentMeridiem = () => currentDate.slice(-2);
const getCurrentSecond = () => new Date().getSeconds(currentDate);
const getCurrentMinute = () => new Date().getMinutes(currentDate);
const getCurrentHour = () => new Date().getHours(currentDate);

const rotateSecondHand = () => {
  secondHand.style.transform = `rotate(${getCurrentSecond() * 6}deg)`;
};

const rotateMinuteHand = () => {
  minuteHand.style.transform = `rotate(${getCurrentMinute() * 6}deg)`;
};

const rotateHourHand = () => {
  hourHand.style.transform = `rotate(${getCurrentHour() * 30}deg)`;
};

const setMeridiemValue = () => {
  const currentMeridiem = getCurrentMeridiem().toString();
  meridiemText = document.createElement("p");
  meridiemText.innerHTML = `${currentMeridiem}`;
  meridiemText.classList.add("meridiem-text");
  meridiemTextContainer.appendChild(meridiemText);
};

const updateMeridiemText = (meridiemText) => {
  const currentMeridiemText = getCurrentMeridiem().toString();
  return currentMeridiemText === "PM" && meridiemText !== "PM"
    ? (meridiemText.innerHTML = `PM`)
    : (meridiemText.innerHTML = `AM`);
};

setInterval(() => {
  rotateSecondHand();
  rotateMinuteHand();
  rotateHourHand();
  updateMeridiemText(document.querySelector(".meridiem-text"));
}, 1000);

setMeridiemValue();
