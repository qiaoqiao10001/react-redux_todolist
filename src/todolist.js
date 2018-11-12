import React,{Component} from 'react'
//import store from './store'
import {connect} from 'react-redux'

class TodoList extends Component{
  // constructor(props){
  //   super(props)
  //   this.state = store.getState()
  // } 之前获取store中数据的方法

  handleInputChange(){
    
  }
  
  render(){
    return (
      <div>
        <div>
          <input type="text" value={this.props.inputValue} onChange={this.props.changeInputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>hehe</li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    inputValue:state.inputValue
  }
}

//store.dispatch ,props  将dispatch挂载到props上 
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e){
      console.log(e.target.value);
      const action = {
        type:'change_input_value',
        value:e.target.value
      }

      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList); //让todolist组件和store做连接