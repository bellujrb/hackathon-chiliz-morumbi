'use client';

import { useState, useEffect } from 'react';
import { useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { CONTRACTS, type Torcida, type Evento, type Votacao, type VotacaoResult } from '@/lib/contracts';
import { formatUnits, parseUnits } from 'viem';

export function useTorcidaOrganizada() {
  const [torcidas, setTorcidas] = useState<Torcida[]>([]);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [votacoes, setVotacoes] = useState<Votacao[]>([]);
  const [userTorcida, setUserTorcida] = useState<bigint | null>(null);

  // Read contract data
  const { data: nextTorcidaId, refetch: refetchNextTorcidaId } = useReadContract({
    address: CONTRACTS.TORCIDA_ORGANIZADA.address,
    abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
    functionName: 'nextTorcidaId',
    query: {
      enabled: true,
    },
  });

  const { data: nextEventoId, refetch: refetchNextEventoId } = useReadContract({
    address: CONTRACTS.TORCIDA_ORGANIZADA.address,
    abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
    functionName: 'nextEventoId',
    query: {
      enabled: true,
    },
  });

  const { data: nextVotacaoId, refetch: refetchNextVotacaoId } = useReadContract({
    address: CONTRACTS.TORCIDA_ORGANIZADA.address,
    abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
    functionName: 'nextVotacaoId',
    query: {
      enabled: true,
    },
  });

  // Write contract functions
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  // Load all torcidas
  const loadTorcidas = async () => {
    if (!nextTorcidaId) return;
    
    const torcidasData: Torcida[] = [];
    for (let i = 0; i < Number(nextTorcidaId); i++) {
      try {
        const torcida = await getTorcida(i);
        if (torcida) {
          torcidasData.push(torcida);
        }
      } catch (err) {
        console.error(`Error loading torcida ${i}:`, err);
      }
    }
    setTorcidas(torcidasData);
  };

  // Load all eventos
  const loadEventos = async () => {
    if (!nextEventoId) return;
    
    const eventosData: Evento[] = [];
    for (let i = 0; i < Number(nextEventoId); i++) {
      try {
        const evento = await getEvento(i);
        if (evento) {
          eventosData.push(evento);
        }
      } catch (err) {
        console.error(`Error loading evento ${i}:`, err);
      }
    }
    setEventos(eventosData);
  };

  // Load all votacoes
  const loadVotacoes = async () => {
    if (!nextVotacaoId) return;
    
    const votacoesData: Votacao[] = [];
    for (let i = 0; i < Number(nextVotacaoId); i++) {
      try {
        const votacao = await getVotacao(i);
        if (votacao) {
          votacoesData.push(votacao);
        }
      } catch (err) {
        console.error(`Error loading votacao ${i}:`, err);
      }
    }
    setVotacoes(votacoesData);
  };

  // Get single torcida
  const getTorcida = async (torcidaId: number): Promise<Torcida | null> => {
    try {
      // This would need to be implemented with a custom hook or direct contract call
      // For now, return null as placeholder
      return null;
    } catch (err) {
      console.error('Get torcida error:', err);
      return null;
    }
  };

  // Get single evento
  const getEvento = async (eventoId: number): Promise<Evento | null> => {
    try {
      // This would need to be implemented with a custom hook or direct contract call
      // For now, return null as placeholder
      return null;
    } catch (err) {
      console.error('Get evento error:', err);
      return null;
    }
  };

  // Get single votacao
  const getVotacao = async (votacaoId: number): Promise<Votacao | null> => {
    try {
      // This would need to be implemented with a custom hook or direct contract call
      // For now, return null as placeholder
      return null;
    } catch (err) {
      console.error('Get votacao error:', err);
      return null;
    }
  };

  // Contract interaction functions
  const criarTorcida = async (name: string, description: string) => {
    try {
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'criarTorcida',
        args: [name, description],
      });
    } catch (err) {
      console.error('Criar torcida error:', err);
      throw err;
    }
  };

  const entrarTorcida = async (torcidaId: number, stakeAmount: string) => {
    try {
      const stakeAmountWei = parseUnits(stakeAmount, 18);
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'entrarTorcida',
        args: [BigInt(torcidaId), stakeAmountWei],
      });
    } catch (err) {
      console.error('Entrar torcida error:', err);
      throw err;
    }
  };

  const sairTorcida = async () => {
    try {
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'sairTorcida',
        args: [],
      });
    } catch (err) {
      console.error('Sair torcida error:', err);
      throw err;
    }
  };

  const criarEvento = async (
    torcidaId: number,
    name: string,
    description: string,
    eventDate: number,
    location: string,
    maxParticipants: number,
    pricePerPerson: string
  ) => {
    try {
      const priceWei = parseUnits(pricePerPerson, 18);
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'criarEvento',
        args: [
          BigInt(torcidaId),
          name,
          description,
          BigInt(eventDate),
          location,
          BigInt(maxParticipants),
          priceWei,
        ],
      });
    } catch (err) {
      console.error('Criar evento error:', err);
      throw err;
    }
  };

  const inscreverEvento = async (eventoId: number) => {
    try {
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'inscreverEvento',
        args: [BigInt(eventoId)],
      });
    } catch (err) {
      console.error('Inscrever evento error:', err);
      throw err;
    }
  };

  const criarVotacao = async (
    torcidaId: number,
    title: string,
    description: string,
    duration: number
  ) => {
    try {
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'criarVotacao',
        args: [BigInt(torcidaId), title, description, BigInt(duration)],
      });
    } catch (err) {
      console.error('Criar votacao error:', err);
      throw err;
    }
  };

  const votar = async (votacaoId: number, optionId: number) => {
    try {
      await writeContract({
        address: CONTRACTS.TORCIDA_ORGANIZADA.address,
        abi: CONTRACTS.TORCIDA_ORGANIZADA.abi,
        functionName: 'votar',
        args: [BigInt(votacaoId), BigInt(optionId)],
      });
    } catch (err) {
      console.error('Votar error:', err);
      throw err;
    }
  };

  const refreshData = async () => {
    await Promise.all([
      refetchNextTorcidaId(),
      refetchNextEventoId(),
      refetchNextVotacaoId(),
    ]);
    await Promise.all([
      loadTorcidas(),
      loadEventos(),
      loadVotacoes(),
    ]);
  };

  // Load data on mount
  useEffect(() => {
    refreshData();
  }, [nextTorcidaId, nextEventoId, nextVotacaoId]);

  return {
    // Data
    torcidas,
    eventos,
    votacoes,
    userTorcida,
    nextTorcidaId: nextTorcidaId ? Number(nextTorcidaId) : 0,
    nextEventoId: nextEventoId ? Number(nextEventoId) : 0,
    nextVotacaoId: nextVotacaoId ? Number(nextVotacaoId) : 0,
    
    // Loading states
    isPending,
    isConfirming,
    isConfirmed,
    error,
    
    // Functions
    criarTorcida,
    entrarTorcida,
    sairTorcida,
    criarEvento,
    inscreverEvento,
    criarVotacao,
    votar,
    getTorcida,
    getEvento,
    getVotacao,
    loadTorcidas,
    loadEventos,
    loadVotacoes,
    refreshData,
  };
}
