/**
 * Created by yeanzhi on 17/2/14.
 */
'use strict';
import './index.scss';
import React, {Component} from 'react';
import $ from 'jquery';
import autobind from '../../util/autobind.js'
import XBoard from '../../sdk/index';
import consts from '../../sdk/src/consts';

export default class  extends Component {
    constructor(){
        super();
        this.state = {
            editState: consts.states.NORMAL,
            left: 0,
            top: 0,
            arrow: {
                color: '#FF3440',
                stroke: 6
            },
            freeDraw: {
                color: '#FF3440',
                stroke: 6
            },
            text: {
                color: '#FF3440'
            },
            checkReset:false
        };

    }
    componentDidMount(){
        window.xboard = this.xboard = new XBoard('#canvas-container-inner', {
            cssMaxWidth: $(window).width(),
            cssMaxHeight: $(window).height()
        });
        $(window).on('resize',this.onResize)
    }

    componentWillUnmount(){
        $(window).off('resize',this.onResize)
    }

    @autobind
    onResize(){
        this.xboard.setCssMaxDimension($(window).width(),$(window).height());
    }

    @autobind
    onFreeDrawBtnClick() {
        if (this.xboard.getCurrentState() === consts.states.CROP) return;
        this.xboard.endAll();
        if (this.state.editState === consts.states.FREE_DRAWING) {
            this.resetEditorState();
        } else {
            this.setState({
                editState: consts.states.FREE_DRAWING
            });
            this.xboard.startFreeDrawing({
                width: this.state.freeDraw.stroke,
                color: this.state.freeDraw.color
            });
        }
    }

    @autobind
    onTextBtnClick() {
        if (this.xboard.getCurrentState() === consts.states.CROP) return;
        if (this.xboard.getCurrentState() === consts.states.TEXT) {
            this.xboard.endAll();
            this.resetEditorState();
        } else {
            this.setState({
                editState: consts.states.TEXT
            });
            this.xboard.endAll();
            this.xboard.startTextMode();
        }
    }

    resetEditorState() {
        this.setState({
            editState: consts.states.NORMAL,
            checkReset:false
        });
    }

    render(){
        return(
            <div className="canvas-container">
                <div className="canvas-container-inner"
                     id="canvas-container-inner">
                </div>
                <div className="draw-tool">
                    <div className="tool"
                         onClick={this.onTextBtnClick}>文本</div>
                    <div className="tool">箭头</div>
                    <div className="tool">图形</div>
                    <div className="tool"
                         onClick={this.onFreeDrawBtnClick} >划线</div>
                    <div className="tool">撤销</div>
                </div>
            </div>
        );
    }
}