
export function AppHeader() {

    return (
        <section className="app-header full">
            <div className="main-layout">
                <header>
                    <div className="logo">
                        <img src={require("../assets/img/shani.jpg")} />
                        <span>Shani Anconina</span>
                    </div>
                    <div className="nav">
                        <a href=""><button>Home</button></a>
                        <a href="#about"><button>About</button></a>
                        <a href="#projects"><button>Projects</button></a>
                        <a href="#contact"><button>Contact</button></a>
                    </div>
                </header>
            </div>
        </section>
    )
}
