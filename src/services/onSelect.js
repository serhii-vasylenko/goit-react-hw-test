export const onSelect = option => {
    const cards = document.querySelectorAll('div.all');
    if (option.value === 'followings') {
      [...cards]
        .forEach(card =>
          card.classList.contains(option.value)
            ? card.closest('li').classList.remove('hidden')
            : card.closest('li').classList.add('hidden')
        );
    }
    if (option.value === 'follow') {
      [...cards].forEach(card =>
        card.classList.contains(option.value)
          ? card.closest('li').classList.remove('hidden')
          : card.closest('li').classList.add('hidden')
      );
    }
    if (option.value === 'all') {
      [...cards].forEach(card => card.closest('li').classList.remove('hidden'));
    }
  };