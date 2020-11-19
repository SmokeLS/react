function Navigation({menu}) {
    return (
        <div className="nav-items">
             {
                menu.map(item => {
                    return (
                        <a className="item" href={item.title} key={item.id}>
                            {item.title}
                        </a>
                    )
                })
            }
        </div>
    )
}

export default Navigation;