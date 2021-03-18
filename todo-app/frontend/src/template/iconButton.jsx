import React from 'react'
import If from './if'

export default props => (
    <If test={!props.hide}>
        <button className={'IconButton btn btn-'+ props.style}
            onClick={props.click}>
            <i className={'fa fa-'+ props.icon}></i>    
        </button>
    </If>
)

