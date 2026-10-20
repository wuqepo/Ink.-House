
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.catalog_filter_btn');
  const cards = document.querySelectorAll('.catalog_card');

  function filterCards(country) {
    cards.forEach(card => {
      const cardCountry = card.getAttribute('data-country');
      card.style.display = (cardCountry === country) ? 'block' : 'none';
    });
  }

  function setActiveButton(activeButton) {
    buttons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
  }

  // При загрузке страницы: показать только Францию
  filterCards('France');
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === 'France') {
      btn.classList.add('active');
    }
  });

  // Обработка кликов
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedCountry = button.getAttribute('data-filter');
      filterCards(selectedCountry);
      setActiveButton(button);
    });
  });
});


