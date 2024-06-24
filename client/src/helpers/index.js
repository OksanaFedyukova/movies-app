
export const formatrelease_date = (dateString) => {
    if (!dateString) return ''; 
  
    const parts = dateString.split(/[T\s]/);
    if (parts.length < 1) return ''; 
  
    const [year, month] = parts[0].split('-').slice(0, 2);
  
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    return `${monthNames[parseInt(month, 10) - 1]} ${year}`;
  };
  