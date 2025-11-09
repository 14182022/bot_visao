document.getElementById("pixBtn").addEventListener("click", () => {
  document.getElementById("pixModal").style.display = "block";
});
document.getElementById("closeModal").addEventListener("click", () => {
  document.getElementById("pixModal").style.display = "none";
});
window.onclick = function(event) {
  const modal = document.getElementById("pixModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
