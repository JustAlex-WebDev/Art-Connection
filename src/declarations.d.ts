// TypeScript module declarations for non-TypeScript file imports

// Declaration for importing .jsx files
declare module "*.jsx" {
  const content: any;
  export default content;
}
