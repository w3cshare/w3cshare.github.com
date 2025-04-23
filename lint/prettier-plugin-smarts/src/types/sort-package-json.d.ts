declare module 'sort-package-json' {
  function sortPackageJson<T extends object>(packageJson: T): T
  export = sortPackageJson
}
