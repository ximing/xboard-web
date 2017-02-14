/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 16/10/31
 */

'use strict';
import React, {Component, PropTypes} from 'react';
import NavItem from './nav-item';

export default class extends Component {
    state               = {};
    static defaultProps = {
        list: [{}],
        onClick: () => {},
        className: ''
    };
    static propTypes    = {
        list: PropTypes.array,
        onClick: PropTypes.func,
        className: PropTypes.string
    };

    render(){
        let {list, onClick, className, onControler} = this.props;
        let listBody = list.map((item, i) => {
            return <NavItem {...item}
                            key={i}
                            onControler={onControler}
                            onClick={onClick.bind(null, i)}
            />;
        });
        return (
            <div className={`xm-layout-nav ${className}`}>
                {listBody}
            </div>
        );
    }
}