pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LpToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("LP", "LPD") {
        _mint(msg.sender, initialSupply);
    }
}