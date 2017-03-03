import React from 'react';

import DialogArea from './DialogArea';
import Header from './Header';

export default class Nachfass extends React.Component{

    render() {
        const header = <Header title="test"/>;
        const divStyle = {
            color: 'blue'
        };
        return (
            <div className="row" style={divStyle}>
                <DialogArea title="Nachfass" child={header}/>
            </div>
        );
    }
}