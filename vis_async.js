module.exports.getJSONByBlock= getJSONByBlock;

let Web3 = require('web3');
//web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/fchiwsz5q5eaapI6WSmo"));


//Usage
// (async function(){
//   let s= await getJSONByBlock(3996006);
//   console.log(s);
// })()


async function getJSONByBlock(blockid){
    try {
      	let currentblock= await web3.eth.getBlock(blockid);
        var transactionlist= currentblock["transactions"];
        let promises= transactionlist.map(item => web3.eth.getTransaction(item));

        let currentTransactions = await Promise.all(promises);

        let formatedList=[];
        currentTransactions.forEach(async(item) =>{
            var from=item["from"];
            var to=item["to"];
            var formated={"source": from, "target": to};
            formatedList.push(formated);
        });

        let nodes = await getNodesFromLinks(formatedList);
        let jsonResult = {"nodes":nodes,"links":formatedList};

        // console.log(JSON.stringify(jsonResult));
        return jsonResult;
    } catch (error) {
        console.log('Caught ERROR getJSONByBlock:', error.message);
    }
}


async function getNodesFromLinks(links){
	//DEDUP
	var nodeslist=[];
	for(var idx in links){
		nodeslist.push(links[idx]["source"]);
		nodeslist.push(links[idx]["target"]);
	}
	const setNode = new Set(nodeslist);

	let nodes=[];
	for(let item of setNode){
		nodes.push({"id": item});
	}
	return nodes;
}
