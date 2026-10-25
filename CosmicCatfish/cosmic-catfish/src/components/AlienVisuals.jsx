import Martian from "./Martian";
import Venus from "./Venus";
// import SecondMartian from "./SecondMartian";   // add when an alien needs it

export default function AlienPicture({ alien }) {
  const name = String(alien?.name ?? "").trim().toLowerCase();

  let Art = null;
  if (name.includes("beep")) Art = Martian;        // Beepboopba
  else if (name.includes("leap")) Art = Venus;     // Leaploopla
  // else if (name.includes("part-of-a-name")) Art = SecondMartian;

  if (Art) {
    return (
      // this wrapper makes the drawing fit the box height, keeping its proportions
      <div style={{ height: "100%", aspectRatio: "200 / 260", maxWidth: "100%" }}>
        <Art />
      </div>
    );
  }

  if (alien?.image) return <img src={alien.image} alt={alien.name ?? "Alien"} />;
  return null;
}