/**
 * Created by zhangling11 on 17/2/8.
 */
import React, {Component} from "react";
import classnames from 'classnames';
import Button from '../button';
import Icon from '../icon';


export default class extends Component{
    static defaultProps = {
        prefixCls: 'nx-dialog',
        hasHeader: true,//是否有header
        content:null
    };
    render () {
        const {prefixCls,title,content,buttons,btnCls,onClose,hasHeader} = this.props;
        let cls = prefixCls;//样式待定
        return (
            <div className="nx-modal-mask">
                <div className={`${cls}-wrapper`}>
                    <div className={cls+' '+cls+'-normal'}>
                        {hasHeader ? <div className={`${cls}-title`}>
                            {title}
                            <span className="nx-dialog-icon"><Icon type="close" onClick={onClose}/></span>
                        </div> : null}
                        <div className={`${cls}-content`}>{content}</div>
                        <div className={`${cls}-buttons`}>
                            {buttons.map(({ text, type, action}, i) => (
                                <Button
                                key={i}
                                cls={`nx_button`}
                                onClick={(action || onClose)}
                                >{text}</Button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



