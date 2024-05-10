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
