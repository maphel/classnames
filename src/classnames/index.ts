export type ClassValue = string | undefined | null | boolean;
export type ClassMap = Record<string, boolean | string | number>;

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isBooleanString(value: unknown): boolean {
  return ["true", "1"].includes(value as string);
}

export function classNames(...args: (ClassValue | ClassMap | string | string[])[]): string {
  function processArg (arg: ClassValue | ClassMap | string): string[] {
    if (arg === undefined || arg === null || typeof arg === "boolean") {
      return [];
    }

    if (Array.isArray(arg)) {
      return arg.filter(isString);
    }

    if (typeof arg === "object") {
      return Object.keys(arg)
        .map((key) => {
          const value = arg[key];
          if (value === true) {
            return key;
          }
          if (isString(value) && isBooleanString(value)) {
            return key;
          }
          return null;
        })
        .filter(Boolean)
        .filter(isString);
    }

    if (isString(arg)) {
      return [arg];
    }

    return [];
  };

  return args
    .flatMap(processArg)
    .filter(Boolean)
    .join(" ");
}
