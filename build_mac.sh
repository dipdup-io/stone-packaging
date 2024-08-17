#!/bin/bash

brew install gmp

python3 -m pip install cpplint pytest numpy sympy==1.12.1 cairo-lang==0.12.0

git clone https://github.com/baking-bad/stone-prover.git /tmp/stone-prover

cd /tmp/stone-prover || exit

bazelisk build //...

bazelisk test //...


