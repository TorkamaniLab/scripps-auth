import { verify } from 'jsonwebtoken';
import fs from 'fs';

type PublicKey = Buffer | string;
export type Checker = (token: string) => void;

const verifyToken = (token: string, pubKey: PublicKey) => verify(token, pubKey);

const readPublicKeyUsingPath = (keyPath: string): Buffer =>
  fs.readFileSync(keyPath);

const getCheckerUsingKey = (pubKey: PublicKey) => (token: string) =>
  verifyToken(token, pubKey);

const getCheckerUsingKeyPath = (keyPath: string): Checker =>
  getCheckerUsingKey(readPublicKeyUsingPath(keyPath));

export default getCheckerUsingKeyPath;
