import React, {Component} from 'react';
import {Wrapper, Nav, Center} from '../../xm-components/src/pc.js';
let example = [{
    /* icon title count均可传入元素,通过行内或class携带样式 */
    icon: '对对',
    title: '新建笔记', /* 不传入,默认为title */
    tip: '新建笔记',
    /* Link 中 to 属性值,配合路由使用 */
    pathName: '/note/create'
},{
    pathName: '/note/recently',
    title: '最近编辑',
    tip: '最近编辑'
}, {
    pathName: '/note/open',
    title: '我的文件',
    tip: '我的文件'
}];
export default class WrapContainer extends Component {
    render(){
        let list = example.map((item) => {
            item.selected = (item.pathName === this.props.location.pathname);
            return item;
        });
        return(
        <Wrapper>
            <Nav
                list={list}
                onClick={this._handleClick}
            />
            <Center>
                {this.props.children}
            </Center>
        </Wrapper>
        );
    }
}