import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm form-group row'>
            <Grid cols={'12 12 12 9 9'}>
            <input type='text' id='description' className='form-control mr-2 mb-2'
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.description}></input>
            </Grid>
            <Grid cols={'12 12 12 3 3'}>
            <IconButton style='primary' icon='plus'
                click={props.handleAdd}></IconButton>
            <IconButton style='info' icon='search'
                click={props.handleSearch}></IconButton>
            <IconButton style='default' icon='close'
                click={props.handleClear}></IconButton>
            </Grid>
        </div>
    )
}