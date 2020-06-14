const path = require("path");
const fs = require("fs");
const mainCss = fs.readFileSync(path.normalize("styles.css"), "utf8");

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const { document } = window;

const head = document.getElementsByTagName("head")[0];
let style = document.createElement("style");
style.type = "text/css";
style.innerHTML = mainCss;
head.appendChild(style);

describe("JSDOM works", () => {
  afterAll(() => {
    document.getElementsByTagName("html")[0].innerHTML = "";
  });

  it("renders Hello World", () => {
    const helloWorld = document.createElement("p");
    helloWorld.innerHTML = "Hello World";
    expect(helloWorld.innerHTML).toEqual("Hello World");

    document.body.appendChild(helloWorld);

    const actualHelloWorld = document.querySelector("p");
    expect(actualHelloWorld.innerHTML).toEqual("Hello World");
  });

  describe("clock elements render correctly", () => {
    it("clock has correct id", () => {
      const clockFace = document.createElement("div");
      const styleSheet = style.innerHTML;
      clockFace.id = "clock-face";

      document.body.appendChild(clockFace);

      const actualClockFace = document.querySelector("#clock-face");
      expect(actualClockFace.getAttribute("id")).toEqual("clock-face");
    });

    it("clock has correct css properties", () => {
      const clockFace = document.createElement("div");
      const styleSheet = style.innerHTML;
      clockFace.id = "clock-face";

      document.body.appendChild(clockFace);

      // use window.getComputedStyle(element).height/width/background/etc to get respective css properties

      const actualClockFace = document.querySelector("#clock-face");
      const actualClockFaceStyles = window.getComputedStyle(actualClockFace);
      expect(actualClockFaceStyles.height).toEqual("300px");
      expect(actualClockFaceStyles.width).toEqual("300px");
    });

    it("clock has three hands - hour, minute, and second", () => {
      const hourHand = document.createElement("div");
      hourHand.classList.add("hour-hand");
      hourHandStyles = window.getComputedStyle(hourHand);
      expect(hourHand).toBeTruthy();

      const minuteHand = document.createElement("div");
      minuteHand.classList.add("minute-hand");
      minuteHandStyles = window.getComputedStyle(minuteHand);
      expect(minuteHand).toBeTruthy();

      const secondHand = document.createElement("div");
      secondHand.classList.add("second-hand");
      secondHandStyles = window.getComputedStyle(secondHand);
      expect(secondHand).toBeTruthy();
    });
  });
});
