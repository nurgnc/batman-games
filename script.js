const gameList = document.getElementById("game-list");
const URL = 'https://www.cheapshark.com/api/1.0/deals?title="batman"&onSale=1';

function getBatmanGames() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      data.map((item, index) => {
        html += `
                <div class = "game-item w-3/12 border rounded-md  border-sky-500 flex flex-col  p-5 m-2"  data-id = "${item.gameID}">
                    <div class = "game-img flex flex-col items-center">
                        <img class="object-contain h-48 w-96" src = "${item.thumb}" alt = "batman-game">
                    </div>
                    <div class = "game-name mt-2">
                        <div class="flex flex-row items-center justify-between">
                          <h3 class="text-lg font-semibold">${item.title}</h3>
                          <div class="border text-white bg-green-400 p-2 rounded-full">${item.dealRating}</div>
                        </div>
                        <div>
                          <span class="font-mono font-bold">$${item.normalPrice}</span>
                          <span class="font-mono text-sm line-through text-red-600 font-semibold ml-3">$${item.salePrice}</span>
                        </div>
                    </div>
                </div>
                `;
      });
      gameList.innerHTML = html;
    });
}

getBatmanGames();
