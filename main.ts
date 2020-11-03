basic.showIcon(IconNames.Happy)
basic.forever(function () {
    TPBot.setTravelSpeed(TPBot.DriveDirection.Forward, 30)
    if (TPBot.sonarJudge(TPBot.Sonarjudge.Less, 15)) {
        TPBot.setTravelTime(TPBot.DriveDirection.Backward, 30, 1)
        TPBot.setTravelTime(TPBot.DriveDirection.Left, 30, 0.3)
    }
})
