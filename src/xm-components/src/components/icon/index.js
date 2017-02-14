/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/12/16
 */

'use strict';
import classNames from 'classnames';
import omit from 'omit.js';
import React, {Component, PropTypes} from 'react';

export default class extends Component {
    static defaultProps = {
        type: 'default',
        className: '',
        onClick: () => {},
        style: {},
        spin: false
    };
    static propTypes    = {
        type: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        style: PropTypes.object,
        spin: PropTypes.bool
    };

    render (){
        let {type, spin, className} = this.props;
        let classString = classNames({
            'anticon': true,
            [`anticon-${type}`]: type,
            'iconfont-spin': !!spin || type === 'loading'
        }, className);
        return (
            <i className={classString} {...omit(this.props, ['type', 'spin', 'className'])}/>
        );
    }
}