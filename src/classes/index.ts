export type ClassProps = string | boolean | { [key: string]: string | boolean } | ClassProps[]

export function c(...args: ClassProps[]): string {
  const classes: string[] = []

  for (let i = 0; i < args.length; i++) {
    processArg(args[i], classes)
  }

  let finalClasses = ""
  let isFirstClass = true

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] === "true") {
      continue
    }

    const trimmedClass = classes[i].trim()

    if (trimmedClass) {
      if (!isFirstClass) {
        finalClasses += " "
      } else {
        isFirstClass = false
      }
      finalClasses += trimmedClass
    }
  }

  return finalClasses
}

function processArg(arg: ClassProps, classes: string[]): void {
  if (arg === undefined || arg === null || arg === false) {
    return
  }

  if (Array.isArray(arg)) {
    for (let i = 0; i < arg.length; i++) {
      processArg(arg[i], classes)
    }
    return
  }

  if (typeof arg === "object") {
    for (const key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key)) {
        const value = arg[key]
        if (value === true || value === "true" || value === "1") {
          classes.push(key)
        }
      }
    }
    return
  }

  if (typeof arg === "string" || typeof arg === "boolean") {
    classes.push(arg.toString())
  }
}
