import React, {PureComponent} from 'react';

export default class Input extends PureComponent {
    render(){
        return <input placeholder={this.props.placeholder} value={this.props.value} onChange={this.handleChange}/>;
    }

    handleChange = (event) => {
        const { onChange } = this.props;

        if (onChange) {
            onChange(event.target.value);
        }
    };
};