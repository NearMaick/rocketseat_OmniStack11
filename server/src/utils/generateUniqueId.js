import crypto from 'crypto';

export default function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX');
  // const id = Math.floor(Math.random() * 200 + 1);
}
