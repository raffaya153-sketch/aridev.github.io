<script>
function checkOrientation() {
  const overlay = document.getElementById("rotateOverlay");
  if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
    overlay.style.display = "flex";
  } else {
    overlay.style.display = "none";
  }
}

function hideRotate() {
  document.getElementById("rotateOverlay").style.display = "none";
}

window.addEventListener("resize", checkOrientation);
window.addEventListener("load", checkOrientation);
</script>
