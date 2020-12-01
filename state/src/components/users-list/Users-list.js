import React, { Component } from 'react'

import UserCard from './User-card'

class UsersList extends Component {

    constructor() {

        super()

        this.state = {
            userA: {
                firstName: "Harper",
                lastName: "Perez",
                avatarUrl:
                    "https://cdn.psychologytoday.com/sites/default/files/styles/image-article_inline_full/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=ji6Xj8tv"
            },
            userB: {
                firstName: "Ana",
                lastName: "Hello",
                avatarUrl:
                    "https://cdn.now.howstuffworks.com/media-content/0b7f4e9b-f59c-4024-9f06-b3dc12850ab7-1920-1080.jpg"
            }
        }
    }


    changeUsersInfo = () => this.setState({
        userA: {
            firstName: "Germán",
            lastName: "Álvarez",
            avatarUrl:
                "https://s.abcnews.com/images/GMA/191211_gma_thunberg1_hpMain_16x9_992.jpg"
        },
        userB: {
            firstName: "Sergio",
            lastName: "Whatever",
            avatarUrl:
                "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2019/12/p-1-greta-thunberg-was-just-named-time-magazines-2019-person-of-the-year.jpg"
        }
    })


    render() {

        return (

            <section>

                <h1>Listado de personas</h1>

                <UserCard
                    firstName={this.state.userA.firstName}
                    lastName={this.state.userA.lastName}
                    avatar={this.state.userA.avatarUrl}
                />

                <UserCard
                    firstName={this.state.userB.firstName}
                    lastName={this.state.userB.lastName}
                    avatar={this.state.userB.avatarUrl}
                />

                <button onClick={this.changeUsersInfo}>Cambiar información de personas</button>

            </section>
        )
    }
}


export default UsersList