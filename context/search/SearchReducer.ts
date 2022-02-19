interface InitSearchState {
  query: string | null;
}

interface Action {
  type: string;
  query: string;
}

export const initSearchState: InitSearchState = {
  query: null,
};

export const searchReducer = (state: InitSearchState, action: Action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        query: action.query,
      };
  }
};
