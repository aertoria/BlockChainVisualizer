# BlockChainVisualizer
A project that analysis the Ethereum block and visualize it

Vertices: A wallet address. represented by a address hash.
Edges: A transaction between two addresses.


## Instruction
```
node ./index.js
```

open browswer
```
http://localhost:3000/index
```


Note that, this is the env tested:
node.js v10.1.0

npm 5.6.0

web3@1.0.0-beta.34

Also note, I have provide ethereum mainnet.infura token for developer. so that you can just deploy and run. it is:
```fchiwsz5q5eaapI6WSmo```


## Example
for block at height 5648510

Block on main chain:
https://etherscan.io/block/5648510
![Alt text](img/block.png?raw=true "img")

Data pulled from chain
{"nodes":[{"id":"0xebcA018C743E2F878D4D8864D81eAFA2967f95ee"},{"id":"0xA783b02ce5853AD798b6FD0417C729cc462328dF"},{"id":"0xDf78cF07ef59411F3E747C54Ecd0FE5AA66F54FE"},...],
  "links":[{"source":"0xebcA018C743E2F878D4D8864D81eAFA2967f95ee","target":"0xA783b02ce5853AD798b6FD0417C729cc462328dF"},{"source":"0xDf78cF07ef59411F3E747C54Ecd0FE5AA66F54FE","target":"0x8d12A197cB00D4747a1fe03395095ce2A5CC6819"},...
]}


##API
Visualize one block
http:localhost:3000/directed/5601207

Visualize all the blocks between a and b
http://localhost:3000/directedM/5601207/5601217

Visualized as:
Version 2(updated May 21.2018)
![Alt text](img/vis3.png?raw=true "img")

Version 1
![Alt text](img/EVM_chain_visualization.png?raw=true "img")





