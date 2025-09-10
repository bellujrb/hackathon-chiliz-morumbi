#!/bin/bash

# Deploy SPFC System Script
# This script deploys the complete SPFC system

echo "🚀 Deploying SPFC System..."

# Check if PRIVATE_KEY is set
if [ -z "$PRIVATE_KEY" ]; then
    echo "❌ Error: PRIVATE_KEY environment variable is not set"
    echo "Please set your private key: export PRIVATE_KEY=your_private_key_here"
    exit 1
fi

# Check if RPC_URL is set
if [ -z "$RPC_URL" ]; then
    echo "❌ Error: RPC_URL environment variable is not set"
    echo "Please set your RPC URL: export RPC_URL=your_rpc_url_here"
    exit 1
fi

echo "📋 Configuration:"
echo "   RPC URL: $RPC_URL"
echo "   Private Key: ${PRIVATE_KEY:0:6}..."

# Deploy to the specified network
echo "🔨 Deploying contracts..."

forge script script/DeploySPFC.s.sol:DeploySPFC \
    --rpc-url $RPC_URL \
    --private-key $PRIVATE_KEY \
    --broadcast \
    --verify \
    --etherscan-api-key $ETHERSCAN_API_KEY \
    --gas-estimate-multiplier 200 \
    --slow

if [ $? -eq 0 ]; then
    echo "✅ SPFC System deployed successfully!"
    echo "📄 Contract addresses saved to deployedAddresses.txt"
    
    # Display addresses
    if [ -f "deployedAddresses.txt" ]; then
        echo "📋 Deployed Contracts:"
        cat deployedAddresses.txt
    fi
else
    echo "❌ Deployment failed!"
    exit 1
fi
