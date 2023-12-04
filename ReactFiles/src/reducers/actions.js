export const REMOVE_TEXT = 'REMOVE_TEXT';
export const UPDATE_TEXT = 'UPDATE_TEXT';


export const removeText = () => {
  return {
      type: REMOVE_TEXT,
  };
};

export const updateText = (task) => {
  return {
      type: UPDATE_TEXT,
      payload: task,
  };
};