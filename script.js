const container = document.getElementById("ui");
const inputCard = document.getElementById("input-card");
const nameInput = document.getElementById("nameInput");
const startBtn = document.getElementById("startBtn");

function createHeart(name) {
  container.innerHTML = "";
  const totalWords = 80;
  const scale = 20;
  // Love you ki jagah Good Night
  const displayText = `Shubh Raatri, aaram se soyiha ${name} 🌙✨`;

  for (let i = 0; i < totalWords; i++) {
    const el = document.createElement("div");
    el.className = "love_word";
    el.innerText = displayText;

    // Parametric Heart Formula
    const t = (i / totalWords) * Math.PI * 2;
    const x = scale * 16 * Math.pow(Math.sin(t), 3);
    const y =
      -scale *
      (13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t));

    // Depth offset for 3D ribbon effect
    const z = Math.sin(t * 2) * 60;
    const rotZ = Math.atan2(y, x) * (180 / Math.PI);

    el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateZ(${rotZ}deg)`;
    container.appendChild(el);
  }

  // Heart show animation
  container.classList.add("show");
}

function handleStart() {
  const enteredName = nameInput.value.trim();
  if (!enteredName) {
    nameInput.focus();
    return;
  }

  // Fade out input card
  inputCard.classList.add("fade-out");

  setTimeout(() => {
    inputCard.style.display = "none";
    createHeart(enteredName);
  }, 800);
}

startBtn.addEventListener("click", handleStart);

// Enter key press support
nameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleStart();
  }
});
