/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/10/31
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
import Tip from './tip';
import {browserHistory} from 'react-router';

let getCurrentType = (str) => {
    str = str || location.href;
    return  str.slice(str.indexOf('daily/') + 5 + 1, str.lastIndexOf('/')) ||
            str.slice(str.indexOf('daily/') + 5 + 1);
};

export default class NavItem extends Component {
    state               = {};
    static defaultProps = {
        icon: <span>icon</span>,
        title: <span>what can i</span>,
        count: 0,
        onClick: () => {
            console.log('click');
        },
        selected: false,
        pathName: '/demo/index'
    };
    static propTypes    = {
        icon: PropTypes.node,
        title: PropTypes.node,
        count: PropTypes.node,
        onClick: PropTypes.func,
        selected: PropTypes.bool,
        pathName: PropTypes.string
    };

    _handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        let {pathName, onControler} = this.props;
        if(typeof onControler !== 'undefined'){
            onControler(pathName);
        }else{
            browserHistory.push(pathName);
        }
        this.props.onClick();
    };
    render(){
        let {icon, title, count, selected, pathName, tip} = this.props;
        let tips = tip || title;
        let selectedClass = classnames({
            'xm-layout-nav-item': true,
            'selected': selected
        });
        return (
            <div className={selectedClass} onClick={this._handleClick}>
                <div className="nav-item-icon">
                    {icon}
                    <Tip
                        value={tips}
                    />
                </div>
                <div className="nav-item-title">
                    {title}
                </div>
                <div className="nav-item-count"
                     style={{display: count == 0? 'none': 'inline-block'}}
                >
                    {count}
                </div>
            </div>
        );
    }
}