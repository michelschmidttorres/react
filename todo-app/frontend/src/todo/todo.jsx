import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

 const URL = 'http://localhost:3003/api/todos/' 

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: false, list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleRemove = this.handleRemove.bind(this)


        this.refresh()
    }
CancelToken = axios.CancelToken
    source = this.CancelToken.source() 

         refresh(description = '') {
            const search = description ? `&description__regex=/${description}/` : ''
            axios
                .get(`${URL}?sort=-createdAt${search}`, { cancelToken: this.source.token })
                .then(resp => this.setState({ ...this.state, description, list: resp.data }))
                .catch((e) => {
                    console.log(e.message)
                })
        } 

     componentWillUnmount() {
        this.source.cancel("Operation canceled by the user.")
    } 

    handleSearch() {
        this.refresh(this.state.description)
    }

     handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    } 

    handleAdd() {
        const description = this.state.description
        axios
            .post(URL, { description }, { cancelToken: this.source.token })
            .then(resp => this.refresh())
            .catch((e) => {
                console.log(e.message)
            })
    }

    handleRemove(todo) {
        axios.delete(`${URL}${todo._id}`, { cancelToken: this.source.token })
            .then(resp => this.refresh(this.state.description) )
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}${todo._id}`, { ...todo, done: true }, { cancelToken: this.source.token })
            .then(resp => this.refresh(this.state.description) )
    }

    handleMarkAsPending(todo) {
        try {
            axios.put(`${URL}${todo._id}`, { ...todo, done: false }, { cancelToken: this.source.token })
                .then(resp => this.refresh(this.state.description))
        } catch (e) {
            console.error(e)
        }
    }

    handleClear() {
        this.refresh()
    }

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <TodoList
                    list={this.state.list}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}