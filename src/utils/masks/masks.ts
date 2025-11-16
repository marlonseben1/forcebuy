export const maskValor = {
  format: (value: string | number): string => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    }).format(Number(value) || 0);
  },

  parse: (value: string | number): number | '' => {
    // Remove tudo que não for número
    const valorSemPontuacoes = String(value).replace(/\D/g, '');

    if (!valorSemPontuacoes) return '';

    // Divide por 100 → 1.234,56
    return Number(valorSemPontuacoes) / 100;
  },
};