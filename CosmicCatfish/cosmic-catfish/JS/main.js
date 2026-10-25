let dialouge = {};
let aliens = {};
let cutscene = [];
let cutsceneIndex = 0;

Promise.all([
  fetch("data/planets.json").then((res) => res.json()),
  fetch("data/aliens.json").then((res) => res.json()),
  fetch("data/ChatDialogue.json").then((res) => res.json()),
  fetch("data/cutscene.json").then((res) => res.json()),
]).then(([planetData, AlienData, dialougeData, cutsceneData]) => {
  const planets = planetData.planetInformation;
  const profiles = AlienData.Profiles;
  dialouge = dialougeData;
  aliens = profiles;
  cutscene = cutsceneData.lines;
  console.log(planets, profiles, dialouge);
  let html = "";

  for (const key in planets) {
    const planet = planets[key];
    html += "<h2>" + planet.name + "</h2>";

    for (const item in planet.data) {
      const value = planet.data[item];

      if (item === "atmosphere") {
        let gases = "";
        for (const element in value) {
          gases += element + " " + value[element] + "%, ";
        }
        html += "<p>atmosphere: " + gases + "</p>";
      } else {
        html += "<p>" + item + ":" + value + "</p>";
      }
    }
  }
  document.getElementById("output").innerHTML = html;

  let profileHTML = "";

  for (const key in profiles) {
    const alien = profiles[key];
    profileHTML += "<h2>" + alien.Name + "</h2>";
    profileHTML += "<p>Age:" + alien.Age + "</p>";
    profileHTML += "<p>Job:" + alien.Job + "</p>";
    profileHTML += "<p>From:" + alien.Planet + "</p>";
    profileHTML += "<p> Intrests:" + alien.interestedIn + "</p>";
    profileHTML += "<p> Hobbies:" + alien.Hobbies + "</p>";
    profileHTML += "<p> BIO:" + alien.BIO + "</p>";
    profileHTML +=
      "<button onclick=\"startDate('" + key + "')\">Go on a date</button>";
  }
  document.getElementById("profiles").innerHTML = profileHTML;
  showCutscene();
});
function startDate(alienKey) {
  showScene(alienKey, "start");
}
function showScene(alienKey, sceneID) {
  const dateNum = document.getElementById("date");

  if (!dialouge[alienKey]) {
    dateNum.innerHTML = "<p>This date will not happen.</p>";
    return;
  }

  const scene = dialouge[alienKey][sceneID];

  let html = "<h2>Date with " + aliens[alienKey].Name + "</h2>";
  html += "<p>" + scene.text + "</p>";

  if (scene.ending) {
    if (scene.ending == "bad") {
      html += "<h3> Date over. Your date found out you are a human spy.</h3>";
    } else {
      html +=
        "<h3> Data successful. Your match has given you the data you need.</h3>";
    }
    html +=
      "<button onclick=\"startDate('" + alienKey + "')\">Try again</button>";
    dateNum.innerHTML = html;
    return;
  }
  for (const choice of scene.choices) {
    html +=
      "<button onclick=\"showScene('" +
      alienKey +
      "', '" +
      choice.next +
      "')\">" +
      choice.text +
      "</button>";
  }
  dateNum.innerHTML = html;
}
export default function ShowCutscene() {
  const box = document.getElementById("cutscene");
  const line = cutscene[cutsceneIndex];
  const last = cutsceneIndex === cutscene.length - 1;

  let button = "";
  if (last) {
    button =
      "<button class='cutscene-btn' onclick='startGame()'>Start mission</button>";
  } else {
    button =
      "<button class = 'cutscene-btn' onclick='nextLine()'>Next</button>";
  }

  let html = "<div class='cutscene-box'>";
  html += "<div class ='stage'>";
  html += "<img class ='char char-left' src='Images/agent.png' alt=''>";
  html += "<img class = 'char char-right' src='Image/commander.png'alt=''>";
  html += "</div>";
  html += "<div class ='dialouge-box'>";
  html += "<p class ='speaker-name'>" + line.speaker + "</p>";
  html += "<p class = 'speech-text'>" + line.text + "</p>";
  html += button;
  html += "</div>";
  html += "</div>";

  box.innerHTML = html;
}
function nextLine() {
  cutsceneIndex++;
  showCutscene();
}
function startGame() {
  document.getElementById("cutscene").style.display = "none";
  document.getElementById("game").style.display = "block";
}
