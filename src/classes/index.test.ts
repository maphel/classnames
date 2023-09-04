import { c } from "./index"

describe("c", () => {
  it("should return an empty string if no arguments are provided", () => {
    expect(c()).toBe("")
  })

  it("should ignore undefined, null, and boolean arguments", () => {
    expect(c(undefined, null, false, true)).toBe("")
  })

  it("should include string arguments", () => {
    expect(c("class1", "class2")).toBe("class1 class2")
  })

  it("should filter out false keys in ClassMap and include true keys", () => {
    expect(c({ class1: true, class2: false })).toBe("class1")
  })

  it("should filter out false keys in ClassMap and include true keys and add class3", () => {
    expect(c({ class1: true, class2: false }, "class3")).toBe("class1 class3")
  })

  it("should filter out false keys in ClassMap and include true keys and add class3", () => {
    expect(c({ class1: true, class2: false }, undefined, "class3")).toBe("class1 class3")
  })

  it("should handle a combination of all types of arguments", () => {
    expect(
      c(
        "class1",
        undefined,
        null,
        {
          class2: true,
          class3: false,
        },
        "class4",
      ),
    ).toBe("class1 class2 class4")
  })

  it('should ignore object arguments with non-boolean values except strings like "true" or "false" or "1" or "2"', () => {
    expect(c({ class1: "true", class2: 123, class3: "1" } as any)).toBe("class1 class3")
  })

  it("should only include keys with boolean true values in mixed objects", () => {
    expect(c({ class1: true, class2: "false", class3: 0 } as any)).toBe("class1")
  })

  it("should ignore empty strings", () => {
    expect(c("class1", "", "class2")).toBe("class1 class2")
  })

  it("should include classes names with whitespace", () => {
    expect(c("class1", "classes two")).toBe("class1 classes two")
  })

  it("should ignore number classes names", () => {
    expect(c("class1", 123 as any, "class2")).toBe("class1 class2")
  })

  it("should ignore array inputs", () => {
    expect(c("class1", ["class2", "class3"] as any)).toBe("class1 class2 class3")
  })

  it("should ignore nested objects", () => {
    expect(c({ class1: true, nested: { class2: true } } as any)).toBe("class1")
  })

  it("should include classes names with leading or trailing whitespaces as-is", () => {
    expect(c(" class1 ", "class2 ")).toBe("class1 class2")
  })

  it("should include classes names with array", () => {
    expect(c(["class1", "class2"])).toBe("class1 class2")
  })

  it("should include classes names with array and string as 2nd parameter", () => {
    expect(c(["class1", "class2"], "class3")).toBe("class1 class2 class3")
  })

  it("should include classes names with array with object and string additional parameter", () => {
    expect(c(["class1", "class2"], "class3", { class4: true })).toBe("class1 class2 class3 class4")
  })

  it("should filter out false keys in ClassMap and include true keys", () => {
    expect(c({ class1: true, class2: false })).toBe("class1")
  })

  it("evaluate all features", () => {
    expect(
      c("a", ["b", "c"], { d: true }, ["e", { f: true }, " g", "h "], [" i ", [{ " j": true }]], " k", "l ", " m "),
    ).toBe("a b c d e f g h i j k l m")
  })

  it("should return empty string for no arguments", () => {
    expect(c()).toBe("")
  })

  it("should concatenate classes names", () => {
    expect(c("a", "b")).toBe("a b")
  })

  it("should omit falsy values", () => {
    expect(c("a", null, false, "b")).toBe("a b")
  })

  it("should include truthy values from an object", () => {
    expect(c("a", { b: true, c: false }, "d")).toBe("a b d")
  })

  it("should work with arrays", () => {
    expect(c(["a", "b"])).toBe("a b")
  })

  it("should work with nested arrays", () => {
    expect(c(["a", ["b", "c"]])).toBe("a b c")
  })

  it("should work with arrays containing objects", () => {
    expect(c(["a", { b: true }])).toBe("a b")
  })

  it("should work with deeply nested structures", () => {
    expect(c(["a", ["b", { c: true }], [["d", { e: true }]]])).toBe("a b c d e")
  })

  it("should work with only one object", () => {
    expect(c({ e: true })).toBe("e")
  })

  it("should work with only one string", () => {
    expect(c("e")).toBe("e")
  })
})
