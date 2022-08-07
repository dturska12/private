import axios from 'axios';

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3("https://eth-rinkeby.alchemyapi.io/v2/rPuEidQ2wMK2LR5E7WQ3jh44W8cNvLIQ");

const abiERC721 = require('./abi/erc721abi.json');
const contractAddressERC721 = "0x8D60B588C098FBE8a0e5FcE700BaC7Da2FeB9949";

const abiStakingC = require("./abi/stakingabi.json");
const contractAddressStakingC = "0x2485b058d559BbB17366b6cBdff1C6b40C34a311";

const nftContract = new web3.eth.Contract(abiERC721, contractAddressERC721);
const stakingContract = new web3.eth.Contract(abiStakingC, contractAddressStakingC);



export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            const obj = {
                success: true,
                status: "connected",
                address: addressArray[0],
            };

            return obj;
        } catch (err) {
            return {
                success: false,
                address: "",
                status: err.message,
            };
        }
    } else {
        return {
        success: false,
        address: "",
        status: "You must install MetaMask, a virtual Ethereum wallet, in your browser.",
        };
    }
};
  
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (addressArray.length > 0) {
                return {
                address: addressArray[0],
                status: "connected",
                success: true,
                };
            } else {
                return {
                address: "",
                status: "connect your wallet",
                success: false,
                };
            }
        } catch (err) {
            return {
                address: "",
                status: err.message,
                success: false,
            };
        }
    } else {
        return {
        address: "",
        status: "You must install MetaMask, a virtual Ethereum wallet, in your browser.",
        success: false
        };
    }
};


let response = {
    success: false,
    status: ""
};

//contract methods

const getBalanceAddress = async (address) => {
    const result = await nftContract.methods.balanceOf(address).call();
    return result;
};

export const getTokenInformation = async (address) => {
    const stakeCount = await getStakedCountToken(address);
    const stakeArr = await getStakedTokens(address);
    const balance = await getBalanceAddress(address);
    let itemArray = [];

    //owned nft token from nft contract
    for (let index = 0; index < balance; index++) {
        let tokenId = await nftContract.methods.tokenOfOwnerByIndex(address, index).call();
        const rawUri = await nftContract.methods.tokenURI(tokenId).call();
        let cleanUri = rawUri.replace('ipfs://', 'https://ipfs.io/ipfs/');
        let metadata = await axios.get(`${cleanUri}.json`).catch(function (error) {
            console.log(error.toJSON());
        });
        let rawImg = metadata.data.image;
        var name = metadata.data.name;
        var desc = metadata.data.description;
        let image = rawImg.replace('ipfs://', 'https://ipfs.io/ipfs/');
        itemArray.push({
            name: name,
            img: image,
            tokenId: tokenId,
            desc,
        });
    };

    //owned nft token from staking contract
    for (let index = 0; index < stakeCount; index++) {
        const rawUriS = await nftContract.methods.tokenURI(stakeArr[index]).call();
        let cleanUriS = rawUriS.replace('ipfs://', 'https://ipfs.io/ipfs/');
        let metadataS = await axios.get(`${cleanUriS}.json`).catch(function (error) {
            console.log(error.toJSON());
        });
        let rawImgS = metadataS.data.image;
        var nameS = metadataS.data.name;
        var descS = metadataS.data.description;
        let imageS = rawImgS.replace('ipfs://', 'https://ipfs.io/ipfs/'); 
        itemArray.push({
            name: nameS,
            img: imageS,
            tokenId: stakeArr[index],
            descS,
        });        
    }

    itemArray.sort((a, b) => parseFloat(a.tokenId) - parseFloat(b.tokenId));
    return itemArray;
};

export const checkApproval = async (account) => {
    const result = await nftContract.methods.isApprovedForAll(account, contractAddressStakingC).call();
    return result;
};

export const setApprovalNFT = async (account) => {
    await nftContract.methods.setApprovalForAll(contractAddressStakingC,true)
    .send({
        from: account,
        to: contractAddressERC721
    })
    .then(function(receipt){
       console.log("receipt", receipt);
       response.success = true;
       response.status = "Approved successfully"
    })
    .catch(function(error){
        console.log("error: ", error);
        response.success = false;
        response.status = "Something went wrong";
    });
    return response;
}


//staking contract methods

const getStakedTokens = async (account) => {
    const result = await stakingContract.methods.getTokenIDsStaked(account).call();
    return result;
};

const getStakedCountToken = async (account) => {
    const result = await stakingContract.methods.getStakedCount(account).call();
    return result;
};

export const getAllRewardsToken = async (account) => {
    const result = await stakingContract.methods.getAllRewards(account).call();
    return web3.utils.fromWei(result, 'ether');;
};

export const getDailyTreats = async (account) => {
    const ids = await getStakedTokens(account);
    let rewards = 0;
    for (let index = 0; index < ids.length; index++) {
        const reward = Number(await stakingContract.methods.getTypeByTokenId(ids[0]).call());
        rewards += reward;
    }
    return rewards;
};

export const stakeNftToken = async (tokens, account) => {
    await stakingContract.methods.stakeNftsByTokenIds(tokens)
    .send({
        from: account,
        to: contractAddressStakingC
    })
    .then(function(receipt){
       console.log("receipt", receipt);
       response.success = true;
       response.status = "Staked successfully"
    })
    .catch(function(error){
        console.log("error: ", error);
        response.success = false;
        response.status = "Something went wrong";
    });
    return response;
};

export const unStakeNftToken = async (tokens, account) => {
    await stakingContract.methods.unstakeNftsByTokenIds(tokens)
    .send({
        from: account,
        to: contractAddressStakingC
    })
    .then(function(receipt){
       console.log("receipt", receipt);
       response.success = true;
       response.status = "UnStaked successfully"
    })
    .catch(function(error){
        console.log("error: ", error);
        response.success = false;
        response.status = "Something went wrong";
    });
    return response;
};

export const claimRewardTreat = async (account) => {
    await stakingContract.methods.claimAllTokens()
    .send({
        from: account,
        to: contractAddressStakingC
    })
    .then(function(receipt){
       console.log("receipt", receipt);
       response.success = true;
       response.status = "Claim successfully"
    })
    .catch(function(error){
        console.log("error: ", error);
        response.success = false;
        response.status = "Something went wrong";
    });
    return response;
};


//random data 
export const getRarityScore = async () => {
    return [
        {tokenId: 318, score: 1.5},
        {tokenId: 716, score: 1.2},
        {tokenId: 1164, score: 2.7},
        {tokenId: 1283, score: 1.9},
        {tokenId: 1486, score: 2.1},
        {tokenId: 1713, score: 2.2},
        {tokenId: 1722, score: 3.2},
        {tokenId: 1898, score: 1.5},
        {tokenId: 2007, score: 1.2},
        {tokenId: 2008, score: 2.7},
        {tokenId: 2045, score: 1.9},
        {tokenId: 2085, score: 2.1},
        {tokenId: 2327, score: 2.2},
        {tokenId: 2418, score: 3.2},
        {tokenId: 3163, score: 1.2},
        {tokenId: 3828, score: 2.7},
        {tokenId: 4021, score: 1.9},
        {tokenId: 4121, score: 2.1},
        {tokenId: 4465, score: 2.2},
        {tokenId: 4637, score: 2.4}
    ]
};

export {
    getStakedCountToken, 
    getStakedTokens
}
