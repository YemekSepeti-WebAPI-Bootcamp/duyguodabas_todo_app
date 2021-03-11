import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    let todos = useSelector(state => state)
    return (
        <>
            <div className="pt-5">
                <div className="card-custom py-4">
                    <div className="d-flex justify-content-between">
                        <h3 className="text-dark card-title pl-4">Todo List</h3>
                    </div>
                    <ul>
                        {todos.map((todo) => {
                            return <TodoItem key={todo.id} todo={todo}/>
                        })}
                    </ul>
                </div>
                <style jsx>{`
                  .text-muted {
                    color: #B5B5C3 !important;
                  }

                  .font-size-h6 {
                    font-size: 1.75rem !important;
                  }

                  .text-dark {
                    color: #181C32 !important;
                  }

                  .todo {
                    color: #3F4254 !important;
                    font-weight: 500 !important;
                    margin-bottom: 0.25rem !important;
                  }

                  .bullet.bullet-bar {
                    width: 4px;
                    height: auto;
                  }

                  .bullet {
                    display: inline-block;
                    background-color: #E4E6EF;
                    width: 10px;
                    height: 2px;
                    border-radius: 2rem;
                    margin-left: 1rem;

                  }

                  .todo-text {
                    font-size: 1.40rem;
                  }

                  .bg-success {
                    background-color: #3699FF !important;
                  }

                  .card-custom {
                    -webkit-box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);
                    box-shadow: 0px 0px 30px 0px rgb(82 63 105 / 5%);
                    border: 0;
                    background: white;
                    border-radius: 0.42rem;
                  }

                  .delete-icon {
                    color: #F64E60 !important;
                    cursor: pointer;
                    font-size: 2em;
                  }

                  .edit-icon {
                    color: #FFA800 !important;
                    cursor: pointer;
                    font-size: 2em;
                  }
                `}</style>
            </div>


        </>
    )
}

export default TodoList;
