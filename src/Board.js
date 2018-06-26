import React, { Component } from 'react'
import Post from './Post';
import FaPlus from 'react-icons/lib/fa/plus';
export default class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
            ]
        }
        this.eachPost = this.eachPost.bind(this);
        this.update = this.update.bind(this);
        this.remove = this.remove.bind(this);
        this.add = this.add.bind(this);
        this.nextId = this.nextId.bind(this);
    }
    update(new_text,i){
        console.log('updating item at index', i, new_text)
        this.setState(prevState => ({
            posts: prevState.posts.map(
                post => ( post.id !== i)? post : {...post, post: new_text} 
            )
        }))
    }
    add(text) {
		this.setState(prevState => ({
			posts: [
				...prevState.posts,
				{
					id: this.nextId(),
					post: text
				}
			]
		}))
	}

	nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}

    // removing post
    remove(id){
        this.setState(prevState => ({
			posts: prevState.posts.filter(post => post.id !== id)
		}))
    }


    eachPost(post, i) {
        return(
            <Post key={i} 
                index={i}
                onChange={this.update}
                onRemove={this.remove}>
            {post.post}
        </Post>
        )
        
    }
    render() {
        return (
            <div className="board">
            <h1 className="text-center"> Keep it</h1>
            <button onClick={this.add.bind(null, "New Post")}
						id="add" className="btn-success">
					<FaPlus />
                    </button>
            <div className="card-columns">
                {this.state.posts.map(this.eachPost)}
                </div>

            </div>
        )
    }
}
