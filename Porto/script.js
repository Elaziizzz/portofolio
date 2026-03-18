const card = document.getElementById("card");
const mainScene = document.getElementById("main-scene");
const projectOverlay = document.getElementById("project-overlay");

// 1. EFEK INTERAKSI LANYARD (Mouse Follow & Drag)
document.addEventListener("mousemove", (e) => {
  // Menghitung rotasi berdasarkan posisi kursor dari tengah layar
  const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 30;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

function openProject() {
  mainScene.style.opacity = "0";
  mainScene.style.transform = "scale(0.9) translateY(-20px)";

  setTimeout(() => {
    mainScene.classList.add("hidden");
    projectOverlay.classList.remove("hidden");

    const items = document.querySelectorAll(".anim-item");
    items.forEach((item, index) => {
      setTimeout(
        () => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0)";
        },
        200 * (index + 1),
      );
    });
  }, 500);
}

// 3. FUNGSI TUTUP PROJECT
function closeProject() {
  projectOverlay.style.opacity = "0";

  setTimeout(() => {
    projectOverlay.classList.add("hidden");
    mainScene.classList.remove("hidden");

    // Reset animasi main scene
    setTimeout(() => {
      mainScene.style.opacity = "1";
      mainScene.style.transform = "scale(1) translateY(0)";
    }, 50);
  }, 500);
}
