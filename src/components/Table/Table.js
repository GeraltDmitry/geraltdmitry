import React, {PureComponent} from 'react';
import './Table.css';
import Button from '../Button';

export default class Table extends PureComponent {
    render(){
        return <div className="table">
            {this.props.table.map(this.handleRenderString)}
        </div>;
    }

    handleRenderString = (strTable, index, arr) => {
        return (
            <div key={strTable.firstName + strTable.lastName} className="tableString">
                <div className="blockData">{strTable.firstName}</div>
                <div className="blockData">{strTable.lastName}</div>
                <Button label={'Удалить'} onClick={this.props.onDelete(index)} />
            </div>
        );
    };
};