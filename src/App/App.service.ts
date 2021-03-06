export enum GameStatus {
  INIT,
  START,
}

type AppState = {
  status: GameStatus
}

export const appInitialState = {
  status: GameStatus.INIT
}

export const AppReducer = (state: AppState, action: String) => {
  switch (action) {
    default:
      return state;
  }
}
