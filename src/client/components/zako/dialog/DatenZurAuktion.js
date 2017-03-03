import React from 'react';

import DialogArea from './DialogArea';

export default class DatenZurAuktion extends React.Component{

    constructor(props) {
        super(props);

        this.state = {auktionsdaten : this.props.auktionsdaten};
        this.onChangeHandler = this.props.onChangeHandler.bind(this);

        this.datenbereich = this.datenbereich.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({auktionsdaten : nextProps.auktionsdaten});
    }


    render() {
        return (
            <div className="row">
                <DialogArea title="Daten zur Auktion" child={this.datenbereich()}/>
            </div>
        );
    }

    datenbereich() {
        return  (
            <div>
                <div>
                    VSNR: {this.state.auktionsdaten.vsnr}
                </div>
                <div>Test
                </div>
                <div>Test2
                </div>
                <div>
                    LSNR: {this.state.auktionsdaten.lsnr}
                </div>
                <div>
                    Festzuschuss HKP:  <input id="festzuschussHKP" value={this.state.auktionsdaten.festzuschussHKP} onChange={(event) => this.onChangeHandler(event)}/>
                </div>
            </div>
        );
    }
}

DatenZurAuktion.propTypes = {
    auktionsdaten:   React.PropTypes.object.isRequired,
    onChangeHandler: React.PropTypes.func.isRequired
};