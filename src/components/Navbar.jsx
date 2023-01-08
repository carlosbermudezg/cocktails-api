import '/src/assets/css/navbar.css'

const Navbar = ({callback,home})=>{
    return(
        <nav className="navbar">
            <div className="logo">
                <a onClick={()=> home() }><h1>Cocktails</h1></a>
            </div>
            <div className="search">
                <form onSubmit={ (e)=> callback(e) }>
                    <input type="text" placeholder="Search drink"/>
                    <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar