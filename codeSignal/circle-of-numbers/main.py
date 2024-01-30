def solution(n, firstNumber):
    distance = 360 / n
    return (firstNumber + 180 / distance) % n
