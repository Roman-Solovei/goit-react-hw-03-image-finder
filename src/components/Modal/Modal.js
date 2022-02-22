import React, { Component } from 'react';
import PropType from "prop-types"
import s from "./Modal.module.css"


export default class Modal extends Component { 
    state = {
        visible: false,
        modalImg: ""
    };
    
    toggle = (image) => {
    this.setState(prevState => ({
        visible: !prevState.visible,
        modalImg:image
    }));
    };
    
    componentDidMount(){
    window.addEventListener('keydown', this.onEscPress)
    }

    onEscPress=(event)=>{
        if (event.code === 'Escape') {
            this.toggle()
        }
    }

    componentWillUnmount(){
        window.removeEventListener('keydown', this.onEscPress)
    }

    render() { 
        const { visible } = this.state;
        return (
            
            <div className={s.Overlay} onClick={(event) => {
                if (event.target === event.currentTarget) {
                    this.toggle()
                }
            }}>
                <div className={ s.Modal }>
                <img src="" alt="" />
                </div>
            </div>
        )
    }
};