import React, { Component } from 'react';
import { connect } from 'react-redux';

// const TodoList = (props) => {
//   const { inputValue, handlerInputChange, handlerBtnChange, list } = this.props;
//   return (
//     <div>
//       <div>
//         <input
//           value={inputValue}
//           onChange={handlerInputChange}
//           />
//         <button onClick={handlerBtnChange}>Submit</button>
//       </div>
//       <ul>
//         {
//           list.map((item, index) => {
//             return <li key={index}>{item}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    const { inputValue, handlerInputChange, handlerBtnChange } = this.props;
    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={handlerInputChange}
            />
          <button onClick={handlerBtnChange}>Submit</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handlerInputChange(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action);
    },
    handlerBtnChange() {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    },
    // handlerItemDelete() {
    //   const action = {
    //     type: 'delete_item'
    //   }
    // }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(TodoList);
