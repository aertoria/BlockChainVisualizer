# BlockChainVisualizer
A project that analysis the Ethereum block and visualize it

Vertices: A wallet address. represented by a address hash.
Edges: A transaction between two addresses.


#instruction
node ./index.js

open browswer
http://localhost:3000/index


#forexample
for block at height 5648510

Block on main chain:
https://etherscan.io/block/5648510


Data pulled from chain
{"nodes":[{"id":"0xebcA018C743E2F878D4D8864D81eAFA2967f95ee"},{"id":"0xA783b02ce5853AD798b6FD0417C729cc462328dF"},{"id":"0xDf78cF07ef59411F3E747C54Ecd0FE5AA66F54FE"},...],
  "links":[{"source":"0xebcA018C743E2F878D4D8864D81eAFA2967f95ee","target":"0xA783b02ce5853AD798b6FD0417C729cc462328dF"},{"source":"0xDf78cF07ef59411F3E747C54Ecd0FE5AA66F54FE","target":"0x8d12A197cB00D4747a1fe03395095ce2A5CC6819"},...
]}

Visualized as:
![Alt text](img/EVM_chain_visualization.png?raw=true "img")
