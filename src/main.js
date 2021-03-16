let hanamikyaku = []
hanamikyaku.push(document.getElementById("A-1"))
hanamikyaku.push(document.getElementById("A-2"))
hanamikyaku.push(document.getElementById("A-3"))
hanamikyaku.push(document.getElementById("B-1"))
hanamikyaku.push(document.getElementById("B-2"))
hanamikyaku.push(document.getElementById("B-3"))
hanamikyaku.push(document.getElementById("B-4"))
hanamikyaku.push(document.getElementById("C-1"))
hanamikyaku.push(document.getElementById("C-2"))
hanamikyaku.push(document.getElementById("C-3"))
const CARDBOARD_COLOR = "rgb(203, 169, 123)"
const DEFAULT_COLOR = "limegreen"
const KYAKU_N = 6
const POSITION_N = 10

let isFilled = (position) => {
    if (hanamikyaku[position].style.backgroundColor == CARDBOARD_COLOR)
        return true

    if (position < 3) {
        let count = (hanamikyaku[0].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[1].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[2].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 2
    } else if (position >= 3 && position < 7) {
        let count = (hanamikyaku[3].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[4].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[5].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[6].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 3
    } else {
        let count = (hanamikyaku[7].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[8].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyaku[9].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 2
    }
}

document.getElementById("lottery").addEventListener("click", () => {
    hanamikyaku.forEach((h) => {
        h.style.backgroundColor = DEFAULT_COLOR
    })

    let n = 0;
    while (n < KYAKU_N) {
        let r = Math.floor(Math.random() * POSITION_N)
        console.log(`r:${r} n:${n}`)
        if (!isFilled(r)) {
            hanamikyaku[r].style.backgroundColor = CARDBOARD_COLOR
            n++
        }
    }
})
