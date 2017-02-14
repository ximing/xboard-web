import React, {Component} from 'react';
import CraeteTpl from '../../components/create-tpl/index.js';

let tpl = [
    {
        name:'空白文档',
        thumb:require("../../assert/imgs/empty.png")
    },
    {
        name:'做笔记',
        thumb:require("../../assert/imgs/note.png")
    },
    {
        name:'制作清单',
        thumb:require("../../assert/imgs/list2.png")
    },
    {
        name:'记日记',
        thumb:require("../../assert/imgs/daily.png")
    },
    {
        name:'创建大纲',
        thumb:require("../../assert/imgs/list.png")
    }
]
export default class WrapContainer extends Component {
    render(){
        return(
            <div>
                {tpl.map((_,i)=>{
                    return <CraeteTpl name={_.name} key={i} thumb={_.thumb}/>
                })}
            </div>
        );
    }
}