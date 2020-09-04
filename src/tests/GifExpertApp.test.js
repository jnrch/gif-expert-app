import React from 'react';
import '@testing-library/jest-dom';

const { shallow } = require("enzyme")
const { GifExpertApp } = require("../GifExpertApp")

describe('Testing <GifExpertApp />', () => {

    test('should show correctly', () => {

        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();        
    })

    test('should show list of categories', () => {

        const categories = ['madrid', 'murcia', 'zaragoza'];
        const wrapper = shallow(<GifExpertApp defaultCategories= { categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe( categories.length );
        
    })
    
})
