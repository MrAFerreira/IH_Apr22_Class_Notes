//DOM Manipulation
//Syntax
//let element = document.getElementById('some-id')

let branchDiv = document.getElementById('branch');

console.log(branchDiv);

branchDiv.innerHTML = 'This is a branch';

branchDiv.style.border = '2px solid black';

branchDiv.style.backgroundColor = 'green';

const changeColor = (element) => {
  if (element.style.backgroundColor === 'green') {
    element.style.backgroundColor = '#ff0000';
  } else {
    element.style.backgroundColor = 'green';
  }
};

//setInterval(changeColor, 1000, branchDiv);

let leaves = document.getElementsByClassName('leaf');

//console.log(leaves);

const randomNumbers = () => {
  for (let i = 0; i < leaves.length; i++) {
    leaves[i].innerHTML = Math.floor(Math.random() * 10);
  }
};

//let leavesArray = [...leaves]

//setInterval(randomNumbers, 1000);

let allDivs = document.getElementsByTagName('div');

//console.log(allDivs);

let firstLeaf = document.querySelector('.leaf');

console.log(firstLeaf);

let queryLeaves = document.querySelectorAll('.leaf');

console.log(queryLeaves);

let twigDiv = document.querySelector('.twig');

//twigDiv.className = 'leaf';

//console.log(twigDiv.className);

//Classlist

twigDiv.classList.add('fruit');
twigDiv.classList.toggle('twig');
twigDiv.classList.remove('fruit');

console.log(twigDiv.className);

branchDiv.id = 'tree';
console.log(branchDiv.id);
