
function formatDate(stringDate) {
  element = stringDate.split('-');
  date = new Date(element[0], element[1], element[2]);
  return date.toDateString().slice(4);
}
function formatListe(stringList) {
  return stringList.join(", ");
}
function minutesToHoursMinutes(duration) {
  hours = Math.floor(duration / 60);
  minutes = duration % 60;
  if (minutes.toString().length === 1) {
    minutes = "0" + minutes.toString();
  }
  return `${hours}h ${minutes}`;
}

function formatInt(integer) {
  if (integer===null) {
    return integer;
  }
  let response = new Intl.NumberFormat(useGrouping=true).format(integer)
  return response
}

let callAPI = function(url, position=0) {
  let urlsList = [];
  let imagesList = [];
  fetch(url)
    .then((response) => {
      response.json().then((data) => {
        for(let i = 0; i < data.results.length; i++){
          urlsList.push(data.results[i]['url']);
          imagesList.push(data.results[i]['image_url'])
        }
      })
      fetch(url+"&page=2")
        .then((response) => {
          response.json().then((data) => {
            for(let i = 0; i < 2; i++){
              urlsList.push(data.results[i]['url']);
              imagesList.push(data.results[i]['image_url'])
            }
          if (position === 0) {
            document.querySelector(".best-film__image").firstElementChild.src = imagesList[0];
          }
          for (let i = 0; i<imagesList.length; i++){
            document.querySelectorAll(".film-list__slide")[i+position].style.backgroundImage = `url(${imagesList[i]})`;
            document.querySelectorAll(".modal__image img")[i+position].src = imagesList[i];
          };
          for (let i = 0; i<urlsList.length; i++) {
            fetch(urlsList[i]).then((response) => {
              response.json().then((data) => {
                if (i === 0 && position === 0) {
                  document.querySelector(".best-film__title h1").innerHTML = data['title'];
                  document.querySelector(".best-film__description p").innerHTML = data['description'];
                }

                document.querySelectorAll(".modal__details h1")[i+position].innerHTML = data['title'];
                document.querySelectorAll(".modal__details table")[i+position].rows[0].cells[1].innerHTML = data['directors'];
                document.querySelectorAll(".modal__details table")[i+position].rows[0].cells[3].innerHTML = formatListe(data['countries']);
                document.querySelectorAll(".modal__details table")[i+position].rows[1].cells[1].innerHTML = minutesToHoursMinutes(data['duration']);
                document.querySelectorAll(".modal__details table")[i+position].rows[1].cells[3].innerHTML = formatListe(data['genres']);
                document.querySelectorAll(".modal__details table")[i+position].rows[2].cells[1].innerHTML = formatDate(data['date_published']);
                document.querySelectorAll(".modal__details table")[i+position].rows[2].cells[3].innerHTML = formatInt(data['worldwide_gross_income']);
                document.querySelectorAll(".modal__details table")[i+position].rows[3].cells[1].innerHTML = formatListe(data['actors']);
                
                document.querySelectorAll(".modal__film-notes-resume table")[i+position].rows[1].cells[0].innerHTML = data['avg_vote']+'/10';
                document.querySelectorAll(".modal__film-notes-resume table")[i+position].rows[3].cells[0].innerHTML = data['imdb_score']+'/10';
                document.querySelectorAll(".modal__film-resume p")[i+position].innerHTML = data['long_description'];
              });
            });
          }
        });
      });
    })
    .catch((error) => {
      console.log(error);
    }
  );
};

callAPI("http://localhost:8000/api/v1/titles/?sort_by=-Imdb_score,-votes",0);
callAPI("http://localhost:8000/api/v1/titles/?genre=Fantasy&sort_by=-Imdb_score,-votes",7);
callAPI("http://localhost:8000/api/v1/titles/?genre=Horror&sort_by=-Imdb_score,-votes",14);
callAPI("http://localhost:8000/api/v1/titles/?genre=History&sort_by=-Imdb_score,-votes",21);

leftArrows = document.getElementsByClassName("leftScroll")
rightArrows = document.getElementsByClassName("rightScroll")

for (let leftArrow of leftArrows) {
  leftArrow.onclick = function() {leftArrow.parentElement.children[1].scrollBy(-152,0);};
};

for (let rightArrow of rightArrows) {
  rightArrow.onclick = function() {rightArrow.parentElement.children[1].scrollBy(152,0)};
};





// Get the modal

let bestRatedModals = document.querySelectorAll('.modal')
// Get the button that opens the modal

let bestRatedButtons = document.querySelectorAll('.film-list__slide')
// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("close");



// When the user clicks the button, open the modal 
for (let i = 0; i < bestRatedButtons.length; i++) {
  bestRatedButtons[i].onclick = function() {
    bestRatedModals[i].style.display = "block";
  }
}





for (let i = 0; i < bestRatedModals.length; i++) {
// When the user clicks on <span> (x), close the modal
  spans[i].onclick = function() {
    bestRatedModals[i].style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target === bestRatedModals[i]) {
      bestRatedModals[i].style.display = "none";
    }
  }
}