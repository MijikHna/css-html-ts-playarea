import svgImg from '../image/West-Africa.svg';

fetch(svgImg).then(async (response) => {
  const svgElem = document.querySelector('#svg');
  if (svgElem) svgElem.innerHTML = await response.text();

  document.querySelectorAll('path')?.forEach(westAfricaCountry => {
    westAfricaCountry.addEventListener('click', event => {
      const target = event.target as HTMLElement;

      alert(`You have clicked on a country ${target.getAttribute('data-name')}`);

      console.log(target.dataset.name);
    });
  })
});


