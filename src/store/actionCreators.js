import axios from 'axios';
import { ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM, INITIAL_LIST_ITEM } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index
});

export const initListAction = (data) => ({
  type: INITIAL_LIST_ITEM,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/todo/').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
}
