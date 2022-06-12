/*
As we run out or resources on Earth we are planning an invasion on planet Otatop 
which seems to have very suitable atmosphere for us. But there is a tiny problem -- it 
is already inhibited by some local creatures. And they are willing to protect it 
from us (how dare they!).
So we assembled an army of stormtroopers willing to defeat and conquer. 
First battle is happening on Otatop, if we defeat them there -- war is over!!!
If not, next battle is one step closer to Earth, on the SuperNova13! From there, if those annoying aliens 
will defeat us, the battle is moving to Z666, and so on. If we win a battle we are moving to the next battle in the opposite direction toward Otapop.
Losing on Earth means end of game for us. 
So the race losing the battle on their home planet lose the game and seize to exist. 
Alternatively, the army first to perish completely also means kaput for the player 
and end game. If unit is perished completely, it can't go to the next battle, duh.

For every battle for simplicity we randomly pick units from both armies and throw them 
into the fight, the unit winning determines the results for the battle, also based on 
the damage caused we count how many opposite units are dead. 
*/
let humans = [
  {
    unit: "karateMasters",
    qty: 3000,
    strength: 5,
    rateOfFire: 20,
    stamina: 10,
  },
  { unit: "teslaTanks", qty: 50, strength: 100, rateOfFire: 5, stamina: 100 },
  {
    unit: "bostonDynamicsSpot",
    qty: 200,
    strength: 50,
    rateOfFire: 15,
    stamina: 60,
  },
];
let aliens = [
  { unit: "motherLord", qty: 1, strength: 500, rateOfFire: 50, stamina: 300 },
  {
    unit: "yellowCreature",
    qty: 250,
    strength: 200,
    rateOfFire: 6,
    stamina: 90,
  },
  { unit: "slimyThing", qty: 2500000, strength: 3, rateOfFire: 30, stamina: 7 },
];
let locations = ["Earth", "Moon", "Z666", "SuperNova13", "Otatop"];

let battle = (locations, humansarr, aliensarr) => {
  for (let i = locations.length - 1; i > -1; i--) {
    // debugger;
    console.log(`Prepare for a battle on ${locations[i]}`);
    let humanIdx = Math.trunc(Math.random() * humansarr.length - 1);
    let aliensIdx = Math.trunc(Math.random() * aliensarr.length - 1);
    let humanUnit = humansarr[humanIdx].unit;
    let alienUnit = aliensarr[aliensIdx].unit;
    let humanSoldierAmount = humansarr[humanIdx].qty;
    let alienSoldierAmount = aliensarr[aliensIdx].qty;
    let humanSoldierDam =
      humanSoldierAmount *
      humansarr[humanIdx].strength *
      humansarr[humanIdx].rateOfFire;
    let alienSoldierDam =
      alienSoldierAmount *
      aliensarr[aliensIdx].strength *
      aliensarr[aliensIdx].rateOfFire;
    console.log(
      `${humanUnit} and ${alienUnit} will be fighting with each other!`
    );
    let humankills = humanSoldierDam / aliensarr[aliensIdx].stamina;
    let alienkills = alienSoldierDam / humansarr[humanIdx].stamina;
    let humansurvivors = humanSoldierAmount - alienkills;
    let aliensurvivors = alienSoldierAmount - humankills;

    if (humansurvivors > 0) humanSoldierAmount = humansurvivors;
    else if (humansurvivors < 0) humansarr.splice(humanIdx, 1);
    if (aliensurvivors < 0) aliensarr.splice(aliensIdx, 1);
    else if (aliensurvivors > 0) alienSoldierAmount = aliensurvivors;

    if (humanSoldierDam >= alienSoldierDam) {
      if (i == locations.length - 1 || aliensarr.length < 1) {
        return "You won the war with aliens";
      } else {
        console.log(
          `You won the battle on ${locations[i]} - Army's left: humans:${humansarr.length} aliens: ${aliensarr.length}`
        );
        i += 2;
      }
    } else {
      if (i == 0 || humansarr.length < 1) {
        return "You lost a war with aliens";
      } else {
        console.log(
          `You lost a battle with aliens, let's move to ${
            locations[i - 1]
          } - Army's left: humans:${humansarr.length} aliens: ${
            aliensarr.length
          }`
        );
      }
    }
  }
};
battle(locations, humans, aliens);
