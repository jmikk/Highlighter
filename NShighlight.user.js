// ==UserScript==
// @name         Auction color
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Colors ask and bis columns on the auctions page
// @author       9003
// @updateURL    https://github.com/jmikk/Highlighter/raw/main/NShighlight.user.js
// @match        https://www.nationstates.net/*/page=deck/show_trades=auctions
// @match        https://www.nationstates.net/page=deck/show_trades=auctions
// @match        https://www.nationstates.net/*/page=deck/show_market=auctions
// @match        https://www.nationstates.net/page=deck/show_market=auctions
// @match        https://www.nationstates.net/page=deck/show_market=auctions?start=*
// @match        https://www.nationstates.net/*/page=deck/show_trades=bids
// @match        https://www.nationstates.net/page=deck/show_trades=bids
// @match        https://www.nationstates.net/*/page=deck/show_trades=bids
// @match        https://www.nationstates.net/page=deck/show_trades=bids
// @match        https://www.nationstates.net/page=deck/show_trades=bids?start=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nationstates.net
// @grant        none
// ==/UserScript==

(function main() {
    'use strict';
if (window.location.href.includes("auctions")){

    const sell = document.getElementsByClassName("cardprice_sell");
    const buy = document.getElementsByClassName("cardprice_buy");

    for (let i = 0; i < sell.length; i++) {
        let color = "yellow";
        if (sell[i].textContent == buy[i].textContent) {
            color = "lightgreen";
        }

        sell[i].style.background = color;
        buy[i].parentElement.style.background = color;
    }}


if (window.location.href.includes("show_trades=bids")){
    var star = document.getElementsByClassName("cardprice_buy")
    for( let x = 0; x < star.length; x++){
        if(star[x].textContent.includes("*")) {
        star[x].parentElement.style.background = "yellow";
       }
    }
}

if (window.location.href.includes("asks")){

    var star2 = document.getElementsByClassName("cardprice_buy")
    for( let x = 0; x < star2.length; x++){
        if(star2[x].textContent.includes("*")) {
        star2[x].parentElement.style.background = "yellow";
       }
    }

}
})();
