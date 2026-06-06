export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
export const isPhone = (v) => /^[+]?[\d\s\-()]{8,15}$/.test(v)
export const isRequired = (v) => v !== null && v !== undefined && String(v).trim().length > 0
