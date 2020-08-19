import type { STRATEGY } from './global.d';

export function getDependency <T>(strategy: STRATEGY, dependencies: T) {
  return function (key: keyof T) {
    if (strategy === 'latest') {
      return `${key}@latest`;
    }

    return `${key}@${dependencies[key] || 'latest'}`;
  };
}

export function arr2str (arr: string[]) {
  return arr.join(' ').trim();
}

export function intersection (arr1: any[], arr2: any[]) {
  const set_2 = new Set(arr2);

  return Array.from(new Set(arr1.filter(v => set_2.has(v))));
}