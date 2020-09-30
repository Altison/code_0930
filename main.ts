input.onGesture(Gesture.Shake, function () {
	
})
let score = randint(0, 100)
basic.showNumber(score)
if (score >= 90) {
    basic.showString("A+")
} else if (score >= 85) {
    basic.showString("A")
} else if (score >= 80) {
    basic.showString("A-")
} else if (score >= 77) {
    basic.showString("B+")
} else if (score >= 73) {
    basic.showString("B")
} else if (score >= 70) {
    basic.showString("B-")
} else if (score >= 67) {
    basic.showString("C+")
} else if (score >= 63) {
    basic.showString("C")
} else if (score >= 60) {
    basic.showString("C-")
} else if (score >= 50) {
    basic.showString("D")
} else {
    basic.showString("E")
}
