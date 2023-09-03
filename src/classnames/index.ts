export type ClassValue = string | boolean | ClassValueArray | ClassMap;
export type ClassValueArray = ClassValue[];
export type ClassMap = { [key: string]: string | boolean };

export function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (let i = 0; i < args.length; i++) {
    processArg(args[i], classes);
  }

  let finalClasses = '';
  let isFirstClass = true;

  for (let i = 0; i < classes.length; i++) {
    // Ignore boolean 'true'
    if (classes[i] === 'true') {
      continue;
    }

    // Trim each class
    const trimmedClass = classes[i].trim();

    if (trimmedClass) {
      if (!isFirstClass) {
        finalClasses += ' ';
      } else {
        isFirstClass = false;
      }
      finalClasses += trimmedClass;
    }
  }

  return finalClasses;
}

function processArg(arg: ClassValue, classes: string[]): void {
  if (arg === undefined || arg === null || arg === false) {
    return;
  }

  if (Array.isArray(arg)) {
    for (let i = 0; i < arg.length; i++) {
      processArg(arg[i], classes);
    }
    return;
  }

  if (typeof arg === 'object') {
    for (const key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key)) {
        const value = arg[key];
        if (value === true || value === 'true' || value === '1') {
          classes.push(key);
        }
      }
    }
    return;
  }

  if (typeof arg === 'string' || typeof arg === 'boolean') {
    classes.push(arg.toString());
  }
}
