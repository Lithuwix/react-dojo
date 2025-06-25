import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Icon, SvgIcon} from "@mui/material";
const noneIcon = '[--]'

// todo:Импортировать просто картинку иконки в эти переменные ?

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}


export const pureChange = (sort: string, down: string, up: string) => {

    return sort === down ? up : sort === up ? '' : down

    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // console.log('xd')


    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <Icon id={id + '-icon-' + sort}>-</Icon>
        </span>
    )
}

export default SuperSort