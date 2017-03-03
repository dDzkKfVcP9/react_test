import React from 'react';

import DialogArea from './DialogArea';

export default function Auktionsergebnis({auktionsergebnis}) {
    var ErgebnisZeile = React.createClass({
        render: function () {
            return (
                <tr>
                    <td>{this.props.zahnarzt}</td>
                    <td>{this.props.telefon}</td>
                </tr>
            );
        }
    });

    // Ohne JSX var ErgebnisZeile = React.createClass({
    //     render: function () {
    //         return (
    //              React.createElement("tr", React.createElement("td", null, "Zahnarztname"))
    //         );
    //     }
    // });

    var rows = [];
    auktionsergebnis.forEach(function (ergebnis) {
        rows.push(<ErgebnisZeile key={ergebnis.id} zahnarzt={ergebnis.zahnarzt} telefon={ergebnis.telefon}/>);
    }.bind(this));

    const childComponent = <div>
        <table>
            <tbody>{rows}</tbody>
        </table>
    </div>;


    return (
        <div className="row">
            <DialogArea title="Auktionsergebnis" child={childComponent}/>
        </div>
    );
}

Auktionsergebnis.propTypes = {
    auktionsergebnis: React.PropTypes.array.isRequired
};
