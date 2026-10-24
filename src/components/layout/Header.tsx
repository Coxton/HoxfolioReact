

export default function Header() :React.ReactElement{

    return(

        <header className="main-header">

            <div className="nav-bar">
                <div className="logo">
                    <a className="menu-link" href="/home">
                        <img className="logo image-element" srcSet="../../../public/img/Logo_white.png" alt="HoxtonLogo"></img>
                    </a>
                </div>
                <div className="menu">
                    <div className="menu menu-item">
                        <a className="menu-link" href="/about">
                            About
                        </a>
                    </div>

                    <div className="menu menu-item">
                        <a className="menu-link" href="/projects">
                            Projects
                        </a>
                    </div>
                </div>
            </div>


        </header>


    );

}