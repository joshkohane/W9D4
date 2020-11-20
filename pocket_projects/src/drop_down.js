
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let aTags = [];
  Object.keys(dogs).forEach(dog => {
    let tag = document.createElement('a');
    tag.textContent = dog;
    tag.setAttribute("href", dogs[dog]);
    let li = document.createElement('li')
    li.appendChild(tag)
    li.classList.add('dog-link')
    aTags.push(li)
  })
  
  return aTags
}

function attachDogLinks() {
  
  let dogLinks = dogLinkCreator()
  dogLinks.forEach(li => {
    // debugger
    let dropDown = document.getElementsByClassName('drop-down-dog-list')
    dropDown[0].appendChild(li)
  })
    
}

attachDogLinks()

function handleEnter() {
  const dropDown = document.querySelectorAll('.dog-link')
  dropDown.forEach(child => child.classList.remove('open'))
}

function handleLeave() {
  const dropDown = document.querySelectorAll('.dog-link')
  dropDown.forEach(child => child.classList.add('open'))
}

const dogDropDown = document.getElementsByClassName('drop-down-dog-nav')
dogDropDown[0].addEventListener('mouseenter', handleEnter)
dogDropDown[0].addEventListener('mouseleave', handleLeave)

// dogLinkCreator(dogs)