declare module 'react-redux' {
  declare type typeReactRedux = {
    name: string,
    reason: string,
    is_awesome: boolean
  }
  declare function reactRedux(name: string): typeReactRedux;
}
