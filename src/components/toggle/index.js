/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 17/2/9
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
let noop = () =>{
};
export default class extends Component {
    constructor(props){
        super(props);
        let checked = false;
        if('checked' in props){
            checked = !!props.checked;
        }else{
            checked = !!props.defaultChecked;
        }
        this.state = {
            checked: checked
        };
    }

    static defaultProps = {
        className: '',
        prefixCls: 'xm-components-toggle',
        checkedChildren: null,
        unCheckedChildren: null,
        defaultChecked: false,
        onChange: noop,
        size: 'default'
    };
    static propTypes = {
        className: PropTypes.string,
        prefixCls: PropTypes.string,
        disabled: PropTypes.bool,
        checkedChildren: PropTypes.any,
        unCheckedChildren: PropTypes.any,
        defaultChecked: PropTypes.bool,
        onChange: PropTypes.func,
        onMouseUp: PropTypes.func,
        size: PropTypes.string
    };

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: !!nextProps.checked,
            });
        }
    }
    setChecked = (checked) => {
        if (!('checked' in this.props)) {
            this.setState({
                checked,
            });
        }
        this.props.onChange(checked);
    };
    toggle = () => {
        const checked = !this.state.checked;
        this.setChecked(checked);
    };
    handleKeyDown = (e) => {
        if (e.keyCode === 37) {
            this.setChecked(false);
        }
        if (e.keyCode === 39) {
            this.setChecked(true);
        }
    };
    handleMouseUp = (e) => {
        if (this.refs.node) {
            this.refs.node.blur();
        }
        if (this.props.onMouseUp) {
            this.props.onMouseUp(e);
        }
    };
    render(){
        let {
            className, prefixCls, disabled, size,
            checkedChildren, unCheckedChildren, ...restProps
        } = this.props;
        let checked = this.state.checked;
        let switchClassName = classNames({
            [className]: !!className,
            [prefixCls]: true,
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-small`]: size === 'small'
        });
        return (
            <span {...restProps}
                  className={switchClassName}
                  tabIndex="0"
                  ref="node"
                  onKeyDown={this.handleKeyDown}
                  onClick={disabled ?noop: this.toggle}
                  onMouseUp={this.handleMouseUp}
            >
                <span className={`${prefixCls}-inner`}>
                    {size !== 'small' && (checked ?checkedChildren: unCheckedChildren)}
                </span>
            </span>);
    }
}