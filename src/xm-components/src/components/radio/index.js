import React, {Component,PropTypes} from 'react';
import classnames from 'classnames';
import Icon from '../icon';

export  class Radio extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        cls: PropTypes.string,
        onChange: PropTypes.func,
        checked: PropTypes.bool
    }

    onClick(value) {
        let {disabled} = this.props;
        if (disabled) {
            return;
        }
        let {onChange = function() {}} = this.props;
        onChange(value);
    }

    render() {
        let {cls, style, checked, value, disabled} = this.props;
        let classNames = classnames({
            [cls]: cls,
            'comp-radio': true,
            checked: checked,
            disabled: disabled
        });
        return (
            <label onClick={() => {this.onClick(value)}}
                   className={classNames}
                   style={style}>
                <Icon type={checked ? 'radio_box_fill' : 'radio_box'} className="dxicon-radio"></Icon>
                {this.props.children}
            </label>
        )
    }
}


export class RadioGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }
    onRadioChange(value) {
        let {onChange = ()=>{}} = this.props;
        this.setState({
            value: value
        });
        onChange(value);
    }
    render() {
        let children = React.Children.map(this.props.children, (radio) => {
            if (radio.props) {
                return <Radio
                    key={radio.props.value}
                    {...radio.props}
                    onChange={(value) => {this.onRadioChange(value)}}
                    checked={this.state.value === radio.props.value}
                    disabled={radio.props.disabled || this.props.disabled}
                />;
            }
            return radio;
        });

        return (
            <div className='comp-radio-group'>
                {children}
            </div>
        );
    }
}
