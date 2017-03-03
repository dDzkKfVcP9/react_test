import React from 'react';

import DialogArea from './DialogArea';

export default class AndereAuktionen extends React.Component{

    constructor(props) {
        super(props);

        this.datenbereich = this.datenbereich.bind(this);
    }

    render() {
        const componente = <div>
            <input type="text" value="Hallo ich bin da"></input>
        </div>;

        const subcomponent = this.datenbereich();
        return (
            <div className="row">
                <DialogArea title="Andere Auktionen" child={subcomponent}/>
            </div>
        );
    }

    datenbereich() {
        return  (
            <div>
                <input type="text"/>
                <div>
                    Hallo Team...
                </div>
            </div>
        );
    }

}