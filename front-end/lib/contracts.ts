import { CONTRACT_ADDRESSES, CHAIN_ID, RPC_URL } from '@/abi/contracts';
import SPFCTokenABI from '@/abi/SPFCToken.json';
import TorcidaOrganizadaABI from '@/abi/TorcidaOrganizada.json';

// Contract configurations
export const CONTRACTS = {
  SPFC_TOKEN: {
    address: CONTRACT_ADDRESSES.SPFC_TOKEN,
    abi: SPFCTokenABI.abi,
    chainId: CHAIN_ID,
  },
  TORCIDA_ORGANIZADA: {
    address: CONTRACT_ADDRESSES.TORCIDA_ORGANIZADA,
    abi: TorcidaOrganizadaABI.abi,
    chainId: CHAIN_ID,
  },
} as const;

// Network configuration
export const NETWORK_CONFIG = {
  chainId: CHAIN_ID,
  rpcUrl: RPC_URL,
  name: 'Chiliz Testnet',
  currency: 'CHZ',
  explorerUrl: 'https://scan.chiliz.com/',
} as const;

// Contract function types
export type SPFCTokenContract = typeof CONTRACTS.SPFC_TOKEN;
export type TorcidaOrganizadaContract = typeof CONTRACTS.TORCIDA_ORGANIZADA;

// Event types
export interface TorcidaCriadaEvent {
  torcidaId: bigint;
  name: string;
  leader: string;
}

export interface EventoCriadoEvent {
  eventoId: bigint;
  torcidaId: bigint;
  name: string;
}

export interface UsuarioEntrouTorcidaEvent {
  torcidaId: bigint;
  user: string;
  stakeAmount: bigint;
}

export interface VotacaoCriadaEvent {
  votacaoId: bigint;
  torcidaId: bigint;
  title: string;
}

// Data types
export interface Torcida {
  id: bigint;
  name: string;
  description: string;
  leader: string;
  totalStaked: bigint;
  memberCount: bigint;
  active: boolean;
  createdAt: bigint;
}

export interface Evento {
  id: bigint;
  torcidaId: bigint;
  name: string;
  description: string;
  eventDate: bigint;
  location: string;
  maxParticipants: bigint;
  currentParticipants: bigint;
  pricePerPerson: bigint;
  active: boolean;
  organizer: string;
}

export interface Votacao {
  id: bigint;
  torcidaId: bigint;
  title: string;
  description: string;
  startTime: bigint;
  endTime: bigint;
  active: boolean;
  totalVotes: bigint;
  creator: string;
}

export interface VotacaoResult {
  totalVotes: bigint;
  optionVotes: bigint[];
}
