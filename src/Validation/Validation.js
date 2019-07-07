import React from 'react';

const validation = (props) => {
    let validMessage = 'Text is long enough!'

    if (props.textLength < 5) {
        validMessage = 'Text too short!'
    }
    return (
        <div>
            <p>{validMessage}</p>
        </div>
    )
};

export default validation;