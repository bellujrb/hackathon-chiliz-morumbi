// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../src/SPFCToken.sol";
import "../src/TorcidaOrganizada.sol";

/**
 * @title DeploySPFC
 * @dev Script simplificado para deploy do sistema SPFC
 * @author Fanify Team
 */
contract DeploySPFC is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        
        console.log("Deploying SPFC System...");
        console.log("Deployer address:", deployer);
        console.log("Deployer balance:", deployer.balance);
        
        vm.startBroadcast(deployerPrivateKey);
        
        // Deploy SPFC Token
        SPFCToken spfcToken = new SPFCToken();
        
        // Deploy Torcida Organizada
        TorcidaOrganizada torcidaOrganizada = new TorcidaOrganizada(address(spfcToken));
        
        // Mint initial tokens to deployer
        spfcToken.mint(deployer, 100_000 * 1e18); // 100k SPFC tokens
        
        vm.stopBroadcast();
        
        console.log("SPFC System deployed successfully!");
        console.log("SPFCToken:", address(spfcToken));
        console.log("TorcidaOrganizada:", address(torcidaOrganizada));
        
        console.log("=== DEPLOYMENT COMPLETE ===");
        console.log("Copy these addresses to your frontend:");
        console.log("SPFC_TOKEN=", vm.toString(address(spfcToken)));
        console.log("TORCIDA_ORGANIZADA=", vm.toString(address(torcidaOrganizada)));
    }
}