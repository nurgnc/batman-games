const gameList = document.getElementById("game-list");
const URL = 'https://www.cheapshark.com/api/1.0/deals?title="batman"&onSale=1';

function getBatmanGames() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let html = "";
      data.map((item, index) => {
        // console.log(item);
        html += `
                <div class = "game-item w-3/12 border border-sky-500 flex flex-col items-center justify-center p-5 m-2"  data-id = "${item.gameID}">
                    <div class = "game-img">
                        <img src = "${item.thumb}" alt = "batman-game">
                    </div>
                    <div class = "game-name">
                        <h3>${item.title}</h3>
                    </div>
                </div>
                `;
      });
      console.log(html);
      gameList.innerHTML = html;
    });
}

getBatmanGames();
