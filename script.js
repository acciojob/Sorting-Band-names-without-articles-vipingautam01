//your code here

let bandNames = ['The Rolling Stones', 'Led Zeppelin', 'The Beatles', 'Aerosmith'];

// Function to remove articles from the band name
function removeArticles(name) {
  return name.replace(/^(a |an |the )/i, '');
}

// Sort the band names in lexicographic order (excluding articles)
bandNames.sort((a, b) => {
  const nameA = removeArticles(a.toUpperCase());
  const nameB = removeArticles(b.toUpperCase());
  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  }
  return 0;
});

// Create a UL element with sorted band names as LI elements
const ulElement = document.createElement('ul');
ulElement.id = 'band';

bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

// Add the UL element to the document body
document.body.appendChild(ulElement);