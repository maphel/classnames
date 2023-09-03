type ClassValue = string | undefined | null | boolean;
type ClassMap = Record<string, boolean>;

function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function classNames(...args: (ClassValue | ClassMap)[]): string {
  const processArg = (arg: ClassValue | ClassMap): string[] => {
    if (arg === undefined || arg === null || typeof arg === "boolean") {
      return [];
    }

    if (typeof arg === "object") {
      return Object.keys(arg)
        .map((key) => (arg[key] ? key : null))
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
