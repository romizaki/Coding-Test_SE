def getOdd(start, end):
    data = []
    for num in range(start, end):
        if num % 2 != 0:
            data.append(num)
    return data


print(getOdd(0,20))