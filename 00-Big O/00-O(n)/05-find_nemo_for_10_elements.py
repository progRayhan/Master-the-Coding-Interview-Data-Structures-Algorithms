import time

everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

def findNemo(array):
    st = time.time()
    for i in array:
        if i == 'nemo':
            print('found nemo')
    et = time.time()
    print(f'call to find nemo took : {et-st} milliseconds')

findNemo(everyone)