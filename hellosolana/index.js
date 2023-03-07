const {
    Connection,
    PublicKey,
    Account,
    Transaction,
    Keypair,
    LAMPORTS_PER_SOL,
    clusterApiUrl
} = require("@solana/web3.js")

// const devKeys = new Keypair()
const pubKey = new PublicKey("4tFR6TGeGXcxYGYaC7j6v9SEEqdXxsuVWQk1xyprrjfw");
// const privKey = devKeys._keypair.secretKey;
// console.log(pubKey)
// console.log(privKey)

const getWalletBalance = async () => {
    try{
        const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed")
        // const myWallet = await Keypair.fromSecretKey(privKey)
        const walletBalance = await connection.getBalance(pubKey);
        console.log(`Wallet address is ${pubKey} and balance is ${walletBalance / 1000000000}`)
    }
    catch(err){
        console.error(err)
    }
}

// const requestAirdrop = async () => {
//     try{
//         const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
//         const myWallet = await Keypair.fromSecretKey(privKey);
//         const airdropSignatureResult = await connection.requestAirdrop(new PublicKey(myWallet.publicKey), 1 * LAMPORTS_PER_SOL)
//         const latestBlockHash = await connection.getLatestBlockhash();
//         await connection.confirmTransaction({
//         blockhash: latestBlockHash.blockhash,
//         lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
//         signature: airdropSignatureResult,
//     });     
//     } catch(err) {
//         console.log(err);
//     }

// }
const main = async() => {
    getWalletBalance()
}

main();



