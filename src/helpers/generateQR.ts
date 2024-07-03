/**
 * This function generates a QR code and returns an url
 * @param url
 * @returns string
 */
export const generateQR = (url: string) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
};
