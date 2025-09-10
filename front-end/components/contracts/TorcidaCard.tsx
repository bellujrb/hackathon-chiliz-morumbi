'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useTorcidaOrganizada } from '@/hooks/useTorcidaOrganizada';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Users, Calendar, Vote, CheckCircle } from 'lucide-react';

export function TorcidaCard() {
  const { address } = useAccount();
  const [isMounted, setIsMounted] = useState(false);
  const {
    torcidas,
    eventos,
    votacoes,
    userTorcida,
    nextTorcidaId,
    nextEventoId,
    nextVotacaoId,
    isPending,
    isConfirming,
    isConfirmed,
    error,
    criarTorcida,
    entrarTorcida,
    sairTorcida,
    criarEvento,
    inscreverEvento,
    criarVotacao,
    votar,
    refreshData,
  } = useTorcidaOrganizada();

  // Form states
  const [torcidaName, setTorcidaName] = useState('');
  const [torcidaDescription, setTorcidaDescription] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedTorcidaId, setSelectedTorcidaId] = useState('');

  const [eventoName, setEventoName] = useState('');
  const [eventoDescription, setEventoDescription] = useState('');
  const [eventoDate, setEventoDate] = useState('');
  const [eventoLocation, setEventoLocation] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [pricePerPerson, setPricePerPerson] = useState('');

  const [votacaoTitle, setVotacaoTitle] = useState('');
  const [votacaoDescription, setVotacaoDescription] = useState('');
  const [votacaoDuration, setVotacaoDuration] = useState('');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-2">
              <Loader2 className="h-6 w-6 animate-spin" />
              <p className="text-sm text-gray-600">Carregando...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isLoading = isPending || isConfirming;

  const handleCriarTorcida = async () => {
    if (!torcidaName || !torcidaDescription) return;
    try {
      await criarTorcida(torcidaName, torcidaDescription);
      setTorcidaName('');
      setTorcidaDescription('');
    } catch (err) {
      console.error('Criar torcida failed:', err);
    }
  };

  const handleEntrarTorcida = async () => {
    if (!selectedTorcidaId || !stakeAmount) return;
    try {
      await entrarTorcida(Number(selectedTorcidaId), stakeAmount);
      setSelectedTorcidaId('');
      setStakeAmount('');
    } catch (err) {
      console.error('Entrar torcida failed:', err);
    }
  };

  const handleCriarEvento = async () => {
    if (!selectedTorcidaId || !eventoName || !eventoDescription || !eventoDate || !eventoLocation || !maxParticipants || !pricePerPerson) return;
    try {
      await criarEvento(
        Number(selectedTorcidaId),
        eventoName,
        eventoDescription,
        new Date(eventoDate).getTime() / 1000,
        eventoLocation,
        Number(maxParticipants),
        pricePerPerson
      );
      setEventoName('');
      setEventoDescription('');
      setEventoDate('');
      setEventoLocation('');
      setMaxParticipants('');
      setPricePerPerson('');
    } catch (err) {
      console.error('Criar evento failed:', err);
    }
  };

  const handleCriarVotacao = async () => {
    if (!selectedTorcidaId || !votacaoTitle || !votacaoDescription || !votacaoDuration) return;
    try {
      await criarVotacao(
        Number(selectedTorcidaId),
        votacaoTitle,
        votacaoDescription,
        Number(votacaoDuration)
      );
      setVotacaoTitle('');
      setVotacaoDescription('');
      setVotacaoDuration('');
    } catch (err) {
      console.error('Criar votacao failed:', err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Torcidas List */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="h-6 w-6 text-blue-500" />
            <CardTitle>Torcidas Organizadas</CardTitle>
          </div>
          <CardDescription>
            Total de torcidas: {nextTorcidaId}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {torcidas.length > 0 ? (
              <div className="grid gap-4">
                {torcidas.map((torcida) => (
                  <div key={torcida.id.toString()} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{torcida.name}</h3>
                        <p className="text-sm text-gray-600">{torcida.description}</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">
                            {torcida.memberCount.toString()} membros
                          </Badge>
                          <Badge variant="outline">
                            {torcida.totalStaked.toString()} staked
                          </Badge>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => setSelectedTorcidaId(torcida.id.toString())}
                      >
                        Selecionar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Nenhuma torcida encontrada</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Create Torcida */}
      <Card>
        <CardHeader>
          <CardTitle>Criar Nova Torcida</CardTitle>
          <CardDescription>
            Crie uma nova torcida organizada
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="torcidaName">Nome da Torcida</Label>
              <Input
                id="torcidaName"
                placeholder="Ex: Torcida Jovem"
                value={torcidaName}
                onChange={(e) => setTorcidaName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="torcidaDescription">Descrição</Label>
              <Input
                id="torcidaDescription"
                placeholder="Descrição da torcida"
                value={torcidaDescription}
                onChange={(e) => setTorcidaDescription(e.target.value)}
              />
            </div>
          </div>
          <Button 
            onClick={handleCriarTorcida} 
            disabled={isLoading || !torcidaName || !torcidaDescription}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Criar Torcida'
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Join Torcida */}
      <Card>
        <CardHeader>
          <CardTitle>Entrar em Torcida</CardTitle>
          <CardDescription>
            Entre em uma torcida existente
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="selectedTorcidaId">ID da Torcida</Label>
              <Input
                id="selectedTorcidaId"
                placeholder="0"
                type="number"
                value={selectedTorcidaId}
                onChange={(e) => setSelectedTorcidaId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stakeAmount">Valor do Stake (SPFC)</Label>
              <Input
                id="stakeAmount"
                placeholder="100"
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              onClick={handleEntrarTorcida} 
              disabled={isLoading || !selectedTorcidaId || !stakeAmount}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
            <Button 
              onClick={sairTorcida} 
              disabled={isLoading}
              variant="outline"
              className="flex-1"
            >
              Sair
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Create Evento */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-green-500" />
            <CardTitle>Criar Evento</CardTitle>
          </div>
          <CardDescription>
            Crie um evento para sua torcida
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventoName">Nome do Evento</Label>
              <Input
                id="eventoName"
                placeholder="Ex: Jogo SPFC vs Palmeiras"
                value={eventoName}
                onChange={(e) => setEventoName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eventoDate">Data do Evento</Label>
              <Input
                id="eventoDate"
                type="datetime-local"
                value={eventoDate}
                onChange={(e) => setEventoDate(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventoDescription">Descrição</Label>
            <Textarea
              id="eventoDescription"
              placeholder="Descrição do evento"
              value={eventoDescription}
              onChange={(e) => setEventoDescription(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="eventoLocation">Local</Label>
              <Input
                id="eventoLocation"
                placeholder="Ex: Morumbi"
                value={eventoLocation}
                onChange={(e) => setEventoLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxParticipants">Max Participantes</Label>
              <Input
                id="maxParticipants"
                placeholder="100"
                type="number"
                value={maxParticipants}
                onChange={(e) => setMaxParticipants(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pricePerPerson">Preço por Pessoa (SPFC)</Label>
              <Input
                id="pricePerPerson"
                placeholder="10"
                type="number"
                value={pricePerPerson}
                onChange={(e) => setPricePerPerson(e.target.value)}
              />
            </div>
          </div>
          <Button 
            onClick={handleCriarEvento} 
            disabled={isLoading || !selectedTorcidaId || !eventoName || !eventoDescription || !eventoDate || !eventoLocation || !maxParticipants || !pricePerPerson}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Criar Evento'
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Create Votacao */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Vote className="h-6 w-6 text-purple-500" />
            <CardTitle>Criar Votação</CardTitle>
          </div>
          <CardDescription>
            Crie uma votação para sua torcida
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="votacaoTitle">Título da Votação</Label>
              <Input
                id="votacaoTitle"
                placeholder="Ex: Escolha do uniforme"
                value={votacaoTitle}
                onChange={(e) => setVotacaoTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="votacaoDuration">Duração (dias)</Label>
              <Input
                id="votacaoDuration"
                placeholder="7"
                type="number"
                value={votacaoDuration}
                onChange={(e) => setVotacaoDuration(e.target.value)}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="votacaoDescription">Descrição</Label>
            <Textarea
              id="votacaoDescription"
              placeholder="Descrição da votação"
              value={votacaoDescription}
              onChange={(e) => setVotacaoDescription(e.target.value)}
            />
          </div>
          <Button 
            onClick={handleCriarVotacao} 
            disabled={isLoading || !selectedTorcidaId || !votacaoTitle || !votacaoDescription || !votacaoDuration}
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              'Criar Votação'
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Error Display */}
      {error && (
        <Card>
          <CardContent className="pt-6">
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">
                Erro: {error.message || 'Ocorreu um erro na transação'}
              </p>
            </div>
          </CardContent>
        </Card>
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
    </div>
  );
}
