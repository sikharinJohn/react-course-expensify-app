export default ( state ={}, action) =>{
    switch(action.type){
        case 'OPEN_MODAL':
            return {
                opened: true
            }
        case 'CLOSE_MODAL':
            return {
                opened: false
            }
        default:
            return state;
    }
};