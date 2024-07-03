export const generateQR = (url: string) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
};
