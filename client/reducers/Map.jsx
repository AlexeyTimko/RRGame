export default Map = function (state = {}, action) {
    switch (action.type) {
        case 'MOVE_ON_MAP':
            return {
                ...state,
                message: action.value
            };
        default:
            return state;
    }
};