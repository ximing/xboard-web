import './index.scss'
import React, {Component} from 'react';
export default class extends Component {
    render(){
        const {name,thumb} = this.props;
        return(
            <div className="create-tpl-item">
                <img src={thumb}/>
                <p> {name}</p>
            </div>
        );
    }
}