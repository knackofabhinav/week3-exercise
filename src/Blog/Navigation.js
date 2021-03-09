import "./Navigation.css";

export const Navigation = () => {
    return(
        <nav>
            <div className="routes">
                <ul>
                    <a href="/"><li>HOME</li></a>
                    <a href="/"><li>TAG</li></a>
                    <a href="/"><li>AUTHOR</li></a>
                    <a href="/"><li>HELP</li></a>
                </ul>
            </div>
            <div className="socials">
                <ul>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fas fa-moon"></i></li>
                    <li><button className="btn btn-subscribe">Subscribe</button></li>
                </ul>
            </div>
        </nav>
    )
}