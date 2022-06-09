import React from 'react';
import JotFormReact from 'jotform-react';

const ContactMe = () => {
    return (
        <div>
            <h1>This is contact</h1>
            {/* <script type="text/javascript" src="https://form.jotform.com/jsform/221594277623461"></script> */}
            <JotFormReact
                formURL="https://form.jotform.com/221594277623461"
            />
        </div>
    );
};

export default ContactMe;