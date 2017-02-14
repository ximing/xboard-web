/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/10/31
 */

'use strict';
import React, {Component, PropTypes} from 'react';

export default class Tip extends Component {
    static defaultProps = {
        value: '默认'
    };
    static propTypes    = {
        value: PropTypes.node
    };

    render(){
        let {value} = this.props;
        return (
            <span className="xm-layout-nav-item-icon-tip">
                {value}
            </span>
        );
    }
}