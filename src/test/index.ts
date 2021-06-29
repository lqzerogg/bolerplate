import { Dog } from './lib';
export { Dog };

console.log(new Dog<string>('Bruto').name);
