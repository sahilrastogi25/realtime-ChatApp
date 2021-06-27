import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';
import './ChatListing.scss'
export const ChatListing = () => {
    return (
        <div className="chat-cards-listing">
            <div className="card">
                <div className="img-container">
                    <img src="https://lh3.googleusercontent.com/proxy/6CMB26sxVtCz0EepDl8UwzTR3-00nBTtVINr6OsR-pyP-uWEYzPxj94yScPSjIzJ8gP5DfG86Bg0WJuGpY4WZFAYHCXksDAnFQlxT01zf9lCjZzOxnWzDgOEPGNeGQaVRaFf7JI" alt="user-img" />
                </div>
                <div className="card-detail">
                    <h4 className="title">
                        User 1
                    </h4>
                    <p className="desc">
                        Hi,
                        how's it going?
                    </p>
                </div>
                <div className="time">
                    10:20 PM
                </div>
                <div className="action-btn">
                <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    )
}
