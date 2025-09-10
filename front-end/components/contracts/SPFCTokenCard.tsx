'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useSPFCToken } from '@/hooks/useSPFCToken';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Loader2, Coins, Send, CheckCircle } from 'lucide-react';

export function SPFCTokenCard() {
  const { address } = useAccount();
  const [isMounted, setIsMounted] = useState(false);
  const {
    balance,
    totalSupply,
    decimals,
    name,
    symbol,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    transfer,
    approve,
    mint,
    refreshData,
  } = useSPFCToken();

  const [transferTo, setTransferTo] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [approveSpender, setApproveSpender] = useState('');
  const [approveAmount, setApproveAmount] = useState('');
  const [mintTo, setMintTo] = useState('');
  const [mintAmount, setMintAmount] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Card className="w-full max-w-2xl">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <p className="text-sm text-gray-600">Carregando...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const handleTransfer = async () => {
    if (!transferTo || !transferAmount) return;
    try {
      await transfer(transferTo, transferAmount);
      setTransferTo('');
      setTransferAmount('');
    } catch (err) {
      console.error('Transfer failed:', err);
    }
  };

  const handleApprove = async () => {
    if (!approveSpender || !approveAmount) return;
    try {
      await approve(approveSpender, approveAmount);
      setApproveSpender('');
      setApproveAmount('');
    } catch (err) {
      console.error('Approve failed:', err);
    }
  };

  const handleMint = async () => {
    if (!mintTo || !mintAmount) return;
    try {
      await mint(mintTo, mintAmount);
      setMintTo('');
      setMintAmount('');
    } catch (err) {
      console.error('Mint failed:', err);
    }
  };

  const isLoading = isPending || isConfirming;

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Coins className="h-6 w-6 text-yellow-500" />
          <CardTitle>{name} ({symbol})</CardTitle>
        </div>
        <CardDescription>
          Token ERC20 para torcidas organizadas do São Paulo Futebol Clube
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Token Info */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Seu Saldo</Label>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-lg">
                {balance} {symbol}
              </Badge>
              {isConfirmed && <CheckCircle className="h-4 w-4 text-green-500" />}
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm font-medium">Total Supply</Label>
            <Badge variant="outline" className="text-lg">
              {totalSupply} {symbol}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Transfer Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Send className="h-5 w-5" />
            Transferir Tokens
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="transferTo">Para (Endereço)</Label>
              <Input
                id="transferTo"
                placeholder="0x..."
                value={transferTo}
                onChange={(e) => setTransferTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transferAmount">Quantidade</Label>
              <Input
                id="transferAmount"
                placeholder="0.0"
                type="number"
                value={transferAmount}
                onChange={(e) => setTransferAmount(e.target.value)}
              />
            </div>
          </div>
          <Button 
            onClick={handleTransfer} 
            disabled={isLoading || !transferTo || !transferAmount}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Transferir'
            )}
          </Button>
        </div>

        <Separator />

        {/* Approve Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Aprovar Tokens</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="approveSpender">Spender (Endereço)</Label>
              <Input
                id="approveSpender"
                placeholder="0x..."
                value={approveSpender}
                onChange={(e) => setApproveSpender(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="approveAmount">Quantidade</Label>
              <Input
                id="approveAmount"
                placeholder="0.0"
                type="number"
                value={approveAmount}
                onChange={(e) => setApproveAmount(e.target.value)}
              />
            </div>
          </div>
          <Button 
            onClick={handleApprove} 
            disabled={isLoading || !approveSpender || !approveAmount}
            variant="outline"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Aprovar'
            )}
          </Button>
        </div>

        <Separator />

        {/* Mint Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Mint Tokens (Apenas Owner)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="mintTo">Para (Endereço)</Label>
              <Input
                id="mintTo"
                placeholder="0x..."
                value={mintTo}
                onChange={(e) => setMintTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mintAmount">Quantidade</Label>
              <Input
                id="mintAmount"
                placeholder="0.0"
                type="number"
                value={mintAmount}
                onChange={(e) => setMintAmount(e.target.value)}
              />
            </div>
          </div>
          <Button 
            onClick={handleMint} 
            disabled={isLoading || !mintTo || !mintAmount}
            variant="destructive"
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Mint'
            )}
          </Button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-600">
              Erro: {error.message || 'Ocorreu um erro na transação'}
            </p>
          </div>
        )}

        {/* Refresh Button */}
        <Button 
          onClick={refreshData} 
          variant="ghost" 
          className="w-full"
          disabled={isLoading}
        >
          Atualizar Dados
        </Button>
      </CardContent>
    </Card>
  );
}
