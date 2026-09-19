import numpy as np 

rng=np.random.default_rng(seed=500) 
x=rng.binomial(n=1,p=0.7, size=10)
print(x)

#seeds gurantee the same random number generation. if we changed the n and p as well as the seed, the result will be different. 
# size gives the number of random numbers to generate.

draws= rng.binomial(n=1,p=0.7, size=10_000) # the underscore makes the number more readable.
print(draws[:12])
print(draws.mean()) #takes the average of all the 0 and 1s.

rng=np.random.default_rng(seed=11) 
sunny=rng.binomial(n=1,p=0.6,size=100_000)
theta=np.where(sunny==1,0.8,0.3)