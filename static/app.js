const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

  // Scrollable Class hidden
const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));

function allowDrop (ev)
{
ev.preventDefault();
 }
 
function drag(ev)
{
  ev.dataTransfer.setData("text",ev.target.id);
 }

function drop(ev)
 {
  var data=ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
 }

  let currentIndex = 0;
  const rotationInterval = 3000; // 3 seconds

  const keyboardImages = document.querySelectorAll('#keyboard-carousel .carousel-image');
  const mouseImages = document.querySelectorAll('#mouse-carousel .carousel-image');

  function rotateImagesSync() {
    // Clear previous images
    keyboardImages.forEach(img => img.classList.remove('active'));
    mouseImages.forEach(img => img.classList.remove('active'));

    // Show next image by index
    if (keyboardImages.length > 0)
      keyboardImages[currentIndex % keyboardImages.length].classList.add('active');
    if (mouseImages.length > 0)
      mouseImages[currentIndex % mouseImages.length].classList.add('active');

    currentIndex++;
  }

  // Initial display
  rotateImagesSync();

  // Set interval for both carousels
  setInterval(rotateImagesSync, rotationInterval);

