// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from 'forge-std/Script.sol';
import {DNToken} from '../src/DNToken.sol';

contract Deploy is Script {
    address _owner;
    uint256 maxMint;
    string name;
    string symbol;
    uint120 publicPrice;
    uint96 initialTokenSupply;
    address initialSupplyOwner;
    DNToken token;

    function setUp() public {}

    function run() public {
        vm.broadcast();
        _owner = 0x7789818791c12a2633e88d46457230bC1D9cd110; // testnet address
        name = 'DN404';
        symbol = 'DN';
        maxMint = 1000;
        publicPrice = 0.1 ether;
        initialTokenSupply = 100;
        initialSupplyOwner = _owner;
        vm.prank(_owner);

        token = new DNToken(
            name,
            symbol,
            maxMint,
            publicPrice,
            initialTokenSupply,
            initialSupplyOwner
        );
    }
}
