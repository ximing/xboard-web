/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 17/2/10
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import splitObject from '../_util/split-object';
import ReactDOM from 'react-dom';
import omit from 'omit.js';
import classNames from 'classnames';
import Icon from '../icon';
let noop = () =>{
};
export default class extends Component {
    state = {
        closed: false
    };
    static defaultProps = {
        prefixCls: 'xm-components-tag',
        closable: false,
        onClose: noop,
        afterClose: noop,
    };
    static propTypes = {
        closable: PropTypes.bool,
        onClose: PropTypes.func,
        afterClose: PropTypes.func,
        color: PropTypes.string,
        style: PropTypes.object,
    };
    close = (e) => {
        this.props.onClose(e);
        if (e.defaultPrevented) {
            return;
        }
        const dom = ReactDOM.findDOMNode(this);
        dom.style.width = `${dom.getBoundingClientRect().width}px`;
        // It's Magic Code, don't know why
        dom.style.width = `${dom.getBoundingClientRect().width}px`;
        this.setState({
            closed: true,
        });
    };
    render(){
        const [{
            prefixCls, closable, color, className, children,
        }, otherProps] = splitObject(
            this.props,
            ['prefixCls', 'closable', 'color', 'className', 'children']
        );
        const closeIcon = closable ?<Icon type="cross" onClick={this.close}/>: '';
        const classString = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${color}`]: !!color,
            [`${prefixCls}-has-color`]: !!color,
            [`${prefixCls}-close`]: this.state.closing,
            [className]: !!className,
        });
        const divProps = omit(otherProps, [
            'onClose',
            'afterClose',
        ]);
        return (
            !this.state.closed &&
            <div
                data-show={!this.state.closed}
                {...divProps}
                className={classString}
                style={{backgroundColor: /blue|red|green|yellow/.test(color) && color}}
            >
                <span className={`${prefixCls}-text`}>{children}</span>
                {closeIcon}
            </div>
        );
    }
}