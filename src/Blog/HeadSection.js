import "./HeadSection.css";

export const HeadSection = () => {
    return(
        <div className="container">
            <div>
                <img className="img" src="https://images.unsplash.com/photo-1602491453318-dcdf64966d7d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="tiger.jpg"/>
            </div>
            <div className="content">
                <div className="text-content">
                    <small>GETTING STARTED</small>
                    <h2>Welcome to Ghost</h2>
                    <p>Welcome, it's great ot have you here hope you enjoy your stay on this site. We know that first important so we have populated your site with your new sites with some initial content.</p>
                </div>
                <div className="author">
                    <img className="author-img" src="https://via.placeholder.com/150" alt="author"/>
                    <div>
                        <h4 className="author-name">GHOST</h4>
                        <p>25 FEB 2020 - 1 MIN READ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}