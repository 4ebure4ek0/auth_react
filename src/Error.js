import React from 'react';

function Error(props){
    if (props.error != ''){
        return <span>{props.error}</span>
    }
    return null
}

export default Error;