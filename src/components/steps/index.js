
/**
 * Created by zhangling11 on 17/2/6.
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

function isString(str) {
    return typeof str === 'string';
}

export default class Step extends React.Component {
    render() {
        const {
            className, prefixCls, style, tailWidth, itemWidth,
            status = 'wait', iconPrefix, icon, wrapperStyle,
            adjustMarginRight, stepLast, stepNumber,
            description, title, progressDot, ...restProps } = this.props;
        const iconClassName = classNames({
            [`${prefixCls}-icon`]: true,
            [`${iconPrefix}icon`]: true,
            [`${iconPrefix}icon-${icon}`]: icon && isString(icon),
            [`${iconPrefix}icon-check`]: !icon && status === 'finish',
            [`${iconPrefix}icon-cross`]: !icon && status === 'error',
        });

        let iconNode;
        const iconDot = <span className={`${prefixCls}-icon-dot`}></span>;
        // `progressDot` enjoy the highest priority
        if (!!progressDot) {
            if (typeof progressDot === 'function') {
                iconNode = (
                    <span className={`${prefixCls}-icon`}>
            {progressDot(iconDot, { index: stepNumber - 1, status, title, description })}
          </span>
                );
            } else {
                iconNode = <span className={`${prefixCls}-icon`}>{iconDot}</span>;
            }
        } else if (icon && !isString(icon)) {
            iconNode = <span className={`${prefixCls}-icon`}>{icon}</span>;
        } else if (icon || status === 'finish' || status === 'error') {
            iconNode = <span className={iconClassName} />;
        } else {
            iconNode = <span className={`${prefixCls}-icon`}>{stepNumber}</span>;
        }
        const classString = classNames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-last`]: stepLast,
            [`${prefixCls}-status-${status}`]: true,
            [`${prefixCls}-custom`]: icon,
            [className]: !!className,
        });
        return (
            <div {...restProps}
                className={classString}
                style={{ width: itemWidth, marginRight: adjustMarginRight, ...style }}
            >
                {
                    stepLast ? ''
                        : <div
                        ref="tail"
                        style={ tailWidth ? { width: tailWidth } : {}}
                        className={`${prefixCls}-tail`}
                    >
                        <i />
                    </div>
                }
                <div className={`${prefixCls}-step`}>
                    <div
                        className={`${prefixCls}-head`}
                        style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
                    >
                        <div className={`${prefixCls}-head-inner`}>{iconNode}</div>
                    </div>
                    <div ref="main" className={`${prefixCls}-main`}>
                        <div
                            className={`${prefixCls}-title`}
                            style={{ background: wrapperStyle.background || wrapperStyle.backgroundColor }}
                        >{title}</div>
                        {description ? <div className={`${prefixCls}-description`}>{description}</div> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

Step.propTypes = {
    className: PropTypes.string,
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    wrapperStyle: PropTypes.object,
    tailWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    itemWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    status: PropTypes.string,
    iconPrefix: PropTypes.string,
    icon: PropTypes.node,
    adjustMarginRight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    stepLast: PropTypes.bool,
    stepNumber: PropTypes.string,
    description: PropTypes.any,
    title: PropTypes.any,
    progressDot: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
};

export default class Steps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastStepOffsetWidth: 0,
            firstStepOffsetWidth: 0,
        };
    }
    componentDidMount() {
        this.calcStepOffsetWidth();
    }
    componentDidUpdate() {
        this.calcStepOffsetWidth();
    }
    componentWillUnmount() {
        if (this.calcTimeout) {
            clearTimeout(this.calcTimeout);
        }
    }
    calcStepOffsetWidth = () => {
        const domNode = ReactDOM.findDOMNode(this);
        if (domNode.children.length > 0) {
            if (this.calcTimeout) {
                clearTimeout(this.calcTimeout);
            }
            this.calcTimeout = setTimeout(() => {
                // +1 for fit edge bug of digit width, like 35.4px
                const lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
                const firstStepOffsetWidth = (domNode.firstChild.offsetWidth || 0) + 1;
                if (this.state.lastStepOffsetWidth === lastStepOffsetWidth &&
                    this.state.firstStepOffsetWidth === firstStepOffsetWidth) {
                    return;
                }
                this.setState({ lastStepOffsetWidth, firstStepOffsetWidth });
            });
        }
    }
    render() {
        const props = this.props;
        const { prefixCls, style = {}, className, children, direction,
            labelPlacement, iconPrefix, status, size, current, progressDot, ...restProps } = props;
        const lastIndex = children.length - 1;
        const reLayouted = this.state.lastStepOffsetWidth > 0;
        const adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
        const classString = classNames({
            [prefixCls]: true,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-${direction}`]: true,
            [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
            [`${prefixCls}-hidden`]: !reLayouted,
            [`${prefixCls}-dot`]: !!progressDot,
            [className]: className,
        });

        return (
            <div className={classString} style={style} {...restProps}>
                {
                    React.Children.map(children, (ele, idx) => {
                        const itemWidth = (direction === 'vertical' || idx === lastIndex || !reLayouted)
                            ? null : `${100 / lastIndex}%`;
                        const adjustMarginRight = (direction === 'vertical' || idx === lastIndex)
                            ? null : -Math.round(this.state.lastStepOffsetWidth / lastIndex + 1);
                        const tailWidth = direction === 'vertical' ? ''
                            : (this.state.firstStepOffsetWidth +
                        Math.round(this.state.lastStepOffsetWidth / 2 + 1) -
                        Math.round(this.state.lastStepOffsetWidth / lastIndex + 1));
                        const np = {
                            stepNumber: (idx + 1).toString(),
                            stepLast: idx === lastIndex,
                            itemWidth,
                            tailWidth,
                            adjustMarginRight,
                            prefixCls,
                            iconPrefix,
                            wrapperStyle: style,
                            progressDot,
                        };

                        // fix tail color
                        if (status === 'error' && idx === current - 1) {
                            np.className = `${props.prefixCls}-next-error`;
                        }

                        if (!ele.props.status) {
                            if (idx === current) {
                                np.status = status;
                            } else if (idx < current) {
                                np.status = 'finish';
                            } else {
                                np.status = 'wait';
                            }
                        }
                        return React.cloneElement(ele, np);
                    }, this)
                }
            </div>
        );
    }
}

Steps.propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    direction: PropTypes.string,
    labelPlacement: PropTypes.string,
    children: PropTypes.any,
    status: PropTypes.string,
    size: PropTypes.string,
    progressDot: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func,
    ]),
};

Steps.defaultProps = {
    prefixCls: 'rc-steps',
    iconPrefix: 'rc',
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    current: 0,
    status: 'process',
    size: '',
    progressDot: false
};

