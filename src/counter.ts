//src/counter.ts
// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0;
//   const setCounter = (count: number) => {
//     counter = count;
//     element.innerHTML = `count is ${counter}`;
//   };
//   element.addEventListener("click", () => setCounter(counter + 1));
//   setCounter(0);
// }


//src/counter.ts
export function setupCounter(element: HTMLButtonElement) {
  let counter: number = 0;
  const setCounter = (count: number): void => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
