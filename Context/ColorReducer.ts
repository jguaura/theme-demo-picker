import { Colors } from './ContextInterfaces';

type ColorAction =
  | {type: 'switchColor', payload: Colors}

export const ColorReducer = (state:Colors, action: ColorAction) => {
  switch (action.type) {
    case 'switchColor':
      return {
        ...state,
        state: action.payload
      }
      default:
        return state;     
  }
}