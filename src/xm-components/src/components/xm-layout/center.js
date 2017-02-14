/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/10/31
 */

'use strict';
import React, {Component, PropTypes} from 'react';

export default class extends Component {
    state               = {};
    static defaultProps = {
        className: ''
    };
    static propTypes    = {
        className: PropTypes.string
    };

    render(){
        let {className} = this.props;
        return (
            <div className={`xm-layout-center ${className}`}>
                {this.props.children}
            </div>
        );
    }
}