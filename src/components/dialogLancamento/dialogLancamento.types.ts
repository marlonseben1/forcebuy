export interface DialogLancamentoProps {
    open: boolean;
    tipo: 'receita' | 'despesa';
    onClose: () => void;
}