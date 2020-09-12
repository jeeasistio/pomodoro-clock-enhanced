import React, { useReducer } from 'react';
import moment from 'moment';
import TimeDisplay from './TimeDisplay.jsx';
import TimeInput from './TimeInput.jsx';
import TimeButtons from './TimeButtons.jsx';
import { Box } from '@material-ui';

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
          endTime: null
        }
        break;
      default:
        return state;
  }
}

const Main = () => {

  const [{ timeToBeAdded, endTime, ticking }, dispatch] = useReducer(reducer, initialState);
  
  const onTickHandle = () => {
    if (moment().isSame(moment(endTime), 's')) {
      dispatch({type: 'STOP'})
    }
  }

  const startTicking = (e) => {
    e.preventDefault();
    dispatch({
      type: 'START',
      payload: {
        endTime: moment().add(timeToBeAdded).format()
      }
    })
    e.target.reset();
  }
  
  const stopTicking = () => {
    dispatch({type: 'STOP'})
  }

  const updateTime = (e, type) => dispatch({
    type: 'UPDATE_TIME',
    payload: {
      timeToBeAdded: {
        ...timeToBeAdded,
        [type]: e.target.value
      }
    }
  })

  return (
    <Box component="main" display="flex" flexDirection="column">
      <TimeDisplay endTime={endTime} ticking={ticking} onTickHandle={onTickHandle} />
      <Box component="form" onSubmit={startTicking}>
        <TimeInput updateTime={updateTime} />
        <TimeButtons stopTicking={stopTicking} ticking={ticking} />
      </Box>
    </Box>
  )
}

export default Main;