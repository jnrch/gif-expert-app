import { getGifs } from '../../helpers/getGifs';


describe('Testing getGifs Fetch', () => {

    test('should get 10 elements', async() => {

        const gifs = await getGifs('Madrid');

        expect(gifs.length).toBe(10);
        
    })
    
    test('should get 0 elements', async() => {
        
        const gifs = await getGifs('');
        
        expect(gifs.length).toBe(0);
    })
    
    
    
})
