import React from 'react';
import JotformEmbed from 'react-jotform-embed';

const ContactMe = () => {
    return (
        <div>
            <h1>This is contact</h1>
            {/* <script type="text/javascript" src="https://form.jotform.com/jsform/221594277623461"></script> */}
            <JotformEmbed src="https://form.jotform.com/jsform/221594277623461" />
        </div>
    );
};

export default ContactMe;