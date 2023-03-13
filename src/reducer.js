export const initialState ={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //REMOVE after finished developing...
   //token: 'BQCjvWxaPnFrnTsf2gqssV3FZ7A5Wam0ZRIYU-_095SeHxtPLvHfy-sRJWDlGwO7FqWFY7Y8ysXiOo4O8_BKwtFYpDla11-UeF2edYgni5_NW26nf_YcOctEJaOfcixvlV-Dn2mWNnkSMePZ_K7g3WkCTnaAEVuFj8D6ZU1hkjWlSnFUSyXIm8d9BHLn1WJcgLej26zMDAiplknI4tFv5w',
};

const reducer =(state, action) => {
    console.log(action);
    
    switch (action.type) {
    case 'SET_USER':
        return{
            ...state,
            user: action.user,
        }; 
        
    case 'SET_TOKEN':
        return{
            ...state,
            token: action.token,
        };

    case 'SET_PLAYLISTS':
         return{
            ...state,
            playlists: action.playlists,
         };
 
    case 'SET_RAP':
        return{
            ...state,
            rap: action.rap,
        };


    default:
        return state;
}
};

export default reducer;