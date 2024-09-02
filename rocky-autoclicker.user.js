// ==UserScript==
// @name         Rocky Rabbit Autoclicker
// @version      1.0
// @author       mudachyo
// @match        https://play.rockyrabbit.io/*
// @grant        none
// @icon         https://rockyrabbit.io/favicon/favicon.ico
// @downloadURL  https://github.com/mudachyo/Rocky-Rabbit/raw/main/rocky-autoclicker.user.js
// @updateURL    https://github.com/mudachyo/Rocky-Rabbit/raw/main/rocky-autoclicker.user.js
// @homepage     https://github.com/mudachyo/Rocky-Rabbit
// ==/UserScript==

const MIN_DELAY = 10; // Минимальная задержка между кликами
const MAX_DELAY = 100; // Максимальная задержка между кликами
const PAUSE_DURATION = 60000; // Длительность паузы в миллисекундах
const RELOAD_DELAY = 3000; // Задержка перед перезагрузкой в миллисекундах

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function autoclicker() {
    var energyEl = document.querySelector("div.font-chivo-mono.text-sm.text-ltr span:first-child");
    var energy = energyEl ? parseInt(energyEl.textContent) : null;

    if (energy !== null && energy <= 25) {
        console.log(`Энергия слишком низкая, пауза на минуту. Время паузы: ${PAUSE_DURATION} миллисекунд`);
        setTimeout(autoclicker, PAUSE_DURATION);
        return;
    }

    var el = document.querySelector("#app > div > div.h-screen.max-h-screen.overflow-hidden > div.flex.flex-col.h-screen > div.flex-grow.overflow-x-hidden.overflow-y-auto.max-w-full > div > div > div.my-auto.relative.z-0.flex.items-center.justify-center.h-\\[272px\\] > div");
    if (el) {
        var rect = el.getBoundingClientRect();
        var x = rect.left + Math.random() * rect.width;
        var y = rect.top + Math.random() * rect.height;

        var pointerdownEvent = new PointerEvent('pointerdown', {
            clientX: x,
            clientY: y,
        });
        el.dispatchEvent(pointerdownEvent);

        var mousedownEvent = new MouseEvent('mousedown', {
            clientX: x,
            clientY: y,
        });
        el.dispatchEvent(mousedownEvent);

        var pointerupEvent = new PointerEvent('pointerup', {
            clientX: x,
            clientY: y,
        });
        el.dispatchEvent(pointerupEvent);

        var mouseupEvent = new MouseEvent('mouseup', {
            clientX: x,
            clientY: y,
        });
        el.dispatchEvent(mouseupEvent);

        var clickEvent = new MouseEvent('click', {
            clientX: x,
            clientY: y,
        });
        el.dispatchEvent(clickEvent);
    } else {
    }

    var goldTextEl = document.querySelector("h1.goldText[data-v-523ba038='']");
    if (goldTextEl && goldTextEl.textContent.includes("Use Telegram on your mobile!")) {
        setTimeout(() => {
            location.reload();
        }, RELOAD_DELAY);
    }

    setTimeout(autoclicker, getRandomDelay(MIN_DELAY, MAX_DELAY));
}

autoclicker();
