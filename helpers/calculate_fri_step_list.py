import sys
import math

'''
Whenever you encounter error like:
    Fri parameters do not match stark degree bound. 
    Expected FRI degree from FriParameters: 8192. STARK: 2097152

Use this script to calculate the FRI step in cpu_air_params.json file.

Script takes two arguments: "Desired degree bound" and optional "Last layer degree" bound. 
Desired degree bound is the number that goes after STARK in error message above (2097152).
Last layer degree in located in cpu_air_params.json key stark->fri->last_layer_degree_bound.

'''


desired_degree_bound = int(sys.argv[1]) 
try:
    last_layer_degree_bound = int(sys.argv[2])
except:
    print("No last layer degree bound provided. Using default value of 64.")
    last_layer_degree_bound = 64

to_process = desired_degree_bound // last_layer_degree_bound

fri_step_list = []
highest_power_of_2 = math.log2(to_process)

while True:
    if highest_power_of_2 <= 4:
        fri_step_list.append(highest_power_of_2)
        break
    
    fri_step_list.append(4)
    highest_power_of_2 = highest_power_of_2 - 4
        
print(fri_step_list)