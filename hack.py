import os
import csv
import json
import numpy as np

data = {}
with open('courseGrades.csv', 'r') as csv_file:
    reader = csv.reader(csv_file)

    for row in reader:
        if row[1].startswith("CMPSC") and float(row[12]) >0.25:  # 
            if row[2] not in data.keys():
                data[row[2]] = [float(row[12])]
            else:
                data[row[2]].append(float(row[12]))
mean = {}
for key in data.keys():
    mean[key] = np.mean(data[key])

json_object = json.dumps(data, indent=4)
with open("data.json", "w") as outfile:
    outfile.write(json_object)

json_object2 = json.dumps(mean, indent=4)
with open("mean.json", "w") as outfile2:
    outfile2.write(json_object2)


print(mean)
