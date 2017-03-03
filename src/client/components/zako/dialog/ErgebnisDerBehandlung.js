import React from 'react';

import DialogArea from './DialogArea';

export default class ErgebnisDerBehandlung extends React.Component{

    constructor(props) {
        super(props);

        this.state = {};
        this.datenbereich = this.datenbereich.bind(this);
    }

    componentDidMount() {
            fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({"filme" : responseJson.movies});
                })
                .catch((error) => {
                    console.error(error);
                });
    }

    render() {
        return (
            <div className="row">
                <DialogArea title="Ergebnis der Behandlung" child={this.datenbereich()}/>
            </div>
        );
    }

    datenbereich() {
        var filmeliste = ""
        var filme = "";
        if( this.state.filme != undefined ) {
            this.state.filme.forEach((film) => {
                filme += film.title + " / " ;
            });
        }

        return  (
            <div>
                <div>Geladene Filme von https://facebook.github.io/react-native/movies.json:
                </div>
                <div>{filme}
                </div>
            </div>
        );
    }


}