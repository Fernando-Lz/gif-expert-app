import { useState } from 'react';

const AddCategory = () => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // La function recibe un evento de tipo React.ChangeEventHandler<HTMLInputElement>
        // Entonces ese evento se usa para modificar el texto del input usando el value del target
        onChange={(event) => onInputChange(event)}
      />
    </form>
  );
};
export default AddCategory;
