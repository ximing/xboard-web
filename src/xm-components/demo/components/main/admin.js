/**
 * Created by yeanzhi on 17/1/20.
 */
'use strict';
import React, {Component} from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import {Button,Icon} from '../../../src/admin.js';
import {Steps,Step} from '../../../src/admin.js';
import {Layout} from '../../../src/admin.js';
import {Table} from '../../../src/admin.js';
import {Dialog}  from '../../../src/admin.js';
import {Radio,RadioGroup} from '../../../src/admin.js';


export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            comp:'step',
            sider:true
        }
    }
    renderLayout() {
        return(<div>
            <div style={{marginLeft:50,color:'#118bfb',fontSize:20}}>
                <pre>layout提供两种布局方式</pre>
                <pre>第一种方式是上中下</pre>
                <pre>第二种上下(取消sider即可)</pre>
                <pre>如果需要上中下布局,可在上下布局中,下部分进行</pre>
                <pre>可以在layout中给样式传变量的形式,prefixCls,进行整体布局的重构</pre>
            </div>
            <div>button</div>
            <div>table</div>
            <div>step</div>
            <div>layout</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>main content</div>
            <div>1main content</div>
            <div>2main content</div>
            <div>3main content</div>
            <div>4main content</div>
            <div>1main content</div>
            <div>2main content</div>
            <div>3main content</div>
            <div>4main content</div>
            <div>1main content</div>
            <div>2main content</div>
            <div>3main content</div>
            <div>4main content</div>
            <div>1main content</div>
            <div>2main content</div>
            <div>3main content</div>
            <div>4main content</div>
            <div>1main content</div>
            <div>2main content</div>
        </div>)
    }
    renderButton(){
        return(
            <div>
                <div style={{marginLeft:50,color:'#118bfb',fontSize:20}}>
                    <pre>普通安妮</pre>
                    <pre>按钮有5种类型:默认(default)、信息(primary)、成功(success)、警告(warning)、危险(danger)</pre>
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>default</th>
                            <th>primary</th>
                            <th>success</th>
                            <th>warning</th>
                            <th>danger</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            {/*
                             <td>
                             <Button  onClick={()=>{alert("click default button")}}>Button</Button>
                             </td>
                             <td>
                             <Button type="primary" >Button</Button>
                             </td>
                             <td>
                             <Button  type="success" >Button</Button>
                             </td>
                             <td>
                             <Button  type="warning" >Button</Button>
                             </td>
                             <td>
                             <Button  type="danger" >Button</Button>
                             </td>
                            */}
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{marginLeft:50,color:'#118bfb',fontSize:20}}>
                    <pre>大按钮</pre>
                </div>

                <p></p>
                <table>
                    <thead>
                    <tr>
                        <th>no-outline</th>
                        <th>circle</th>
                        <th>circle-outline</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {/*<td>
                            <Button size="large" >BUTTON</Button>
                        </td>
                        <td>
                            <Button type="primary"  size="large">Button</Button>
                        </td>*/}
                    </tr>
                    </tbody>
                </table>

            </div>

        );
    }
    renderTable(){
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '其它',
                children: [
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        key: 'age',
                    },
                    {
                        title: '住址',
                        children: [
                            {
                                title: '街道',
                                dataIndex: 'street',
                                key: 'street',
                            },
                            {
                                title: '小区',
                                children: [
                                    {
                                        title: '单元',
                                        dataIndex: 'building',
                                        key: 'building',
                                    },
                                    {
                                        title: '门牌',
                                        dataIndex: 'number',
                                        key: 'number',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '公司',
                children: [
                    {
                        title: '地址',
                        dataIndex: 'companyAddress',
                        key: 'companyAddress',
                    },
                    {
                        title: '名称',
                        dataIndex: 'companyName',
                        key: 'companyName',
                    },
                ],
            },
            {
                title: '性别',
                dataIndex: 'gender',
                key: 'gender',
            },
        ];


        const data = [{
            key: '1',
            name: '爽妹子',
            age: 32,
            street: '拱墅区和睦街道',
            building: 1,
            number: 2033,
            companyAddress: '西湖区湖底公园',
            companyName: '湖底有限公司',
            gender: 'woman'
        }, {
            key: '2',
            name: '安吉',
            age: 42,
            street: '拱墅区和睦街道',
            building: 3,
            number: 2035,
            companyAddress: '西湖区湖底公园',
            companyName: '湖底有限公司',
            gender: '男'
        }];
        return(<Table columns={columns} data={data} className="bordered" />);
    }
    renderStep(){
        return(<div>
            <Steps>
                <Step title="身份认证" />
                <Step title="获取验证" />
                <Step title="成功fff" />
            </Steps>
            <Steps direction='vertical' current={1}>
                <Step title="身份认证" />
                <Step title="获取验证" />
                <Step title="成功"/>
            </Steps>
            <Icon type="heart-o" spin={true}/>
        </div>);
    }
    changeTab(val) {
        if (this.state.comp != val) {
            this.setState({comp:val});
        }
    }
    changeSider(){
        this.setState({sider:!this.state.sider});
    }

    renderDialog(){
        let content = <div style={{width:400}}>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
            <div>添加内容</div>
        </div>;
        let  title = "基本dialog测试";
        //title  btn
        let buttons = [{
            text:'确定',
            action:this.onClose.bind(this)
        },{
            text:'确定',
            action:this.onClose.bind(this)
        }];
        let value = {
            title : "基本dialog测试",
            content : content,
            buttons : buttons,
            onClose : this.onClose.bind(this)
        };
        return(<Dialog {...value}/>)
    }
    onClose(){
        this.setState({comp:'111'});
    }
    onChange(){

    }
    renderRadio() {
        return(
            <RadioGroup onChange={this.onChange} value={'a'}>
                <Radio value="a">A</Radio>
                <Radio value="b">B</Radio>
                <Radio value="c">C</Radio>
                <Radio value="d">D</Radio>
            </RadioGroup>

         );
    }
    render(){
        return(
            <Layout>
                <Layout.Header>
                    <div onClick={this.changeSider.bind(this)} style={{marginLeft:50,color:'#118bfb',fontSize:20,cursor:'pointer'}}>Component</div>
                </Layout.Header>
                <Layout.Main>
                    {this.state.sider ?
                        <Layout.Sider>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'layout')}>Layout</div>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'button')}>Button</div>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'table')}>Table</div>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'step')}>Step</div>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'dialog')}>Dialog</div>
                        <div className='demo-tab' onClick={this.changeTab.bind(this,'radio')}>Radio</div>
                    </Layout.Sider> : null}
                    <Layout.Content>
                        {this.state.comp === 'layout' ? this.renderLayout() : null}
                        {this.state.comp === 'button' ? this.renderButton() : null}
                        {this.state.comp === 'table' ? this.renderTable() : null}
                        {this.state.comp === 'step' ? this.renderStep() : null}
                        {this.state.comp === 'dialog' ? this.renderDialog() : null}
                        {this.state.comp === 'radio' ? this.renderRadio() : null}
                    </Layout.Content>
                </Layout.Main>
            </Layout>
        );
    }
}