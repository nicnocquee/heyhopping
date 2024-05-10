declare module 'url-matcher' {
  export function matchPattern(
    pattern: string,
    path: string
  ):
    | {
        remainingPathname: string
        paramValues: Array<string>
        paramNames: Array<string>
      }
    | undefined
}

// Assuming your MDX components accept any props for maximum flexibility
declare module '*.mdx' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXComponent: React.ComponentType<any>
  export default MDXComponent
}
