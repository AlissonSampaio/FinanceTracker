// Função que serve para converter e formatar a data do formato padrão de formulários/HTML 
// para o formato visual brasileiro/português.
export function formatDate(dateString){
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year};`
}