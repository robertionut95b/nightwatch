import { identity, pickBy } from 'lodash';

export function removeEmpty(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(obj)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([_, v]) => v !== null && v !== '' && v !== undefined)
      //@ts-expect-error("Type 'unknown' is not assignable to type 'string'")
      .map(([k, v]) => [k, v === Object(v) ? removeEmpty(v) : v]),
  );
}

export function removeEmpty2(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  return pickBy(obj, identity);
}
