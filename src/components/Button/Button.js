import React, {PureComponent} from 'react';
import './Button.css';

export default class Button extends PureComponent {
    render(){
        return (
            <button className="button" type="button" onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
};