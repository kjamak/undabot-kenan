export const findAndReplace = (data, newItem) => {
  const newData = data.filter((item) => item.questionId !== newItem.questionId);

  return [...newData, newItem];
};
