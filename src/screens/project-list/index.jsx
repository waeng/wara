import React from 'react';
import { useEffect, useState } from "react"
import { cleanObject } from '../../util';
import { List } from "./list"
import { SearchPannel } from "./search-panel"
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {

    const [param, setParam] = useState({
        name: '',
        personId: 0
    })

    const [users, setUsers] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [])

    return <div>
        <SearchPannel param={param} setParam={setParam} users={users}/>
        <List list={list} users={users}/>
    </div>
}