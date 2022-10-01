const reload = document.querySelector('#reload');

reload.addEventListener('click', () => {
  setTimeout(() => {
      window.location.reload(true);
  }, 200);
});
