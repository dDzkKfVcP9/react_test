import React from 'react';
import fetch from 'isomorphic-fetch';

import Header from './zako/dialog/Header';
import AndereAuktionen from './zako/dialog/AndereAuktionen';
import DatenZurAuktion from './zako/dialog/DatenZurAuktion';
import Auktionsergebnis from './zako/dialog/Auktionsergebnis';
import Nachfass from './zako/dialog/Nachfass';
import ErgebnisDerBehandlung from './zako/dialog/ErgebnisDerBehandlung';
import Fusszeile from './zako/dialog/Fusszeile';

export default class ZakoAuktionController extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSaveHandler = this.onSaveHandler.bind(this);
    }

    componentWillMount() {
        const model = {
            bezeichnungSpeichernButtonCounter : 0,
            title : "Hallo react....",
            auktionsdaten : { vsnr : "23342342",lsnr : 3345345, festzuschussHKP : 22.23},
            auktionsergebnis : [
                { id : 1, zahnarzt : "Dr. med Hummel", telefon : "0815232"},
                { id : 2, zahnarzt : "Dr. med TB", telefon : "0816"},
                { id : 3, zahnarzt : "Dr. med sHF", telefon : "0817"},
                { id : 4, zahnarzt : "Dr. med M V", telefon : "0818"},
                { id : 5, zahnarzt : "Dr. med  SdSv", telefon : "0819"},
                { id : 6, zahnarzt : "Dr. haaallo med AB", telefon : "0820"}
            ]
        };
        this.setState(model);
    }

    onSaveHandler() {
        console.log("Speichern");
        console.log(this.state);
        var counter  = this.state.bezeichnungSpeichernButtonCounter;
        counter++;
        this.setState({"bezeichnungSpeichernButtonCounter" : counter});
    }

    onChangeHandler(event) {
        console.log( `${event.target.id} ${event.target.value} hallo ${10+20}`);
        const {id: id, value: value } = event.target;

        const newAuktionsdaten = {...this.state.auktionsdaten, [id] : value};
        this.setState({"auktionsdaten" : newAuktionsdaten});
    }

    render() {
        var counter  = this.state.bezeichnungSpeichernButtonCounter;
        counter++;
        var bezeichnung = "Speichern (" + counter + ")";
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <Header title={this.state.title}/>
                    <AndereAuktionen />
                    <DatenZurAuktion auktionsdaten={this.state.auktionsdaten} onChangeHandler={this.onChangeHandler}/>
                    <Auktionsergebnis auktionsergebnis={this.state.auktionsergebnis}/>
                    <Nachfass/>
                    <ErgebnisDerBehandlung/>
                    <Fusszeile bezeichnungSpeichernButton={bezeichnung} onSaveClick={this.onSaveHandler} onPublishClick={() => console.log("onpublish")} onStornoClick={() => console.log("onstorno")}/>
                </div>
            </div>
        );
    }
}