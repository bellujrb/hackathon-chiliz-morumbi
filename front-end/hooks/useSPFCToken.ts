'use client';

import { useState, useEffect } from 'react';
import { useReadContract, useWriteContract, useWaitForTransactionReceipt, useAccount } from 'wagmi';
import { CONTRACTS } from '@/lib/contracts';
import { formatUnits, parseUnits } from 'viem';

export function useSPFCToken() {
  const { address } = useAccount();
  const [balance, setBalance] = useState<string>('0');
  const [totalSupply, setTotalSupply] = useState<string>('0');
  const [decimals, setDecimals] = useState<number>(18);

  // Read contract data
  const { data: balanceData, refetch: refetchBalance } = useReadContract({
    address: CONTRACTS.SPFC_TOKEN.address,
    abi: CONTRACTS.SPFC_TOKEN.abi,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  const { data: totalSupplyData, refetch: refetchTotalSupply } = useReadContract({
    address: CONTRACTS.SPFC_TOKEN.address,
    abi: CONTRACTS.SPFC_TOKEN.abi,
    functionName: 'totalSupply',
    query: {
      enabled: true,
    },
  });

  const { data: decimalsData } = useReadContract({
    address: CONTRACTS.SPFC_TOKEN.address,
    abi: CONTRACTS.SPFC_TOKEN.abi,
    functionName: 'decimals',
    query: {
      enabled: true,
    },
  });

  const { data: nameData } = useReadContract({
    address: CONTRACTS.SPFC_TOKEN.address,
    abi: CONTRACTS.SPFC_TOKEN.abi,
    functionName: 'name',
    query: {
      enabled: true,
    },
  });

  const { data: symbolData } = useReadContract({
    address: CONTRACTS.SPFC_TOKEN.address,
    abi: CONTRACTS.SPFC_TOKEN.abi,
    functionName: 'symbol',
    query: {
      enabled: true,
    },
  });

  // Write contract functions
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Update state when data changes
  useEffect(() => {
    if (balanceData) {
      setBalance(formatUnits(balanceData as bigint, decimals));
    }
  }, [balanceData, decimals]);

  useEffect(() => {
    if (totalSupplyData) {
      setTotalSupply(formatUnits(totalSupplyData as bigint, decimals));
    }
  }, [totalSupplyData, decimals]);

  useEffect(() => {
    if (decimalsData) {
      setDecimals(Number(decimalsData));
    }
  }, [decimalsData]);

  // Contract interaction functions
  const transfer = async (to: string, amount: string) => {
    try {
      const amountWei = parseUnits(amount, decimals);
      await writeContract({
        address: CONTRACTS.SPFC_TOKEN.address,
        abi: CONTRACTS.SPFC_TOKEN.abi,
        functionName: 'transfer',
        args: [to as `0x${string}`, amountWei],
      });
    } catch (err) {
      console.error('Transfer error:', err);
      throw err;
    }
  };

  const approve = async (spender: string, amount: string) => {
    try {
      const amountWei = parseUnits(amount, decimals);
      await writeContract({
        address: CONTRACTS.SPFC_TOKEN.address,
        abi: CONTRACTS.SPFC_TOKEN.abi,
        functionName: 'approve',
        args: [spender as `0x${string}`, amountWei],
      });
    } catch (err) {
      console.error('Approve error:', err);
      throw err;
    }
  };

  const mint = async (to: string, amount: string) => {
    try {
      const amountWei = parseUnits(amount, decimals);
      await writeContract({
        address: CONTRACTS.SPFC_TOKEN.address,
        abi: CONTRACTS.SPFC_TOKEN.abi,
        functionName: 'mint',
        args: [to as `0x${string}`, amountWei],
      });
    } catch (err) {
      console.error('Mint error:', err);
      throw err;
    }
  };

  const getBalance = async (address: string) => {
    try {
      const result = await refetchBalance();
      return result.data ? formatUnits(result.data as bigint, decimals) : '0';
    } catch (err) {
      console.error('Get balance error:', err);
      return '0';
    }
  };

  const refreshData = async () => {
    await Promise.all([refetchBalance(), refetchTotalSupply()]);
  };

  return {
    // Data
    balance,
    totalSupply,
    decimals,
    name: nameData as string,
    symbol: symbolData as string,
    
    // Loading states
    isPending,
    isConfirming,
    isConfirmed,
    error,
    
    // Functions
    transfer,
    approve,
    mint,
    getBalance,
    refreshData,
  };
}
