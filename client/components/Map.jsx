import React from 'react';
import Location from './Location';

export default class Map extends React.Component {
    constructor(props) {
        super(props);
        let position = '1_0';
        this.state = {position, map: this.getVisibleMap(position)};
    }

    getVisibleMap(position) {
        const radius = 1;

        let [pX, pY] = position.split('_');
        pX = parseInt(pX);
        pY = parseInt(pY);
        let pXStart = pX - radius;
        pXStart = pXStart > 0 ? pXStart : 0;
        let pXStop = pX + radius;
        pXStop = pXStop < this.props.locations[0].length - 1 ? pXStop : this.props.locations[0].length - 1;
        let pYStart = pY - radius;
        pYStart = pYStart > 0 ? pYStart : 0;
        let pYStop = pY + radius;
        pYStop = pYStop < this.props.locations.length - 1 ? pYStop : this.props.locations.length - 1;
        let map = [];
        for (let y = pYStart; y <= pYStop; y++) {
            let row = [];
            for (let x = pXStart; x <= pXStop; x++) {
                row.push({
                    type: this.props.locations[y][x],
                    position: `${x}_${y}`
                });
            }
            map.push(row);
        }

        return map;
    }

    move(position) {
        let [pX, pY] = this.state.position.split('_');
        let [mX, mY] = position.split('_');
        pX = parseInt(pX);
        pY = parseInt(pY);
        mX = parseInt(mX);
        mY = parseInt(mY);
        if (Math.abs(mX - pX) + Math.abs(mY - pY) == 1)
            this.setState({position, map: this.getVisibleMap(position)});
    }

    render() {
        let position = this.state.position;

        return <ul className="map">
            {this.state.map.map(
                (row, y) => {
                    return <li key={"map-row"+y}>
                        <ul className="map-row">
                            {row.map(
                                (location, x) => {
                                    let k = location.position;
                                    return <Location type={location.type} key={k} active={k==position}
                                                     position={k} move={this.move.bind(this)}/>
                                    }
                                )
                                }
                        </ul>
                    </li>
                    }
                )}
        </ul>;
    };
}