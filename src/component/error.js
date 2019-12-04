import React,{Fragment} from 'react';

const Error = ({error,message}) => {

    return (
        <Fragment>
            {error ? <p className="alert alert-danger error">{message}</p> : null}
        </Fragment>
        
    );
};

export default Error;