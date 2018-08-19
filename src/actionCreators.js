export const ADD_TODO = "actionCreators/ADD_TODO";
export const REMOVE_TODO = "actionCreators/REMOVE_TODO";

export function addToDo(task) {
  return {
    type: ADD_TODO,
    task
  };
}

export function removeToDo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
