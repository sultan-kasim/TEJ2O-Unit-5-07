/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan
 * Created on: Oct 2025
 * This program controls a servo
*/

// variables
const servoNumber1 = robotbit.Servos.S1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// when A is pressed turn to 0
input.onButtonPressed(Button.A, function() { 
    basic.clearScreen()
    basic.showString("0")
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.Happy)
    })

// when B is pressed turn to 180
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("180")
    robotbit.Servo(servoNumber1, 180)
    basic.showIcon(IconNames.Happy)
})

