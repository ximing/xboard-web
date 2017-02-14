/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/11/3
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export default class extends Component {
    state               = {
        width: 0
    };
    static defaultProps = {
        position: 'top',
        value: '默认值',
        onClick: () =>{
        },
        className: '',
        isShow: false,
        clearWord: '',
        onClear: () =>{
            console.log('tips clear');
        }
    };
    static propTypes    = {
        position: PropTypes.string,
        value: PropTypes.string,
        onClick: PropTypes.func,
        className: PropTypes.string,
        isShow: PropTypes.bool,
        clearWord: PropTypes.string,
        onClear: PropTypes.func
    };

    _handleClick = (e) =>{
        this._stopDefault(e);
        this.props.onClick(e);
    };

    _handleHoverTip = () =>{
        let dom      = ReactDOM.findDOMNode(this);
        let domWidth = dom.getBoundingClientRect().width;
        this.setState({
            width: domWidth
        });
    };

    _handleClear = (e) =>{
        this.props.onClear(e);
    };

    _stopDefault = (e) => {
        e.stopPropagation();
        e.preventDefault();
    };
    render (){
        let {position, value, className, isShow, clearWord} = this.props;
        let TipsClass                                       = classnames({
            'xm-tips': true,
            'xm-tips-top': position !== 'top' && position !== 'right' && position !== 'bottom' && position !== 'left',
            [`xm-tips-${position}`]: !!position,
            [className]: !!className,
            'show': isShow
        });
        return (
            <span className={TipsClass}
                  onClick={this._handleClick}
                  onMouseEnter={this._handleHoverTip}
            >
                {value}
                {
                    clearWord !== '' &&
                    <span
                        className="xm-tips-clear"
                        onClick={this._handleClear}
                    >
                        {' ' + clearWord}
                    </span>
                }
                <span
                    className="xm-tips-hover-friendly"
                    style={{width: this.state.width}}
                />
            </span>
        );
    }
}