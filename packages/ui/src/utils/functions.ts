type TClassArgs = (string | (string | boolean)[])[];

/**
 * Replacement for clsx and classNames for combining class names
 * @function classX
 * @param {TClassNameX} args - Array of classnames to pass in
 * @returns {string} - String of merged classnames
 */

export const classX = (...args: TClassArgs) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');
