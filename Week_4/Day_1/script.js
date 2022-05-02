//API - Application programmable interface

//REST API

//fetch API

/* fetch('https://api.spacexdata.com/v4/launches')
  //.json() parses the json object into regular javascript
  .then((response) => response.json())
  .then((data) => {
    data.forEach((launch) => {
      //Creating an img element
      const patchImage = launch.links.patch.small;
      const imgElement = document.createElement('img');

      //setting the attributes (src and width)
      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      //appending to the body
      document.body.appendChild(imgElement);
    });
  }); */

const displayPatches = async (limit = 10) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const parsedData = await response.json();
    console.log(parsedData[0]);

    const launchesToDisplay = parsedData.slice(0, limit);

    launchesToDisplay.forEach((launch) => {
      //Creating an img element

      const patchImage = launch.links.patch.small;
      const launchName = launch.name;
      const wikiLink = launch.links.wikipedia;
      const youtubeId = launch.links.youtube_id;

      const div = document.createElement('div');
      div.innerHTML = `
      <h1><a href=${wikiLink} target="_blank">${launchName}</a></h1>
      <img src=${patchImage} width=200>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `;
      document.body.appendChild(div);

      /*

      //setting the attributes (src and width)
      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200); */

      //appending to the body
    });

    console.log(parsedData);
  } catch (error) {
    console.log(error);
  }
};

displayPatches(5);
