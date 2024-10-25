import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DegenTokenModule = buildModule("DegenTokenModule", (p) => {
  const degenToken = p.contract("DegenToken");

  return { degenToken };
});

export default DegenTokenModule;

// DegenTokenModule#DegenToken - 0x71F47A75b7112098B23DfA6170e63CF7a4e06f6F

// DegenTokenModule#DegenToken - 0xd2C6Ec28439E8Fb044681Ac9FC7af8C205822901

// https://sepolia.basescan.org/address/0xd2C6Ec28439E8Fb044681Ac9FC7af8C205822901#code
