function removeGlow() {
  const cinematics = document.querySelector('#cinematics');
  if (cinematics) {
    cinematics.style.display = 'none';
  }
}

const observer = new MutationObserver(() => {
  removeGlow();
});

observer.observe(document.body, { childList: true, subtree: true });
removeGlow();