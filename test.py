import numpy as np
rng = np.random.default_rng(seed=0)
flips = rng.binomial(1, 0.5, size=(100_000, 30))
factors = np.where(flips == 1, 1.53, 0.59)
final = 10_000 * factors.prod(axis=1)
print(np.median(final))
