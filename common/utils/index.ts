export const formatStr = (str: string) => str
  .split(' ')
  .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
  .join(' ') + '1'
