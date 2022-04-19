let paragraph = document.getElementById('paragraph');
let paragraphId = paragraph.getAttribute('id');

console.log(paragraphId);

let aTag = document.getElementsByTagName('a')[0];

let hRef = aTag.getAttribute('href');

console.log(hRef);

aTag.setAttribute('id', 'google-link');
aTag.setAttribute('target', '_blank');

aTag.removeAttribute('id');

let h2Tag = document.createElement('h2');
h2Tag.innerHTML = 'My DOM example';

let parent = document.getElementsByTagName('body')[0];

//Append child adds at the end of the element
//parent.appendChild(h2Tag);

//insertBefore

parent.insertBefore(h2Tag, paragraph);

//parent.removeChild(paragraph);

let text = document.createTextNode('This text is not part of a tag');

//parent.appendChild(text);
// When the button is clicked it should create an <li></li> inside of the <ul></ul> that has inside "Item number x"

let addButton = document.getElementById('add-button');

let list = document.getElementById('list');

let liTags = document.getElementsByTagName('li');

console.log(liTags);
let nameInput = document.getElementsByTagName('input')[0];

addButton.onclick = () => {
  //Create an li and add whatever is the current input value
  let listItem = document.createElement('li');
  listItem.innerHTML = nameInput.value;

  //listItem.innerHTML = `Item number ${liTags.length + 1}`;

  listItem.onclick = (e) => {
    console.log(e);
    if (e.currentTarget.style.textDecoration === 'line-through') {
      e.currentTarget.style.textDecoration = 'none';
    } else {
      e.currentTarget.style.textDecoration = 'line-through';
    }
  };
  //let li = `<li>Item Number</li>`

  list.appendChild(listItem);
  //Clearing the input
  nameInput.value = '';
};

console.log(nameInput.value);

let sendButton = document.getElementById('send');

sendButton.addEventListener('click', () => {
  console.log(nameInput.value);
});

for (let i = 0; i < liTags.length; i++) {
  liTags[i].onclick = (e) => {
    console.log(e.currentTarget);
  };
}

// Add whatever value is on the input to the list
// If you click the li, cross it, or uncross it if it's already crossed
