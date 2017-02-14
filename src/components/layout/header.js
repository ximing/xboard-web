/**
 * Created by zhangling11 on 17/2/8.
 */
import React, {Component} from "react";


export default class  extends Component {
    static defaultProps = {
        prefixCls: 'nx-layout'
    };
    render () {
        const {prefixCls,children} = this.props;
        let cls = prefixCls + '-header';
        return (
            <div className={cls}>{children}</div>
        );
    }
}