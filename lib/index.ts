export type Maybe<T> = (just: (thing: T) => any, nothing: () => any) => any;

export function just<T>(thing: T): Maybe<T> {
  return (just, nothing) => just(thing);
}

export function nothing<T>(): Maybe<T> {
  return (just, nothing) => nothing();
}
