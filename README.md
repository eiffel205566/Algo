My personal journey to tackle the inifite possibilities of algorithm

#1 Having fun with the "coins":

#Question description: find the minimum amount of coins needed to make up a positive integer (in context of paying a bill), also output the exact coin count for each coin used

Met this problem during an interview, figure I would write my dynamic programming solution down
Most solution found online would just output the minimum number of coin, the solution in coinProblemDP.js
output the actual combination of coin used to get a specific number.

input: num: positive integer; coins: array to represent what coins to choose from
output: an object where key represents coin value and value represents the count of that specifc coins needed to make up for the amount
note: output will be null if no solution is found
