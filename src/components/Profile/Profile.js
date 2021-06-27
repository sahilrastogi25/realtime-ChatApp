import './Profile.scss'
export const Profile = () => {
    return(
        <div className="profile-section">
            <div className="img-container">
                <img src="https://i.pinimg.com/originals/8d/ec/f9/8decf9caed777b8d0d698e01270ce308.png" alt="profile-img" />
            </div>
            <p>Sahil</p>
            <div className="action-items">
                <p>Logout</p>
            </div>
        </div>
    )
}
