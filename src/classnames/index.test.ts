import {classNames, isBooleanString, isString} from "./index";

describe("classnames", () => {
  describe('isString function', () => {
    it('should return true for string', () => {
      expect(isString('test')).toBe(true);
    });

    it('should return false for non-string', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
    });
  });

  describe('isBooleanString', () => {
    it('should return false for true as boolean', () => {
      expect(isBooleanString(true)).toBe(false);
    });

    it('should return false for false as boolean', () => {
      expect(isBooleanString(false)).toBe(false);
    });

    it('should return false for null', () => {
      expect(isBooleanString(null)).toBe(false);
    });

    it('should return false for undefined', () => {
      expect(isBooleanString(undefined)).toBe(false);
    });

    it('should return false for number 1', () => {
      expect(isBooleanString(1)).toBe(false);
    });

    it('should return false for number 0', () => {
      expect(isBooleanString(0)).toBe(false);
    });

    it('should return true for "true" string', () => {
      expect(isBooleanString("true")).toBe(true);
    });

    it('should return true for "1" string', () => {
      expect(isBooleanString("1")).toBe(true);
    });

    it('should return false for "false" string', () => {
      expect(isBooleanString("false")).toBe(false);
    });

    it('should return false for "0" string', () => {
      expect(isBooleanString("0")).toBe(false);
    });

    it('should return false for arbitrary string', () => {
      expect(isBooleanString("hello")).toBe(false);
    });

    // Test for objects and arrays (should return false)
    it('should return false for empty object', () => {
      expect(isBooleanString({})).toBe(false);
    });

    it('should return false for empty array', () => {
      expect(isBooleanString([])).toBe(false);
    });
  });

  describe('classNames function', () => {
    it('should return an empty string if no arguments are provided', () => {
      expect(classNames()).toBe('');
    });

    it('should ignore undefined, null, and boolean arguments', () => {
      expect(classNames(undefined, null, false, true)).toBe('');
    });

    it('should include string arguments', () => {
      expect(classNames('class1', 'class2')).toBe('class1 class2');
    });

    it('should filter out false keys in ClassMap and include true keys', () => {
      expect(classNames({ class1: true, class2: false })).toBe('class1');
    });

    it('should filter out false keys in ClassMap and include true keys and add class3', () => {
      expect(classNames({ class1: true, class2: false }, "class3")).toBe('class1 class3');
    });

    it('should filter out false keys in ClassMap and include true keys and add class3', () => {
      expect(classNames({ class1: true, class2: false }, undefined, "class3")).toBe('class1 class3');
    });

    it('should handle a combination of all types of arguments', () => {
      expect(classNames('class1', undefined, null, { class2: true, class3: false }, 'class4')).toBe('class1 class2 class4');
    });

    it('should ignore object arguments with non-boolean values except strings like "true" or "false" or "1" or "2"', () => {
      expect(classNames({ class1: "true", class2: 123, class3: "1" } as any)).toBe('class1 class3');
    });

    it('should only include keys with boolean true values in mixed objects', () => {
      expect(classNames({ class1: true, class2: "false", class3: 0 } as any)).toBe('class1');
    });

    it('should ignore empty strings', () => {
      expect(classNames('class1', '', 'class2')).toBe('class1 class2');
    });

    it('should include class names with whitespace', () => {
      expect(classNames('class1', 'class two')).toBe('class1 class two');
    });

    it('should ignore number class names', () => {
      expect(classNames('class1', 123 as any, 'class2')).toBe('class1 class2');
    });

    it('should ignore array inputs', () => {
      expect(classNames('class1', ['class2', 'class3'] as any)).toBe('class1 class2 class3');
    });

    it('should ignore nested objects', () => {
      expect(classNames({ class1: true, nested: { class2: true }} as any)).toBe('class1');
    });

    it('should include class names with leading or trailing whitespaces as-is', () => {
      expect(classNames(' class1 ', 'class2 ')).toBe(' class1  class2 ');
    });

    it('should include class names with array', () => {
      expect(classNames(['class1', 'class2'])).toBe('class1 class2');
    });

    it('should include class names with array and string as 2nd parameter', () => {
      expect(classNames(['class1', 'class2'], "class3")).toBe('class1 class2 class3');
    });

    it('should include class names with array with object and string additional parameter', () => {
      expect(classNames(['class1', 'class2'], "class3", {class4: true})).toBe('class1 class2 class3 class4');
    });

    it('should filter out false keys in ClassMap and include true keys', () => {
      expect(classNames({ class1: true, class2: false })).toBe('class1');
    });


  });

})
