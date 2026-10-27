export function formatDateString(dateString){
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return new Intl.DateTimeFormat('pt-BR',{
        day: '2-digit',
        month:'long',
        year:'numeric'
    }).format(date);
}