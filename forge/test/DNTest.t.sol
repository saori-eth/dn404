// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2} from 'forge-std/Test.sol';
import {DNToken} from '../src/DNToken.sol';

/*
        string memory name_,
        string memory symbol_,
        uint256 maxMint_,
        uint120 publicPrice_,
        uint96 initialTokenSupply,
        address initialSupplyOwner
*/

contract DNTest is Test {
    address _owner;
    uint256 maxMint;
    string name;
    string symbol;
    uint120 publicPrice;
    uint96 initialTokenSupply;
    address initialSupplyOwner;
    DNToken token;
    function setUp() public {
        _owner = address(0x11);
        name = 'DN404';
        symbol = 'DN';
        maxMint = 1000;
        publicPrice = 0.1 ether;
        initialTokenSupply = 100;
        initialSupplyOwner = _owner;
        vm.prank(_owner);

        token = new DNToken(name, symbol, maxMint, publicPrice, initialTokenSupply, initialSupplyOwner);
    }

    function testDeployment() public {
        assertEq(token.owner(), _owner);
        assertEq(token.name(), name);
        assertEq(token.symbol(), symbol);
        assertEq(token.maxMint(), maxMint);
        assertEq(token.publicPrice(), publicPrice);
        assertEq(token.totalSupply(), initialTokenSupply);
        assertEq(token.balanceOf(initialSupplyOwner), initialTokenSupply);
    }
}
