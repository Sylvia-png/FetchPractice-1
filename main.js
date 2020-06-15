let arrayOfUsers = [];
window.onload = function() {

}

const getUser = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(user => user.results.map(person => {
      arrayOfUsers.push(person)
      const list = document.getElementById("all-users");
      const li = document.createElement('li');
      // create card id wrapper
    const idCard = document.createElement('div');
    idCard.className = "idCard";

    //create title
    const cardTitle = document.createElement('h3');
    cardTitle.innerText = "Address Book";
    idCard.appendChild(cardTitle);

    // create card image
    const cardImg = document.createElement('div');
    cardImg.className = "img";
    const pic = document.createElement('img');
    pic.setAttribute("src", `${person.picture.thumbnail}`);
    cardImg.appendChild(pic);
    idCard.appendChild(cardImg);

    // create card info
    const cardInfo = document.createElement('div');
    cardInfo.className = "info";
    const cardInfoList = document.createElement('ul');

    const cardInfoGender = document.createElement('li');
    cardInfoGender.innerText = "Gender: " + person.gender;
    cardInfoList.appendChild(cardInfoGender);

    const cardInfoTitle = document.createElement('li');
    cardInfoTitle.innerText = "Title: " + person.name.title;
    cardInfoList.appendChild(cardInfoTitle);

    const cardInfoName = document.createElement('li');
    cardInfoName.innerText = "Name: " + person.name.first + " " + person.name.last;
    cardInfoList.appendChild(cardInfoName);

    const cardInfoLocation = document.createElement('li');
    cardInfoLocation.innerText = "Location: " + person.location.street.number + " " + person.location.street.name;
    cardInfoList.appendChild(cardInfoLocation);

    const cardInfoCity = document.createElement('li');
    cardInfoCity.innerText = "City: " + person.location.city + " " + person.location.state + " " + person.location.country;
    cardInfoList.appendChild(cardInfoCity);

    cardInfo.appendChild(cardInfoList);
    idCard.appendChild(cardInfo);
    li.appendChild(idCard);
    list.appendChild(li);


    }));
};
const getUsers = () =>{
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(user => user.results.map(person => {
    arrayOfUsers.push(person)
    const list = document.getElementById("all-users");
    const li = document.createElement('li');
    // create card id wrapper
    const idCard = document.createElement('div');
    idCard.className = "idCard";

    //create title
    const cardTitle = document.createElement('h3');
    cardTitle.innerText = "Address Book";
    idCard.appendChild(cardTitle);

    // create card image
    const cardImg = document.createElement('div');
    cardImg.className = "img";
    const pic = document.createElement('img');
    pic.setAttribute("src", `${person.picture.thumbnail}`);
    cardImg.appendChild(pic);
    idCard.appendChild(cardImg);

    // create card info
    const cardInfo = document.createElement('div');
    cardInfo.className = "info";
    const cardInfoList = document.createElement('ul');

    const cardInfoGender = document.createElement('li');
    cardInfoGender.innerText = "Gender: " + person.gender;
    cardInfoList.appendChild(cardInfoGender);

    const cardInfoTitle = document.createElement('li');
    cardInfoTitle.innerText = "Title: " + person.name.title;
    cardInfoList.appendChild(cardInfoTitle);

    const cardInfoName = document.createElement('li');
    cardInfoName.innerText = "Name: " + person.name.first + " " + person.name.last;
    cardInfoList.appendChild(cardInfoName);

    const cardInfoLocation = document.createElement('li');
    cardInfoLocation.innerText = "Location: " + person.location.street.number + " " + person.location.street.name;
    cardInfoList.appendChild(cardInfoLocation);

    const cardInfoCity = document.createElement('li');
    cardInfoCity.innerText = "City: " + person.location.city + " " + person.location.state + " " + person.location.country;
    cardInfoList.appendChild(cardInfoCity);

    cardInfo.appendChild(cardInfoList);
    idCard.appendChild(cardInfo);
    li.appendChild(idCard);
    list.appendChild(li);

  }));
};
