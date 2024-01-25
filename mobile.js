if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent,
  )
) {
  console.log('Вы используете мобильное устройство (телефон или планшет).');
  document.querySelector('.pc').classList.add('hidden');
  document.querySelector('.line').classList.add('hidden');
  document.querySelector('.frameFooter').classList.add('hidden');
  document.querySelector('.mySwiper ').classList.add('hidden');
  document.querySelector('.mobile').classList.remove('hidden');
} else {
  console.log('Вы используете ПК.');
  document.querySelector('.mobile').classList.add('hidden');
  document.querySelector('.pc').classList.remove('hidden');
}
