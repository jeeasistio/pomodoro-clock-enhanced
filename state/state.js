import moment from 'moment';

const initialState = {
  timeToBeAdded: {
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  endTime: moment().format(),
  ticking: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        timeToBeAdded: {
          hours: 0,
          minutes: 0,
          seconds: 0
        },
        endTime: action.payload.endTime,
        ticking: true
      }
      case 'UPDATE_TIME':
        return {
          ...state,
          timeToBeAdded: action.payload.timeToBeAdded
        }
        break;
      case 'STOP':
        return {
          ...state,
          ticking: false,
          endTime: moment().format()
        }
        break;
      case 'ADD_TIME':
        return {
          ...state,
          endTime: action.payload.endTime
        }
        break;
      case 'SUBT_TIME':
        return {
          ...state,
          endTime: action.payload.endTime
        }
        break;
      default:
        return state;
  }
}

export { initialState, reducer };