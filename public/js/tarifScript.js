const formBlock = document.querySelector('#formTar');
formBlock.addEventListener('submit', async (e) => {
  e.preventDefault();
  const newTar = Object.fromEntries(new FormData(formBlock));
  console.log('-----------------', newTar);
  const { priceAdult, priceWeekendAdult, priceKid, priceWeekendKid } = newTar;
  const response = await fetch('/tarif', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceAdult, priceWeekendAdult, priceKid, priceWeekendKid,
    }),
  });
});
