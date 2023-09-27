if __name__ == '__main__':
    a = [int(i) for i in input().split(",")]
    for x in a:
        if x % 2 == 0:
            print(x)
        elif x == 237:
            break
