import numpy as np
rng = np.random.default_rng(seed=34)
draws = rng.binomial(15, 0.57, size=100_000)
print((draws >= 11).mean())

import numpy as np
rng = np.random.default_rng(seed=0)
first = rng.binomial(1, 0.68, size=100_000)
theta = np.where(first == 1, 0.90, 0.22)
second = rng.binomial(1, theta)
print(second.mean())