import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";
import { ethers } from "hardhat";


const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

    const { deployer } = await hre.getNamedAccounts();
    const { deploy } = hre.deployments;

    await deploy("LpToken", {
      from: deployer,
      args: [ethers.parseEther("1")],
      log: true,
      autoMine: true,
    });
    
    const lpContract = await hre.ethers.getContract<Contract>("LpToken", deployer);
    const lpAddress = await lpContract.getAddress();

    await deploy("RewardToken", {
      from: deployer,
      args: [ethers.parseEther("1")],
      log: true,
      autoMine: true,
    });
    const rtContract = await hre.ethers.getContract<Contract>("RewardToken", deployer);
    const rtAddress = await rtContract.getAddress();

    await deploy("Staking", {
      from: deployer,
      args: [lpAddress, rtAddress],
      log: true,
      autoMine: true,
    });

    const stakingContract = await hre.ethers.getContract<Contract>("Staking", deployer);
    await stakingContract.grantAdminRole("0x7c5D9685F1cF77B5b52F45ba5A7778a2D8FbDB5F");
};

export default deployYourContract;
deployYourContract.tags = ["YourContract"];
