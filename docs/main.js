let hanamikyakuRed = []
redCourt = document.getElementById("red-court")
hanamikyakuRed.push(redCourt.querySelector("#A-1"))
hanamikyakuRed.push(redCourt.querySelector("#A-2"))
hanamikyakuRed.push(redCourt.querySelector("#A-3"))
hanamikyakuRed.push(redCourt.querySelector("#B-1"))
hanamikyakuRed.push(redCourt.querySelector("#B-2"))
hanamikyakuRed.push(redCourt.querySelector("#B-3"))
hanamikyakuRed.push(redCourt.querySelector("#B-4"))
hanamikyakuRed.push(redCourt.querySelector("#C-1"))
hanamikyakuRed.push(redCourt.querySelector("#C-2"))
hanamikyakuRed.push(redCourt.querySelector("#C-3"))
let hanamikyakuBlue = []
blueCourt = document.getElementById("blue-court")
hanamikyakuBlue.push(blueCourt.querySelector("#A-1"))
hanamikyakuBlue.push(blueCourt.querySelector("#A-2"))
hanamikyakuBlue.push(blueCourt.querySelector("#A-3"))
hanamikyakuBlue.push(blueCourt.querySelector("#B-1"))
hanamikyakuBlue.push(blueCourt.querySelector("#B-2"))
hanamikyakuBlue.push(blueCourt.querySelector("#B-3"))
hanamikyakuBlue.push(blueCourt.querySelector("#B-4"))
hanamikyakuBlue.push(blueCourt.querySelector("#C-1"))
hanamikyakuBlue.push(blueCourt.querySelector("#C-2"))
hanamikyakuBlue.push(blueCourt.querySelector("#C-3"))
const CARDBOARD_COLOR = "rgb(203, 169, 123)"
const DEFAULT_COLOR = "limegreen"
const KYAKU_N = 6
const POSITION_N = 10

let isFilled = (position) => {
    if (hanamikyakuRed[position].style.backgroundColor == CARDBOARD_COLOR)
        return true

    if (position < 3) {
        let count = (hanamikyakuRed[0].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[1].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[2].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 2
    } else if (position >= 3 && position < 7) {
        let count = (hanamikyakuRed[3].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[4].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[5].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[6].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 3
    } else {
        let count = (hanamikyakuRed[7].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[8].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0) + (hanamikyakuRed[9].style.backgroundColor == CARDBOARD_COLOR ? 1 : 0)
        return count >= 2
    }
}

document.getElementById("lottery").addEventListener("click", () => {
    hanamikyakuRed.forEach((h) => {
        h.style.backgroundColor = DEFAULT_COLOR
    })
    hanamikyakuBlue.forEach((h) => {
        h.style.backgroundColor = DEFAULT_COLOR
    })


    let n = 0;
    while (n < KYAKU_N) {
        let r = Math.floor(Math.random() * POSITION_N)
        console.log(`r:${r} n:${n}`)
        if (!isFilled(r)) {
            hanamikyakuRed[r].style.backgroundColor = CARDBOARD_COLOR
            hanamikyakuBlue[r].style.backgroundColor = CARDBOARD_COLOR
            n++
        }
    }
})
