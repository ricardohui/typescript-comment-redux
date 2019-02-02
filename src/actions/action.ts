// TODO: you need to define an interface for payloaded action.
export interface IPayloadedAction<TType, TPayload> {
  type: TType;
  payload: TPayload;
}

export interface IAction<TType> {
  type: TType;
}
