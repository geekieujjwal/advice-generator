const adviceID = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice");
const dice = document.querySelector(".dice");

async function fetchData() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

async function refreshData() {
  const adviceData = await fetchData();
  const id = adviceData.slip.id;
  const advice = adviceData.slip.advice;
  adviceID.textContent = id;
  adviceContent.textContent = advice;
  console.log("Advice ID:", id, " = ", advice);
}
dice.addEventListener("click", () => {
  refreshData();
});
refreshData();
