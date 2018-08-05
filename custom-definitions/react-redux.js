// @flow

declare function connect<S, A, OP, SP>(
  mapStateToProps: MapStateToProps<S, OP, SP>,
  mapDispatchToProps: Null,
  mergeProps: Null,
  options?: ConnectOptions
): Connector<OP, $Supertype<SP & { dispatch: Dispatch<A> } & OP>>;
