import React from 'react'
import Pagination from "react-js-pagination"
import './FtpForm.css'

function App({ pageOfItems, onChange, onChangeField, activePage, itemsCountPerPage, totalItemsCount, pageRangeDisplayed, itemsPerPageOptions }) {
    return (
        <div>
            <h2><span className="badge badge-secondary">FTP Files</span>
            </h2>
            <div className='tb'>
                <table className='table'>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Type</th>
                            <th scope="col">Size</th>
                        </tr>
                    </thead>
                    {
                        pageOfItems.map(
                            s => (
                                <tbody>
                                    <tr>
                                        <td>{s.name}</td>
                                        <td>{s.type}</td>
                                        <td>{s.size}</td>
                                    </tr>
                                </tbody>
                            )
                        )
                    }
                </table>
            </div>
            <div className='page-main'>
                <div className='page-size'>
                    <label >Items Per Page</label>
                    <select name="itemsCountPerPage" onChange={onChangeField} value={itemsCountPerPage}>
                        {itemsPerPageOptions.map((item, index) => {
                            return <option key={index} value={item.value}>{item.value}</option>
                        })}
                    </select>
                </div>
                <div className='pagination'>
                    <Pagination
                        activePage={activePage}
                        itemsCountPerPage={itemsCountPerPage}
                        totalItemsCount={totalItemsCount}
                        pageRangeDisplayed={pageRangeDisplayed}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
