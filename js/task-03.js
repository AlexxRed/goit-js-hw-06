const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const makeOneElementOfGallary = ({url, alt}) => {
  return `
  <li>
      <img src="${url}" alt="${alt}" width="100%" height="350px">
  </li>
  `
};

const gallaryEl = document.querySelector('.gallery');
gallaryEl.style.display = 'flex';
gallaryEl.style.justifyContent = 'space-between';
gallaryEl.style.alignItems = 'center';
gallaryEl.style.backgroundColor = 'pink';
gallaryEl.style.paddingTop = '5px';






const makeMarkupGallary = images.
  map(makeOneElementOfGallary).
  join('');

gallaryEl.insertAdjacentHTML('afterbegin', makeMarkupGallary)



