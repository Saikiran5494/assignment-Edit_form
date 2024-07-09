import { Link } from "react-router-dom"
import "./index.css"

const Home = () => {
    return(
        <div className="home-container">
            <h1 className="track">Track Your Work</h1>
            <div className="cards-container">
                <div className="create-container">
                    <h1 className="create-heading">Create POST</h1>
                    <Link to="/create">
                    <button type="button" className="button">Click Here</button>
                    </Link>
                </div>
                <div className="create-container">
                    <h1 className="create-heading">View POSTS</h1>
                    <Link to="/view">
                    <button type="button" className="button2" >Click Here</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home