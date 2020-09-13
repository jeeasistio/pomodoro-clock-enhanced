import React, { useReducer } from 'react';
import { initialState, reducer } from '/state/state.js';
import moment from 'moment';
import TimeDisplay from './TimeDisplay.jsx';
import TimeInput from './TimeInput.jsx';
import TimeButtons from './TimeButtons.jsx';
import { Box } from '@material-ui';

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
  
  const addTime = (num) => {
    ticking ?
      dispatch({
        type: 'ADD_TIME',
        payload: {
          endTime: moment(endTime).add(num, 'm').format()
        }
      })
    : dispatch({
      type: 'START',
      payload: {
        endTime: moment(endTime).add(num, 'm').format()
      }
    })
  }
  
  const subtTime = (num) => {
    dispatch({
      type: 'SUBT_TIME',
      payload: {
        endTime: moment(endTime).subtract(num, 'm').format()
      }
    })
  }

  return (
    <Box component="main">
      <TimeDisplay endTime={endTime} ticking={ticking} onTickHandle={onTickHandle} />
      <Box component="form" onSubmit={startTicking}>
        <TimeInput updateTime={updateTime} />
        <TimeButtons 
          stopTicking={stopTicking} 
          ticking={ticking}
          endTime={endTime} 
          addTime={addTime}
          subtTime={subtTime}
        />
      </Box>
    </Box>
  )
}

export default Main;