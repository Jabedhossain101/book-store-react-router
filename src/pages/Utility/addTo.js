const getStoreBook = () => {
  const storedBookSTR = localStorage.getItem('readList');
  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStore = id => {
  const storedBookData = getStoreBook();
  if (storedBookData.includes(id)) {
    alert('already exist');
  } else {
    storedBookData.push(id);

    const data = JSON.stringify(storedBookData);
    localStorage.setItem('readList', data);
  }
};
export { addToStore, getStoreBook };
