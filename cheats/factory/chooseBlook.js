/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) 005Konz 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/005Konz/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    let iframe = document.querySelector("iframe");
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        window.prompt = i.contentWindow.prompt.bind(window);
        i.remove();
        if (window.factoryBlooks == null) window.factoryBlooks = [{ name: "Chick", color: "#ffcd05", class: "\uD83C\uDF3D", rarity: "Common", cash: [3, 7, 65, 400, 2500], time: [1, 1, 1, 1, 1], price: [300, 3000, 30000, 200000] }, { name: "Chicken", color: "#ed1c24", class: "\uD83C\uDF3D", rarity: "Common", cash: [10, 40, 200, 1400, 10000], time: [5, 4, 3, 2, 1], price: [570, 4000, 50000, 800000] }, { name: "Cow", color: "#58595b", class: "\uD83C\uDF3D", rarity: "Common", cash: [25, 75, 1500, 25000, 250000], time: [15, 10, 10, 10, 5], price: [500, 9500, 160000, 4000000] }, { name: "Duck", color: "#4ab96d", class: "\uD83C\uDF3D", rarity: "Common", cash: [4, 24, 200, 3000, 40000], time: [3, 3, 3, 3, 3], price: [450, 4200, 70000, 1100000] }, { name: "Goat", color: "#c59a74", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 28, 200, 1300, 12000], time: [3, 3, 2, 2, 2], price: [500, 6400, 45000, 500000] }, { name: "Horse", color: "#995b3c", class: "\uD83C\uDF3D", rarity: "Common", cash: [5, 20, 270, 1800, 15000], time: [2, 2, 2, 2, 2], price: [550, 8200, 65000, 600000] }, { name: "Pig", color: "#f6a9cb", class: "\uD83C\uDF3D", rarity: "Common", cash: [20, 50, 1300, 8000, 80000], time: [7, 7, 7, 7, 5], price: [400, 11000, 80000, 1300000] }, { name: "Sheep", color: "#414042", class: "\uD83C\uDF3D", rarity: "Common", cash: [6, 25, 250, 1500, 11000], time: [3, 3, 3, 2, 2], price: [500, 5000, 50000, 430000] }, { name: "Cat", color: "#f49849", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 18, 170, 1700, 13000], time: [2, 2, 2, 2, 2], price: [480, 5500, 60000, 500000] }, { name: "Dog", color: "#995b3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [7, 25, 220, 1900, 9000], time: [3, 3, 2, 2, 1], price: [460, 6600, 70000, 730000] }, { name: "Goldfish", color: "#f18221", class: "\uD83D\uDC3E", rarity: "Common", cash: [5, 40, 350, 3500, 35000], time: [3, 3, 3, 3, 3], price: [750, 7200, 84000, 950000] }, { name: "Rabbit", color: "#e7bf9a", class: "\uD83D\uDC3E", rarity: "Common", cash: [3, 18, 185, 800, 7000], time: [2, 2, 2, 1, 1], price: [500, 5800, 56000, 550000] }, { name: "Hamster", color: "#ce9176", class: "\uD83D\uDC3E", rarity: "Common", cash: [10, 45, 450, 4500, 45000], time: [4, 4, 4, 4, 4], price: [650, 6500, 80000, 930000] }, { name: "Turtle", color: "#619a3c", class: "\uD83D\uDC3E", rarity: "Common", cash: [23, 120, 1400, 15000, 170000], time: [10, 10, 10, 10, 10], price: [700, 8500, 110000, 1300000] }, { name: "Puppy", color: "#414042", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 10, 75, 500, 3000], time: [1, 1, 1, 1, 1], price: [450, 4000, 35000, 250000] }, { name: "Kitten", color: "#58595b", class: "\uD83D\uDC3E", rarity: "Common", cash: [4, 8, 60, 400, 2000], time: [1, 1, 1, 1, 1], price: [350, 3500, 26000, 170000] }, { name: "Bear", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [12, 70, 550, 4500, 100000], time: [7, 7, 6, 5, 5], price: [550, 5500, 63000, 1600000] }, { name: "Moose", color: "#995b3c", class: "\uD83C\uDF32", rarity: "Common", cash: [8, 45, 400, 3500, 26000], time: [5, 5, 4, 4, 3], price: [520, 6500, 58000, 700000] }, { name: "Fox", color: "#f49849", class: "\uD83C\uDF32", rarity: "Common", cash: [7, 15, 80, 550, 3000], time: [2, 2, 1, 1, 1], price: [400, 4000, 36000, 240000] }, { name: "Raccoon", color: "#6d6e71", class: "\uD83C\uDF32", rarity: "Common", cash: [5, 14, 185, 1900, 19000], time: [2, 2, 2, 2, 2], price: [400, 5000, 71000, 800000] }, { name: "Squirrel", color: "#d25927", class: "\uD83C\uDF32", rarity: "Common", cash: [3, 10, 65, 470, 2600], time: [1, 1, 1, 1, 1], price: [420, 3600, 32000, 210000] }, { name: "Owl", color: "#594a42", class: "\uD83C\uDF32", rarity: "Common", cash: [4, 17, 155, 1500, 15000], time: [2, 2, 2, 2, 2], price: [500, 4800, 55000, 580000] }, { name: "Hedgehog", color: "#3f312b", class: "\uD83C\uDF32", rarity: "Common", cash: [11, 37, 340, 2200, 30000], time: [5, 4, 3, 2, 2], price: [540, 7000, 77000, 1200000] }, { name: "Seal", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 17, 150, 1200, 13000], time: [2, 2, 2, 2, 2], price: [480, 4500, 43000, 520000] }, { name: "Arctic Fox", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [5, 18, 180, 850, 8500], time: [2, 2, 2, 1, 1], price: [520, 550, 61000, 680000] }, { name: "Snowy Owl", color: "#feda3f", class: "❄️", rarity: "Common", cash: [5, 20, 190, 1900, 16000], time: [3, 3, 2, 2, 2], price: [370, 5300, 76000, 620000] }, { name: "Arctic Hare", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [6, 19, 85, 900, 7000], time: [2, 2, 1, 1, 1], price: [540, 5200, 66000, 550000] }, { name: "Penguin", color: "#fb8640", class: "❄️", rarity: "Common", cash: [4, 21, 310, 3200, 33000], time: [3, 3, 3, 3, 3], price: [400, 6500, 76000, 870000] }, { name: "Baby Penguin", color: "#414042", class: "❄️", rarity: "Common", cash: [3, 8, 70, 450, 2700], time: [1, 1, 1, 1, 1], price: [420, 3300, 33000, 230000] }, { name: "Polar Bear", color: "#7ca1d5", class: "❄️", rarity: "Common", cash: [12, 75, 700, 6500, 85000], time: [8, 7, 6, 5, 5], price: [630, 7000, 91000, 1400000] }, { name: "Walrus", color: "#7d4f33", class: "❄️", rarity: "Common", cash: [11, 46, 420, 3700, 51000], time: [5, 5, 4, 4, 4], price: [550, 6200, 68000, 1000000] }, { name: "Tiger", color: "#f18221", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 20, 100, 975, 7500], time: [3, 3, 1, 1, 1], price: [390, 6000, 70000, 610000] }, { name: "Jaguar", color: "#fbb040", class: "\uD83C\uDF34", rarity: "Common", cash: [8, 28, 230, 1600, 17000], time: [3, 3, 2, 2, 2], price: [390, 6000, 70000, 610000] }, { name: "Toucan", color: "#ffca34", class: "\uD83C\uDF34", rarity: "Common", cash: [9, 20, 175, 625, 3800], time: [2, 2, 2, 1, 1], price: [520, 4800, 42000, 300000] }, { name: "Cockatoo", color: "#7ca1d5", class: "\uD83C\uDF34", rarity: "Common", cash: [6, 35, 160, 1700, 18000], time: [4, 4, 2, 2, 2], price: [500, 5000, 63000, 700000] }, { name: "Macaw", color: "#00aeef", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 8, 85, 850, 8500], time: [1, 1, 1, 1, 1], price: [480, 5400, 62000, 630000] }, { name: "Parrot", color: "#ed1c24", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 9, 90, 900, 9000], time: [1, 1, 1, 1, 1], price: [540, 5700, 65000, 690000] }, { name: "Panther", color: "#2f2c38", class: "\uD83C\uDF34", rarity: "Common", cash: [12, 28, 215, 2100, 21000], time: [5, 3, 2, 2, 2], price: [530, 6500, 76000, 870000] }, { name: "Anaconda", color: "#8a9143", class: "\uD83C\uDF34", rarity: "Common", cash: [3, 15, 85, 1500, 7600], time: [1, 2, 1, 2, 1], price: [410, 5100, 58000, 590000] }, { name: "Orangutan", color: "#bc6234", class: "\uD83C\uDF34", rarity: "Common", cash: [13, 52, 570, 4300, 70000], time: [5, 5, 5, 4, 4], price: [600, 7000, 80000, 1400000] }, { name: "Capuchin", color: "#e0b0a6", class: "\uD83C\uDF34", rarity: "Common", cash: [4, 14, 160, 780, 8200], time: [2, 2, 2, 1, 1], price: [390, 4700, 57000, 680000] }, { name: "Elf", color: "#a7d054", class: "⚔️", rarity: "Uncommon", cash: [5000, 15000, 150000, 1500000, 10000000], time: [1, 1, 1, 1, 1], price: [800000, 9000000, 110000000, 800000000] }, { name: "Witch", color: "#4ab96d", class: "⚔️", rarity: "Uncommon", cash: [18000, 60000, 40000, 4000000, 35000000], time: [3, 3, 2, 2, 2], price: [1100000, 12000000, 150000000, 1400000000] }, { name: "Wizard", color: "#5a459c", class: "⚔️", rarity: "Uncommon", cash: [19500, 65000, 440000, 4600000, 4000000], time: [3, 3, 2, 2, 2], price: [1300000, 13500000, 160000000, 1600000000] }, { name: "Fairy", color: "#df6d9c", class: "⚔️", rarity: "Uncommon", cash: [18500, 60000, 620000, 4400000, 38000000], time: [3, 3, 3, 2, 2], price: [1200000, 12500000, 15000000, 1500000000] }, { name: "Slime Monster", color: "#2fa04a", class: "⚔️", rarity: "Uncommon", cash: [35000, 140000, 1000000, 11000000, 110000000], time: [5, 5, 4, 4, 4], price: [1600000, 15000000, 200000000, 2300000000] }, { name: "Jester", color: "#be1e2d", class: "⚔️", rarity: "Rare", cash: [25000, 100000, 680000, 6500000, 32000000], time: [3, 3, 2, 2, 1], price: [2000000, 21000000, 230000000, 2600000000] }, { name: "Dragon", color: "#2fa04a", class: "⚔️", rarity: "Rare", cash: [36000, 150000, 1500000, 15000000, 150000000], time: [4, 4, 4, 4, 4], price: [2300000, 24000000, 270000000, 3000000000] }, { name: "Unicorn", color: "#f6afce", class: "⚔️", rarity: "Epic", cash: [24000, 150000, 1400000, 7000000, 75000000], time: [2, 2, 2, 1, 1], price: [4500000, 45000000, 550000000, 6500000000] }, { name: "Queen", color: "#9e1f63", class: "⚔️", rarity: "Rare", cash: [24000, 95000, 950000, 9700000, 95000000], time: [3, 3, 3, 3, 3], price: [1900000, 20000000, 230000000, 2500000000] }, { name: "King", color: "#ee2640", class: "⚔️", rarity: "Legendary", cash: [75000, 400000, 6000000, 90000000, 1250000000], time: [5, 5, 5, 5, 5], price: [6000000, 95000000, 1600000000, 25000000000] }, { name: "Two of Spades", color: "#414042", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [4500, 14000, 140000, 1400000, 9000000], time: [1, 1, 1, 1, 1], price: [770000, 8300000, 98000000, 710000000] }, { name: "Eat Me", color: "#d58c55", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13000, 45000, 450000, 4500000, 50000000], time: [2, 2, 2, 2, 2], price: [1300000, 14000000, 160000000, 2000000000] }, { name: "Drink Me", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [12000, 40000, 400000, 4000000, 45000000], time: [2, 2, 2, 2, 2], price: [1200000, 12000000, 140000000, 1800000000] }, { name: "Alice", color: "#4cc9f5", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [13000, 42000, 210000, 2100000, 23000000], time: [2, 2, 1, 1, 1], price: [1200000, 13000000, 150000000, 1900000000] }, { name: "Queen of Hearts", color: "#d62027", class: "\uD83C\uDFF0", rarity: "Uncommon", cash: [23000, 87000, 620000, 7500000, 90000000], time: [4, 4, 3, 3, 3], price: [1300000, 13000000, 180000000, 2400000000] }, { name: "Dormouse", color: "#89d6f8", class: "\uD83C\uDFF0", rarity: "Rare", cash: [17000, 68000, 700000, 3500000, 35000000], time: [2, 2, 1, 1, 1], price: [2000000, 22000000, 250000000, 2800000000] }, { name: "White Rabbit", color: "#ffcd05", class: "\uD83C\uDFF0", rarity: "Rare", cash: [26000, 105000, 11000000, 7700000, 72000000], time: [3, 3, 3, 2, 2], price: [2000000, 23000000, 280000000, 2900000000] }, { name: "Cheshire Cat", color: "#dd7399", class: "\uD83C\uDFF0", rarity: "Rare", cash: [32000, 100000, 900000, 9000000, 60000000], time: [4, 3, 3, 3, 2], price: [1800000, 19000000, 220000000, 2400000000] }, { name: "Caterpillar", color: "#00c0f3", class: "\uD83C\uDFF0", rarity: "Epic", cash: [10000, 70000, 650000, 7500000, 85000000], time: [1, 1, 1, 1, 1], price: [4200000, 42000000, 540000000, 6900000000] }, { name: "Mad Hatter", color: "#914f93", class: "\uD83C\uDFF0", rarity: "Epic", cash: [38000, 250000, 1500000, 14000000, 80000000], time: [3, 3, 2, 2, 1], price: [4800000, 48000000, 520000000, 6600000000] }, { name: "King of Hearts", color: "#c62127", class: "\uD83C\uDFF0", rarity: "Legendary", cash: [80000, 420000, 6800000, 100000000, 1500000000], time: [5, 5, 5, 5, 5], price: [7000000, 110000000, 1800000000, 30000000000] }, { name: "Earth", color: "#416eb5", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [15000, 45000, 600000, 6500000, 65000000], time: [3, 3, 3, 3, 3], price: [1000000, 11000000, 150000000, 1700000000] }, { name: "Meteor", color: "#c68c3c", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [23000, 65000, 700000, 4500000, 20000000], time: [5, 4, 3, 2, 1], price: [950000, 13000000, 160000000, 1600000000] }, { name: "Stars", color: "#19184d", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [10000, 40000, 200000, 2000000, 18000000], time: [2, 2, 1, 1, 1], price: [1400000, 14000000, 150000000, 1500000000] }, { name: "Alien", color: "#8dc63f", class: "\uD83D\uDE80", rarity: "Uncommon", cash: [30000, 100000, 1000000, 11000000, 85000000], time: [4, 4, 4, 4, 4], price: [1500000, 17000000, 190000000, 1700000000] }, { name: "Planet", color: "#9dc6ea", class: "\uD83D\uDE80", rarity: "Rare", cash: [25000, 100000, 900000, 9000000, 90000000], time: [3, 3, 3, 3, 3], price: [2000000, 21000000, 210000000, 2400000000] }, { name: "UFO", color: "#a15095", class: "\uD83D\uDE80", rarity: "Rare", cash: [17000, 70000, 700000, 7000000, 70000000], time: [2, 2, 2, 2, 2], price: [2100000, 23000000, 250000000, 2800000000] }, { name: "Spaceship", color: "#ffcb29", class: "\uD83D\uDE80", rarity: "Epic", cash: [60000, 320000, 2100000, 15000000, 85000000], time: [5, 4, 3, 2, 1], price: [4800000, 46000000, 540000000, 6800000000] }, { name: "Astronaut", color: "#9bd4ee", class: "\uD83D\uDE80", rarity: "Legendary", cash: [45000, 260000, 2500000, 38000000, 550000000], time: [3, 3, 2, 2, 2], price: [6500000, 100000000, 1700000000, 27000000000] }, { name: "Lil Bot", color: "#3e564a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [4000, 12000, 180000, 1900000, 25000000], time: [1, 1, 1, 1, 1], price: [730000, 12000000, 130000000, 1900000000] }, { name: "Lovely Bot", color: "#f179af", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [16000, 65000, 650000, 4800000, 42000000], time: [3, 3, 3, 2, 2], price: [1300000, 14000000, 170000000, 1600000000] }, { name: "Angry Bot", color: "#f1613a", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [22000, 85000, 800000, 6200000, 65000000], time: [4, 4, 4, 3, 3], price: [1200000, 13000000, 150000000, 1700000000] }, { name: "Happy Bot", color: "#51ba6b", class: "\uD83E\uDD16", rarity: "Uncommon", cash: [11000, 45000, 500000, 2500000, 30000000], time: [2, 2, 2, 1, 1], price: [1400000, 15000000, 180000000, 2400000000] }, { name: "Watson", color: "#d69b5a", class: "\uD83E\uDD16", rarity: "Rare", cash: [24000, 100000, 1000000, 10000000, 100000000], time: [3, 3, 3, 3, 3], price: [2000000, 22000000, 240000000, 2600000000] }, { name: "Buddy Bot", color: "#9dc6ea", class: "\uD83E\uDD16", rarity: "Rare", cash: [22000, 95000, 650000, 6500000, 65000000], time: [3, 3, 2, 2, 2], price: [1900000, 21000000, 230000000, 2500000000] }, { name: "Brainy Bot", color: "#9ecf7a", class: "\uD83E\uDD16", rarity: "Epic", cash: [50000, 250000, 2100000, 21000000, 170000000], time: [4, 3, 3, 3, 2], price: [5000000, 46000000, 500000000, 6700000000] }, { name: "Mega Bot", color: "#d71f27", class: "\uD83E\uDD16", rarity: "Legendary", cash: [80000, 430000, 4200000, 62000000, 1000000000], time: [5, 5, 3, 3, 3], price: [7000000, 120000000, 1900000000, 35000000000] }];
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const blook = window.factoryBlooks.find(function ({ name }) { return name.toLowerCase() == this }, prompt("Enter blook name:").toLowerCase());
        if (blook) {
            if (stateNode.state.blooks.length >= 10) alert("Choose a blook to replace");
            stateNode.waiting = false;
            stateNode.chooseBlook(Object.assign({}, blook));
        }
        else alert("That is not a valid blook!");
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/005Konz/Blooket-Cheats/main/autoupdate/timestamps/factory/chooseBlook.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        let i = 0;
        while (i < data.length) {
            let char = String.fromCharCode(data[i % 4 == 3 ? (i++, i++) : i++] + data[i % 4 == 3 ? (i++, i++) : i++] * 256);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let _, time = 1716689125431, error = "There was an error checking for script updates. Run cheat anyway?";
        try {
            [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "((.|\n)+?)"/);
        } catch (e) {}
        if (parseInt(time) <= 1716689125431 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => {
        img.onerror = img.onabort = null;
        cheat();
        let iframe = document.querySelector("iframe");
        iframe.contentWindow.alert("It seems the GitHub is either blocked or down.\n\nIf it's NOT blocked, join the Discord server for updates\nhttps://discord.gg/jHjGrrdXP6\n(The cheat will still run after this alert)")
    }
})();