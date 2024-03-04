export const supportedJsFileTypesSet = ["js", "mjs", "cjs"] as const;
export const supportedTsFileTypesSet = ["ts", "mts", "cts"] as const;
export const supportedJsxFileTypesSet = ["jsx", "mjsx"] as const;
export const supportedTsxFileTypesSet = ["tsx", "mtsx"] as const;

export const supportedJsFileTypes = supportedJsFileTypesSet.join(",");
export const supportedTsFileTypes = supportedTsFileTypesSet.join(",");
export const supportedJsxFileTypes = supportedJsxFileTypesSet.join(",");
export const supportedTsxFileTypes = supportedTsxFileTypesSet.join(",");

export const supportedAllFileTypesSet = [
  ...supportedJsFileTypesSet,
  ...supportedTsFileTypesSet,
  ...supportedJsxFileTypesSet,
  ...supportedTsxFileTypesSet,
] as const;
export const supportedAllFileTypes = supportedAllFileTypesSet.join(",");

export const supportedReactFileTypesSet = [
  ...supportedJsxFileTypes,
  ...supportedTsxFileTypes,
] as const;
export const supportedReactFileTypes = supportedReactFileTypesSet.join(",");
