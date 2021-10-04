import React from "react";





import "./Section.css";
import { useState} from "react";
function Section() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
   
  //const [id,setId]=useState(null)
  //const [title,setTitle]=useState("")
  
  const deleteTask = (index) => {
    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...toDos];
      test.splice(index, 1);

      setTodos(test);
    } else {
      console.log("Don't delete");
    }
  };
 

  return (
    <div className="app">
      <div className="mainHeading">
        <h4>Tasks </h4>
        <span>
          {" "}
          <h1>Task</h1> <i class="fas fa-caret-down"> </i>
          <i class="fas fa-times  times"></i>{" "}
        </span>
      </div>
      <div className="subHeading">
        <br />
      </div>
      <div className="input">
        <i
          className="fas fa-plus"
          onClick={() =>
            setTodos([...toDos, { id: Date.now(), text: toDo, status:false }])
        
          }
        ></i>
        
        <input
          type="text"
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}

          placeholder="Add a task"
        />
        <i class="fas fa-ellipsis-v"></i>
      </div>

      <div className="todos">
        {toDos.map((obj, index) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  type="checkbox"
              
                  onChange={(e) => {
                     
                    console.log(e.target.checked);
                    if (obj.status===true)
                    {
                      console.log('CREATED...');
                    }
                    else{
                      console.log('COMPLETED...');
                    }
                    console.log(obj);

                    setTodos(
                      toDos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  name=""
                  id=""
                />
                <p>
                  {index + 1}. {obj.text}
                </p>
              </div>
              <div className="right">
              <i class="fas fa-trash"
                  onClick={() => deleteTask(index)}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <h2>Completed Task</h2>
      <br />
      <br />
      {toDos.map((obj) => {
        if (obj.status) {
          return (
            <>
              <div className="done">
                <h4 className="completed-task">
                  <i class="fa fa-check" aria-hidden="true"></i> {obj.text}
                </h4>
              </div>
            
              <br></br>
            </>
          );
        }

        return null;
      })}
    </div>
  );
}

export default Section;