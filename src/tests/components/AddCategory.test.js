import React from 'react';
import '@testing-library/jest-dom';
const { shallow } = require("enzyme");
const { AddCategory } = require("../../components/AddCategory");


describe('Tests in <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setcategories={ setCategories } />);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setcategories={ setCategories } />);    
    })

    test('should show correctly', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should change textbox', () => {

        const input = wrapper.find('input');
        const value = 'Hello word';

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe(value);
        
    })

    test('should not post the information with submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect( setCategories ).not.toHaveBeenCalled();
        
    })

    test('should call setCategories and clear textbox', () => {

        const value = 'hello world';
        //1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });
        //2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        //3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

        //4. el valor del input de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');        
    })
})
