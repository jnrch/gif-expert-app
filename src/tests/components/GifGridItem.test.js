import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test in <GifGridItem />', () => {

    const title = "this is a gif webpage";
    const url = "https://this.com.ar";
    const wrapper = shallow( <GifGridItem title={title} url={url} />)
    
    test('should show component correctly', () => {

        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should have a paragraph with title', () => {
        
        const p = wrapper.find('p');
        
        expect(p.text().trim()).toBe(title);
    })
    
    test('should have image equals to url and alt of the props', () => {

        const img = wrapper.find('img');

        expect( img.prop('src')).toBe(url)
        
    })

    test('should have animate__bounce class', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');

       expect(className.includes('animate__bounce')).toBe(true);
        
    })
    
    
    
})
