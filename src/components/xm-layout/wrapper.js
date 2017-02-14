/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/10/31
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import reactDOM from 'react-dom';

let dom;

export default class extends Component {
    state               = {};
    static defaultProps = {
        onScroll: (dom) => {
            console.log('滚动条距底部的距离', dom.scrollHeight - dom.clientHeight - dom.scrollTop);
        },
        onKey: (e) => {
        }
    };

    static propTypes    = {
        onScroll: PropTypes.func,
        onKey: PropTypes.func
    };

    componentDidMount(){
        dom = reactDOM.findDOMNode(this);
        document.addEventListener('keypress', this._handleKeyPress);
    }
    _handleScroll = () => {
        this.props.onScroll(dom);
    };

    _handleKeyPress = (e) => {
        this.props.onKey(dom, e);
    };
    render(){
        return (
            <div className="xm-layout-wrapper"
                 onScroll={this._handleScroll}
            >
                {this.props.children}
            </div>
        );
    }
}