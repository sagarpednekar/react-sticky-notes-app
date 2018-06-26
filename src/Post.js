import React, { Component } from 'react';
import FaPencil from 'react-icons/lib/fa/pencil';
import FaTrash from 'react-icons/lib/fa/trash';
import FaFlopyO from 'react-icons/lib/fa/floppy-o';



class Post extends Component {
    constructor(){
        super()
        this.state = {
            id: 0,
            editing: false
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.save = this.save.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderShow = this.renderShow.bind(this);
    }
    edit(){
        this.setState({
            editing: true
        });
    }
    remove(){
        this.props.onRemove(this.props.index)
        alert("Document is removed")
    }

    save(e){
        e.preventDefault()
        this.props.onChange(this._new_text.value,this.props.index)
        this.setState({
            editing: false
        })
    }
    renderForm(){
        return(
            <div className="post card bg-dark text-white">
            <form>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Add post</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={input => this._new_text= input }></textarea>
                  <button type="submit" className="btn btn-primary mb-2" onClick={ this.save}><FaFlopyO /></button>
                </div>
              </form>   
            </div>
        )
    }
    renderShow() {
        return (
            <div className="post card bg-dark text-white">
                <div className="card-body">
                    <p className="card-text">{this.props.children} </p>
                    <span>
                        <a  onClick={this.edit} className="btn btn-primary card-link"><FaPencil /> </a>
                        <a  onClick= {  this.remove }  className="btn btn-primary card-link"><FaTrash /> </a>
                    </span>
                </div>
            </div>
        )
    }
    render(){
        return this.state.editing ? this.renderForm():this.renderShow() 
    }

}
export default Post;