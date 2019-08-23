import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  // shortcut - cdm
  async componentDidMount() {
    const { data: posts } = await http.get(config.apiEndpoint); // endpoint url
    // response object has a data property (& headers, status etc), which can be destructured, and then renamed to posts

    // await...returns promise (ie holds the result of an asynchronous operation)
    // asynchronous operation will complete in the future
    // const promise = await http.get(config.apiEndpoint);  ==> always delay, say 1 second - holds result asynch operation
    // promise resolves to:  pending > resolved (success) OR rejected (failure)

    // whenever using the await keyword, always decorate function with the async keyword

    this.setState({ posts });
  }

  // note that handleAdd ios a property we are setting to a function, so async goes after the = operator
  // http code 201 - object was created (see network tab)
  // noticde headers and respose tabs
  handleAdd = async () => {
    const obj = { title: "hard coded data", body: "blar blar barl" };
    const { data: post } = await http.post(config.apiEndpoint, obj);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "UPDATED";
    await http.put(config.apiEndpoint + "/" + post.id, post);
    // note .patch instead of .put will update only specific properties

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    // update optimistically (assuming the databasd action will be successful)
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    // now update the database
    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
    } catch (ex) {
      // database update has failed, so reset the state to the original content
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
