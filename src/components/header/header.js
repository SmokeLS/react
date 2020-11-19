import './header.scss';

function Header({title, Logo}) {
    return (
        <>
            <div className="logo">
                <Logo />
            </div>
            <div className="title">
                {title}
            </div>
        </>
    )
}
export default Header;