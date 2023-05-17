import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

function Addtodolist(props) {
    var [state,setState] = useState({newTask : ""});
    function handleChange(evnt){
        setState({newTask:evnt.target.value}) //will update the state when user input changes
    }
    var dispatch = useDispatch();
    function addnewTask(eve){
      eve.preventDefault();
      //  console.log(eve);
      if(state.newTask==="")
      {
        alert("please add something")
      }else{
        alert("added succesfully")
      }
      dispatch(addTodo(state.newTask));
      setState({newTask:''})

    }
    return (
      <div className="main">
      <div className="mainHeading">
      <h1 style={{color :"green",textAlign:"center"}}>
        ToDo List
        </h1>
    </div>
    <div className="subHeading">
      <br />
      <h2 style={{color :"red",textAlign:"center"}}> 
      Whoop, it's Wednesday 🌝 ☕ 
       </h2>
    </div>
    <br />
    <br />
      <Form onSubmit={addnewTask}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your New Task</Form.Label>
        <br />
        <Form.Control  value ={state.newTask} onChange={handleChange} type="text" placeholder="Enter Task" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <h2>{state.newTask}</h2>
      </Form>
      </div>

    )
    
}
export default Addtodolist;