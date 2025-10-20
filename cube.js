const cubo = document.getElementById("cubo3D");
const escena = document.getElementById("cuboEscena");

let autoX = 0;
let autoY = 0;
let dragX = 0;
let dragY = 0;
let isDragging = false;
let lastX = 0;
let lastY = 0;

function animate() {
    // Rotación automática
    autoY += 0.2; // Velocidad horizontal
    autoX += 0.1; // Velocidad vertical (puedes ajustar)

    const totalX = autoX + dragX;
    const totalY = autoY + dragY;

    cubo.style.transform = `rotateX(${totalX}deg) rotateY(${totalY}deg)`;

    requestAnimationFrame(animate);
}

// Iniciar bucle
animate();

// Control por mouse
escena.addEventListener("mousedown", (e) => {
    isDragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
    escena.style.cursor = "grabbing";
});

window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;

    dragY += deltaX * 0.5;
    dragX -= deltaY * 0.5;

    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener("mouseup", () => {
    isDragging = false;
    escena.style.cursor = "grab";
});