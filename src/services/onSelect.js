export const onSelect = ({value}) => {
  const cards = document.querySelectorAll('div.all');
  [...cards].forEach(card =>
    card.classList.contains(value)
      ? card.closest('li').classList.remove('hidden')
      : card.closest('li').classList.add('hidden')
  );
};
