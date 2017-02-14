/**
 * Created by liz
 * Email: lizhengnacl@163.com
 * Tel: 18686768624
 * Date: 17/2/10
 */

'use strict';
import React, {Component} from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import { Toggle, Icon, Tips, Tag} from '../../../src/pc.js';
export default class Main extends Component {
    render(){
        return (
            <div>
                <br/>
                Toggle:
                <Toggle size="small" checkedChildren="on" unCheckedChildren="off"/>
                <Toggle checkedChildren="on" unCheckedChildren="off"/>
                <Toggle onChange={(status) =>{
                    console.log(status)
                }}/>
                <br/>
                Icon:
                <Icon type="heart-o" spin={true}/>
                <br/>
                Tips:
                <span className="example-xm-tips">
                    hover
                    <Tips />
                </span>
                <br/>
                Tag: <Tag>Tag</Tag><Tag closable={true} onClose={(e) => {console.log(e)}}>closable</Tag><Tag color="blue">color</Tag>
            </div>
        );
    }
}