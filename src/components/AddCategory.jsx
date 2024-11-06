import PropTypes from "prop-types";
import { useState } from "react";


export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

  return (
    <>
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar Gif"
            value={ inputValue }
            onChange={ handleChange }
        />
    </form>
    </>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}