import React from 'react';

export default function Fusszeile ({bezeichnungSpeichernButton, onSaveClick, onPublishClick, onStornoClick}) {

    return (
        <div className="fusszeile_box" id="fusszeile_box">
            <div>
                <div className="fusszeile_innen" >
                    <div>
                        <button id="savebutton" onClick={onSaveClick} className="speichernButton">{bezeichnungSpeichernButton}</button>
                        <button id="auktionveroeffentlichenbutton" onClick={onPublishClick} className="speichernButton">Auktion veröffentlichen</button>
                        <button id="stornobutton" onClick={onStornoClick} className="stornoButton">Stornieren</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Fusszeile.propTypes = {
    bezeichnungSpeichernButton : React.PropTypes.string.isRequired,
    onSaveClick : React.PropTypes.func.isRequired,
    onPublishClick : React.PropTypes.func.isRequired,
    onStornoClick : React.PropTypes.func.isRequired
};

