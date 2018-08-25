import React, { Component } from 'react'

//../../../../src/assets/images/1.jpg

class AboutMe extends Component {
    render() {
        return (
            <div>
                <section className="AboutMe">
                    <h1>My Stories</h1>
                </section>
                <section className="Blog">
                    <div className="blogPosts">
                        <div className="blogBox">
                            <div className="date">
                                2013
                            </div>
                            <div className="image">
                                <img src="../../../../src/assets/images/1.jpg" />
                            </div>
                            <div className="description">
                                <h2>My first office</h2>
                                <p>Description</p>
                            </div>
                        </div>
                        <div className="blogBox">
                            <div className="date">
                                2013
                            </div>
                            <div className="image">
                                <img src="../../../../src/assets/images/1.jpg" />
                            </div>
                            <div className="description">
                                <h2>My first office</h2>
                                <p>Description</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AboutMe