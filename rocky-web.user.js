// ==UserScript==
// @name         Rocky Rabbit Web
// @version      1.1
// @description  Запуск Rocky Rabbit в браузере
// @author       mudachyo
// @match        https://web.telegram.org/*/*
// @match        https://play.rockyrabbit.io/*
// @grant        none
// @icon         https://rockyrabbit.io/favicon/favicon.ico
// @downloadURL  https://github.com/mudachyo/Rocky-Rabbit/raw/main/rocky-web.user.js
// @updateURL    https://github.com/mudachyo/Rocky-Rabbit/raw/main/rocky-web.user.js
// @homepage     https://github.com/mudachyo/Rocky-Rabbit
// ==/UserScript==

(function() {
    function updateIframeSrc() {
      const iframe = document.querySelector('iframe.payment-verification');
  
      if (iframe) {
        let src = iframe.src;
  
        if (src.includes('play.rockyrabbit.io') && !src.includes('tgWebAppPlatform=ios')) {
          if (src.includes('tgWebAppPlatform=weba')) {
            src = src.replace(/tgWebAppPlatform=weba/g, 'tgWebAppPlatform=ios');
          } else if (src.includes('tgWebAppPlatform=web')) {
            src = src.replace(/tgWebAppPlatform=web/g, 'tgWebAppPlatform=ios');
          }
  
          iframe.src = src;
  
          console.log('Ссылка обновлена:', src);
        }
      } else {
      }
    }
  
    setInterval(updateIframeSrc, 2000);
  })();