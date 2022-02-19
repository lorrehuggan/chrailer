interface InitSearchState {
  active: boolean;
}

interface Action {
  type: string;
  active: string;
}

export const initMenuState: InitSearchState = {
  active: false,
};

export const menuReducer = (state: InitSearchState, action: Action) => {
  switch (action.type) {
    case 'ACTIVE':
      return {
        ...state,
        active: action.active,
      };
  }
};
