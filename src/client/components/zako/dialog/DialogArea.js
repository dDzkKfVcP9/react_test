import React from 'react';

export default class DialogArea extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerlineDiv" >
                <div className="headerline">
                    {this.props.title}
                </div>
                <div className="dialogareachild">
                    {this.props.child}
                </div>
            </div>
        );
    }
}

DialogArea.propTypes = {
    title:   React.PropTypes.string.isRequired,
    child:   React.PropTypes.element.isRequired
};
