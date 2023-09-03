import {classNames} from "./index";

describe("classnames", () => {
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
      expect(classNames({class1: true, class2: false})).toBe('class1');
    });

    it('should filter out false keys in ClassMap and include true keys and add class3', () => {
      expect(classNames({class1: true, class2: false}, "class3")).toBe('class1 class3');
    });

    it('should filter out false keys in ClassMap and include true keys and add class3', () => {
      expect(classNames({class1: true, class2: false}, undefined, "class3")).toBe('class1 class3');
    });

    it('should handle a combination of all types of arguments', () => {
      expect(classNames('class1', undefined, null, {
        class2: true,
        class3: false
      }, 'class4')).toBe('class1 class2 class4');
    });

    it('should ignore object arguments with non-boolean values except strings like "true" or "false" or "1" or "2"', () => {
      expect(classNames({class1: "true", class2: 123, class3: "1"} as any)).toBe('class1 class3');
    });

    it('should only include keys with boolean true values in mixed objects', () => {
      expect(classNames({class1: true, class2: "false", class3: 0} as any)).toBe('class1');
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
      expect(classNames({class1: true, nested: {class2: true}} as any)).toBe('class1');
    });

    it('should include class names with leading or trailing whitespaces as-is', () => {
      expect(classNames(' class1 ', 'class2 ')).toBe('class1 class2');
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
      expect(classNames({class1: true, class2: false})).toBe('class1');
    });

    it('evaluate all features', () => {
      expect(classNames('a', ['b', 'c'], {d: true}, ['e', {f: true}, ' g', 'h '], [' i ', [{' j': true}]], ' k', 'l ', ' m ')).toBe('a b c d e f g h i j k l m');
    });

    it('should return empty string for no arguments', () => {
      expect(classNames()).toBe('');
    });

    it('should concatenate class names', () => {
      expect(classNames('a', 'b')).toBe('a b');
    });

    it('should omit falsy values', () => {
      expect(classNames('a', null, false, 'b')).toBe('a b');
    });

    it('should include truthy values from an object', () => {
      expect(classNames('a', {'b': true, 'c': false}, 'd')).toBe('a b d');
    });

    it('should work with arrays', () => {
      expect(classNames(['a', 'b'])).toBe('a b');
    });

    it('should work with nested arrays', () => {
      expect(classNames(['a', ['b', 'c']])).toBe('a b c');
    });

    it('should work with arrays containing objects', () => {
      expect(classNames(['a', {'b': true}])).toBe('a b');
    });

    it('should work with deeply nested structures', () => {
      expect(classNames(['a', ['b', {'c': true}], [['d', {'e': true}]]])).toBe('a b c d e');
    });
  });
