#!/bin/bash

# Script para deploy do SPFC usando forge script
# Consulta o gas atual e ajusta os parâmetros automaticamente

RPC_URL="https://x-api-key:t-6859e688783f495f8d570bd6-06901fcc8dfb494aada1194a@chiliz-testnet.gateway.tatum.io/"

echo "🔍 Consultando preços de gas na rede Chiliz Testnet..."

# Consultar gas price atual
CURRENT_GAS_PRICE=$(cast gas-price --rpc-url "$RPC_URL")
echo "💰 Gas Price atual: $CURRENT_GAS_PRICE wei ($(echo "scale=2; $CURRENT_GAS_PRICE / 1000000000" | bc) gwei)"

# Consultar base fee (EIP-1559)
BASE_FEE=$(cast base-fee --rpc-url "$RPC_URL")
echo "📊 Base Fee atual: $BASE_FEE wei ($(echo "scale=2; $BASE_FEE / 1000000000" | bc) gwei)"

# Calcular gas price para deploy (30% acima do atual para garantir)
DEPLOY_GAS_PRICE=$(echo "$CURRENT_GAS_PRICE * 130 / 100" | bc)
echo "🚀 Gas Price para deploy: $DEPLOY_GAS_PRICE wei ($(echo "scale=2; $DEPLOY_GAS_PRICE / 1000000000" | bc) gwei)"

# Calcular priority gas price (mínimo 1 GWEI = 1000000000 wei)
PRIORITY_GAS_PRICE=$(echo "$BASE_FEE * 200 / 100" | bc)
MIN_PRIORITY_GAS_PRICE=1000000000  # 1 GWEI
if [ "$PRIORITY_GAS_PRICE" -lt "$MIN_PRIORITY_GAS_PRICE" ]; then
    PRIORITY_GAS_PRICE=$MIN_PRIORITY_GAS_PRICE
fi
echo "⚡ Priority Gas Price: $PRIORITY_GAS_PRICE wei ($(echo "scale=2; $PRIORITY_GAS_PRICE / 1000000000" | bc) gwei)"

# Verificar se bc está instalado, se não, usar cálculo simples
if ! command -v bc &> /dev/null; then
    echo "⚠️  bc não encontrado, usando valores padrão..."
    DEPLOY_GAS_PRICE=6000000000000
    PRIORITY_GAS_PRICE=1000000000  # 1 GWEI mínimo
fi

# Definir chave privada diretamente no script
PRIVATE_KEY="0x209d62c25257f784a566038f1fd3f4b73f04c5654f2dc543a8b41ca363bd28dc"
echo "🔑 Usando chave privada definida no script"

echo ""
echo "🎯 Deployando SPFC System com forge script..."
echo "================================================"

# Executar o deploy do SPFC com forge script
forge script script/DeploySPFC.s.sol:DeploySPFC \
    --rpc-url "$RPC_URL" \
    --private-key "$PRIVATE_KEY" \
    --broadcast \
    --gas-price "$DEPLOY_GAS_PRICE" \
    --priority-gas-price "$PRIORITY_GAS_PRICE" \
    --verifier blockscout \
    --verifier-url https://scan.chiliz.com/api/ \
    --slow

echo ""
echo "✅ SPFC System deployado com sucesso!"
echo "🎉 Contratos SPFCToken e TorcidaOrganizada foram deployados!"

# Extrair endereços do arquivo de broadcast
BROADCAST_FILE="broadcast/DeploySPFC.s.sol/88882/run-latest.json"

if [ -f "$BROADCAST_FILE" ]; then
    echo ""
    echo "📋 Endereços dos contratos deployados:"
    echo "====================================="
    
    # Extrair endereço do SPFCToken (primeira transação CREATE)
    SPFC_TOKEN=$(jq -r '.transactions[0].contractAddress' "$BROADCAST_FILE")
    echo "🪙 SPFCToken: $SPFC_TOKEN"
    
    # Extrair endereço do TorcidaOrganizada (segunda transação CREATE)
    TORCIDA_ORGANIZADA=$(jq -r '.transactions[1].contractAddress' "$BROADCAST_FILE")
    echo "🏟️  TorcidaOrganizada: $TORCIDA_ORGANIZADA"
    
    echo ""
    echo "📝 Para usar no frontend, adicione ao seu .env:"
    echo "SPFC_TOKEN=$SPFC_TOKEN"
    echo "TORCIDA_ORGANIZADA=$TORCIDA_ORGANIZADA"
    
    # Salvar endereços em arquivo
    echo "SPFC_TOKEN=$SPFC_TOKEN" > deployedAddresses.txt
    echo "TORCIDA_ORGANIZADA=$TORCIDA_ORGANIZADA" >> deployedAddresses.txt
    echo ""
    echo "💾 Endereços salvos em: deployedAddresses.txt"
else
    echo "⚠️  Arquivo de broadcast não encontrado. Verifique se o deploy foi bem-sucedido."
fi

echo ""
echo "🔗 Verificar contratos no explorer:"
echo "https://scan.chiliz.com/"
