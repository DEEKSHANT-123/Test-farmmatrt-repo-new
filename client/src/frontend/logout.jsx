import{NavLink} from 'react-router-dom';


function logoutwe({check}){
    return (
        <div><NavLink onClick={check}>Logout</NavLink></div>
    );
}

export default logoutwe;