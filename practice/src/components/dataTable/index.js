import './datatable.css'
import React, { useEffect, useState } from 'react'

const DataTable = () => {
    const [data, setData] = useState([])
    const [flag, setFlag] = useState(false)
    const [tempData, setTempData] = useState([])

    const myfun = async () => {
        let data = await fetch('https://jsonplaceholder.typicode.com/users')
        let res = await data.json();
        setData(res)
        setTempData(res)
    }

    useEffect(() => {
        myfun()
    }, [])

    const handleChange = (e) => {
        let temp_data = data?.filter((item) => item?.name?.toLowerCase().includes(e.target.value.toLowerCase()))
        setTempData(temp_data)
    }
    const handleSelect = (e) => {
        if (e.target.value === "ascending") {
            let temp_data = data.reverse()
            setTempData(temp_data)
        }
        else if (e.target.value === "descending") {
            let temp_data = data?.reverse()
            setTempData(temp_data)
        }
        setFlag(!flag)
    }
    const handleSelectAlpha = (e) => {
        if (e.target.value === "ascending") {
            let temp_data = data?.sort((a, b) => a?.name?.localeCompare(b?.name))
            setTempData(temp_data)
        }
        else if (e.target.value === "descending") {
            let temp_data = data?.sort((a, b) => b?.name?.localeCompare(a?.name))
            setTempData(temp_data)
        }
        setFlag(!flag)
    }

    useEffect(() => {

    }, [flag])


    return (
        <div className='data-box'>
            <button onClick={myfun}>Refresh</button>
            <br />
            <input type="text" onChange={handleChange} />
            <br />
            <div>
                <label for="cars">Sort By:</label>
                <select onChange={handleSelect} >
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>
            </div>
            <div>
                <label for="cars">Sort By:</label>
                <select onChange={handleSelectAlpha}>
                    <option value="ascending">A-B</option>
                    <option value="descending">B-A</option>
                </select>
            </div>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                    </tr>
                </thead>
                <tbody>
                    {tempData.map((item) => (
                        <tr key={item?.id}>
                            <td>{item.name}</td>
                            <td>{item.address.city}</td>
                            <td>{item.address.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default DataTable