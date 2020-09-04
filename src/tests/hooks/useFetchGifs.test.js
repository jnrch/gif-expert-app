const { renderHook } = require("@testing-library/react-hooks")
const { useFetchGifs } = require("../../hooks/useFetchGifs")


describe('Testing el hook useFetchGifs', () => {

    test('should return initial state', async() => {
       const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Madrid'));
       const { data, loading } =  result.current;
       
       await waitForNextUpdate();

       expect(data).toEqual([]);
       expect(loading).toBe(true);
    })
    
    test('should return an array of images and loading false', async() => {

       const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Madrid'));
       await waitForNextUpdate();

       const { data, loading } =  result.current;

       expect(data.length).toBe(10);
       expect(loading).toBe(false);

    })
    
    
})
