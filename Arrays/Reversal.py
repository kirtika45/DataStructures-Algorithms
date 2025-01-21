#ARRAYS
#Reversing of an array

a = [5,6,13,12]
n = len(a)

temp = [] * n

for _ in range(n):
    temp.append(a[n-1-_])

print(temp)