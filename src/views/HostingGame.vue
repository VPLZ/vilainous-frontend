<script lang="ts" setup>
function copyGameId() {
  const idSpan = document.querySelector('#gameId') as HTMLSpanElement
  let gameId
  if (idSpan) {
    gameId = idSpan.innerText
    navigator.clipboard.writeText(gameId)
    alert("L'id de la partie a été copiée")
  } else {
    alert("Problème lors de la copie de l'id !")
  }
}
</script>
<template>
  <section class="playersSection">
    <h2>Joueurs :</h2>
    <div class="informationsContainer">
      <p>Players 0/4</p>
      <p>
        Id de la partie :<span id="gameId">IDXXX</span>
        <span id="copyGameId" @click="copyGameId">
          <img src="/images/icons/clipboard.png" alt="Outil de copie de l'id" />
        </span>
      </p>
    </div>
    <div class="playersContainer">
      <p id="host">LUcas</p>
      <p>LUcas</p>
      <p>LUcas</p>
      <p>LUcas</p>
    </div>
  </section>
  <section class="friendsSection">
    <h2>Invite Friends :</h2>
    <div>
      <label for="inviteFriend">Rechercher une personne : </label>
      <input type="text" id="inviteFriend" name="inviteFriend" placeholder="Example: Fildrong" />
      <div class="friendsContainer">
        <p>A</p>
        <p>A</p>
        <p>A</p>
        <p>A</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
#copyGameId {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  :hover {
    cursor: pointer;
    background-color: #2f2f2f;
  }
}
p,
label {
  color: white;
  margin-bottom: 5px;
}
.playersContainer p,
.friendsContainer p {
  border: 1px white solid;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.informationsContainer {
  display: flex;
  gap: 30px;
  padding: 5px;
  p {
    display: flex;
    align-items: center;
  }
}
.playersSection,
.friendsSection {
  margin-right: 40px;
  border: 2px white solid;
  border-radius: 5%;
  padding: 15px;
}
.playersContainer {
  background-color: #262626;
}
</style>
