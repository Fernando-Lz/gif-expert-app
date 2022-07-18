import { useState } from 'react';

const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Minimo dos caracteres de longitud
    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
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
