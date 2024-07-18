declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass?inline" {
  const content: string;
  export default content;
}

declare module "*.css?inline" {
  const content: string;
  export default content;
}
