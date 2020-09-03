import React, { useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('');

    const hanleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    const hanleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 2) {
            setcategories( cats => [inputValue, ...cats]);
            setinputValue('');
            
        }
        
    }

    return (
        <>
        <form onSubmit={ hanleSubmit }>
            <input 
                type = "text"
                value = { inputValue }
                onChange = { hanleInputChange }
            />
        </form>
        </>
    )

}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}