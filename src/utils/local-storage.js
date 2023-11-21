const itemKey = "_todos";

//Get item from local storage
const getItems = () => {
  let items = localStorage.getItem(itemKey);

  if (!items) {
    return [];
  }

  return JSON.parse(items);
};

const addItem = (item) => {
  let todos = getItems();
  if (!Array.isArray(todos)) {
    todos = [];
  }
  //Add the new todo to the list of todos
  // const id = new Date().getTime();

  // let obj = { ...item, id: new Date().getTime() };
  //using array
  // item.id = id;

  todos.push(item);
  console.log("here");

  //Save it back into localstorage
  localStorage.setItem(itemKey, JSON.stringify(todos));
  // console.log(todos);
};

const removeItem = (item) => {
  let items = getItems();
  let newItems = items.filter((remove) => remove != item);
  localStorage.setItem(itemKey, JSON.stringify(newItems));
};
const updatedItem = (old, newItem) => {
  let items = getItems();

  items[itemIndex] = newItem;

  //localStorage.setItem("_todos", JSON.stringify(items));
  let editItems = newItem.filter((edit) => edit != old);
  // editItems.push(newItem);
  localStorage.setItem(itemKey, JSON.stringify(editItems));
};

export { getItems, addItem, removeItem, updatedItem };
