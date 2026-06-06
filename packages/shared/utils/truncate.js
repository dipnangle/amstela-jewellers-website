export const truncate = (str, n = 80) =>
    str && str.length > n ? str.slice(0, n).trim() + '…' : str
