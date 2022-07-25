import React, { useState } from 'react'
import './users.css'

import { getAllUsers } from "../../firebase";
import { Table } from 'reactstrap';


function Users() {
    const [arr, setArr] = useState([]);

    (async function() {
        const b = await getAllUsers()
        setArr(b)
        // console.log(b)
    })()
    // console.log("arr length: " + arr.length);

    return (
        <div className="container">
            <div>
                <h2>Nama Para Pemain</h2>
                <Table bordered>
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Nama
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((data, index) => (
                            <tr key={data.id}>
                                <th scope="row">
                                    {index + 1}
                                </th>
                                <td>
                                    {data['name']}
                                </td>
                                <td>
                                    {data['email']}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Users