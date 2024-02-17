import communiation from "./images/communication.png";
import "../style/Home.css";
function Home() {
    return (
        <div>
            <div className="container1">
                <div className="content">
                    <h1>Are You Looking for Career Counselling Online?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, natus officia obcaecati recusandae fugiat nam facilis quidem facere iure enim culpa ipsam doloremque mollitia, quod consequuntur. Similique magni quae excepturi!</p>
                </div>
                <div className="content1Image">
                    <img src={communiation} alt="communinatoin" />
                </div>
            </div>
        </div>
    )
}

export default Home
