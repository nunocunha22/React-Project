export function reducer(state, action){

    
    if ( action.type === 'VISITED_CITIES'){
        return {
            cities: [...action.payload],
        }
    }

    if (action.type === 'DELETE_MESSAGE'){
        return {
            cities: state.cities.filter( c => c.id !== action.id)
        }
    }
     /* if (action.type === 'SHOW_MAP'){
        return {
            
        }
    }*/

    {/*if (action.type === 'SHOW_DETAILS'){
        return {
            
        }
    }*/

    /*if (action.type === 'ADD_CITIES'){
        return{
cities: state.cities.map()
        }
    }*/

  }

    return state;

}  