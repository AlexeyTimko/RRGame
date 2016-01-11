export default moveOnMapActionCreator = function (position) {
    return {
        type: 'MOVE_ON_MAP',
        position
    }
}