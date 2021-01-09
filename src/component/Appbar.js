import React, { Children, useEffect, useState } from 'react';
import firebase from './config'
import '../App.css';
import { Button } from 'reactstrap'
import { Details } from '@material-ui/icons';

import ModalExample  from "./ModalExample";
export default function Appbar() {

    let count, velo, timeRemain, stt, data = [], stt1 = ['Chảy', 'Không chảy']
    const rootRef = firebase.database().ref();
    const animalRef = rootRef.child("HUST");

    const [time, setTime] = useState(new Date().toLocaleString());
    animalRef.once("value", (snap) => {
        count = (snap.numChildren())
    })
    animalRef.on('value', (childSnapshot) => {
        let dataTemp;
        for (let i = data.length; i > 0; i--) {
            data.pop();
        }
        for (let i = 1; i <= count; i++) {
            velo = childSnapshot.child(`${i}`).toJSON().velo;
            timeRemain = childSnapshot.child(`${i}`).toJSON().time;
            stt = childSnapshot.child(`${i}`).toJSON().stt;
            console.log(stt)
            dataTemp = { velo: velo, timeRemain: timeRemain, stt: stt }
            data.push(dataTemp)
        }
    })
    useEffect(() => {
        const interval = setTimeout(() => {
            setTime(new Date().toLocaleString());
            return () => {
                clearInterval(this.interval)
            }
        }, 1000);
    });
    let i = 0;
    const renderTable = (data, index) => {
        return (
            <tr key={index}>
                <td><ModalExample buttonLabel = {++i} content= {"sản phẩm của tôi ok    "} name={`Bệnh nhân: Nguyễn Văn Hà`} ></ModalExample></td>
                <td>{data.velo}</td>
                <td>{data.timeRemain}</td>
                <td>{data.stt ? stt1[0] : stt1[1]}</td>
            </tr>
        )
    }
    return (
        <table className='students'>
            <thead>
                <th>STT</th>
                <th>Vận tốc</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
            </thead>
            <tbody>
                {data.map(renderTable)}
            </tbody>
        </table>
    )
}
