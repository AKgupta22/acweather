import React from 'react'

export default function Hourly(props) {
    return (
        <>


            <tbody>

                <tr>
                    <th scope="row">{props.date}</th>
                    <td>{props.chance}%</td>
                    <td>{parseInt(props.tmp)}°C </td>
                    <td>{props.hm}%</td>
                </tr>
            </tbody>

        </>
    )
}
