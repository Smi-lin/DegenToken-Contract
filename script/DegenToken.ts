import hre from "hardhat";

async function main() {
  const DEPLOYED_DEGEN_TOKEN_CONTRACT =
    "0x71F47A75b7112098B23DfA6170e63CF7a4e06f6F";

  const myAccount = "0xac9535B43e7f652344A158FaB8e44472A1070299";

  const signer = await hre.ethers.getSigner(myAccount);

  const degenTokenContractIntense = await hre.ethers.getContractAt(
    "DegenToken",
    DEPLOYED_DEGEN_TOKEN_CONTRACT
  );


    // Starting scripting

    console.log(
        "############################ Deploying Redeem Item ####################"
    );

    const redeemItemTx1 = await degenTokenContractIntense
    .connect(signer).redeemItem(2);

    redeemItemTx1.wait();

    console.log({
        "redeeming item1 deployed successfully to": redeemItemTx1,
      });

    const redeemItemTx2 = await degenTokenContractIntense
    .connect(signer).redeemItem(2);

    redeemItemTx2.wait();

    console.log({
        "redeeming item 1 deployed successfully to": redeemItemTx2,
      });
}