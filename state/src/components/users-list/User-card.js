import './User-card.css'

const UserCard = ({ firstName, lastName, avatar }) => {

    return (
        <article className="user-card">
            <img src={avatar} alt="Forografía de usuario" />
            <h3>{firstName} {lastName}</h3>
        </article>
    )
}

export default UserCard