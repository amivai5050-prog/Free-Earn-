let coins = 0;

function addCoin(){
  coins += 10;

  document.getElementById("coins")
    .innerText = "Coins: " + coins;
}
const tg = window.Telegram.WebApp;

tg.expand();

console.log("Mini App Started");
if (window.Telegram && Telegram.WebApp) {

  const tg = Telegram.WebApp;

  tg.expand();

  const user = tg.initDataUnsafe.user;

  if (user) {

    document.body.innerHTML += `
      <h3>User Info</h3>
      <p>ID: ${user.id}</p>
      <p>Name: ${user.first_name}</p>
    `;
  }
}
