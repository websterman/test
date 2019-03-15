window.onload = function() {
  class Game {
    constructor(player) {
      this.playerName = player.dataset.name;
      this.playerStrength = player.dataset.strength;
      this.playerHealth = player.dataset.health;
    }
    updateGameState() {
      if (this.monsterHealth < 1) {
        this.consolePrint(`${this.monsterName} is DEAD!!`);
        this.spawnMonster();
      }
      document
        .querySelector("#playerName")
        .setAttribute("value", this.playerName);
      document
        .querySelector("#playerStrength")
        .setAttribute("value", this.playerStrength);
      document
        .querySelector("#playerHealth")
        .setAttribute("value", this.playerHealth);
      document
        .querySelector("#monsterName")
        .setAttribute("value", this.monsterName);
      document
        .querySelector("#monsterStrength")
        .setAttribute("value", this.monsterStrength);
      document
        .querySelector("#monsterHealth")
        .setAttribute("value", this.monsterHealth);
    }
    spawnMonster() {
      let nextMonster = document.querySelector("#monsters input:nth-child(1)");
      if (!nextMonster) {
        alert("victory!");
      }
      this.monsterName = nextMonster.dataset.name;
      this.monsterHealth = nextMonster.dataset.health;
      this.monsterStrength = nextMonster.dataset.strength;
      nextMonster.remove();
    }
    consolePrint(text) {
      document.querySelector("#console").innerHTML += text;
    }
    performCombat() {
      this.consolePrint(
        `<p>${this.playerName} attacks ${this.monsterName} for ${
          this.playerStrength
        } damage!</p>`
      );

      this.consolePrint(
        `<p>${this.monsterName} attacks ${this.playerName} for ${
          this.monsterStrength
        } damage!</p>`
      );
      this.playerHealth -= this.monsterStrength;
      this.monsterHealth -= this.playerStrength;
    }
  }
  var DOD = new Game(document.querySelector("#playerData"));
  DOD.spawnMonster();
  DOD.updateGameState();

  document.querySelector("button").onclick = function() {
    DOD.performCombat();
    DOD.updateGameState();
  };
};
