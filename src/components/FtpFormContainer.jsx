import React, { Component } from 'react'
import FtpForm from './FtpForm'
import axios from 'axios'

class FtpFormContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            baseUrl: 'http://localhost:3001/api',
            pager: {},
            pageOfItems: [],
            activePage: 1,
            itemsCountPerPage: 5,
            totalItemsCount: 0,
            pageRangeDisplayed: 10,
            itemsPerPageOptions: [
                { value: 5 },
                { value: 10 },
                { value: 15 }
            ]
        }

        this.handlePageChange = this.handlePageChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.handlePageChange()
    }

    async handlePageChange(pageNumber) {
        if (pageNumber === undefined)
            pageNumber = 1

        const url = this.state.baseUrl + `/ftp?page=${pageNumber}&&pageSize=${this.state.itemsCountPerPage}`
        const res = await axios.get(url)

        this.setState({
            pageOfItems: res.data.pageOfItems,
            activePage: pageNumber,
            totalItemsCount: res.data.pager.totalItems,
            itemsCountPerPage: this.state.itemsCountPerPage
        });
    }

    handleChange(e) {
        this.setState({ itemsCountPerPage: e.target.value }, function () {
            this.handlePageChange()
        })
    }

    handleClickField() {
        this.handlePageChange()
    }

    render() {
        const { pageOfItems, activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, itemsPerPageOptions } = this.state
        return (
            <FtpForm
                pageOfItems={pageOfItems}
                onChange={this.handlePageChange}
                onChangeField={this.handleChange}
                activePage={activePage}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={pageRangeDisplayed}
                itemsPerPageOptions={itemsPerPageOptions}
            />
        )
    }
}

export default FtpFormContainer
