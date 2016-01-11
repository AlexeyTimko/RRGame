import React from 'react';

export default class Location extends React.Component {
    handleMove(){
        if(this.props.type == 0)
            this.props.move(this.props.position);
    }
    render() {
        let type = 'location ';
        switch (this.props.type){
            case 0:
                type += 'road';
                break;
            case 1:
                type += 'wall';
                break;
            default:
                type += 'wall';
        }
        if(this.props.active){
            type += ' active';
        }
        return (<li className={type} onClick={this.handleMove.bind(this)}></li>);
    };
}