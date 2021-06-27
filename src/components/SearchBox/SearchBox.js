import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import './SearchBox.scss';
export const SearchBox = () => {
    return (
        <div className="search">
        <FontAwesomeIcon className="icon" icon={faSearch} />
        <input type="text" placeholder="Search" />
        </div>
    )
}
