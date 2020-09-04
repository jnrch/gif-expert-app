import React from 'react';
import '@testing-library/dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Testing in <GifGrid />', () => {
    
    const category = "goku";
    
    test('should show component correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow( <GifGrid category={category} />)
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should show items when images are load useFetchGifs', () => {
        
        const gifs = [{
                id: 'AKD',
                url: 'https://test.jpge',
                title: 'test'
            },
            {
                id: 'ACB',
                url: 'https://test2.jpge',
                title: 'testing 2'       
            }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    
    
    
})
