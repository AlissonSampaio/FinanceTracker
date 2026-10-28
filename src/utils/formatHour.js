export function formatHour(isoString){
    if (!isoString) return '';
    const date = new Date(isoString);
    return new Intl.DateTimeFormat('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
    }).format(date);
}