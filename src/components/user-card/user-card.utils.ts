export const formatDate = (date: Date) => {
  return `
    ${date.toLocaleString('en-US', { day: '2-digit' })}
    ${date.toLocaleString('en-US', { month: 'long' })}
    ${date.getFullYear()}
  `;
};
