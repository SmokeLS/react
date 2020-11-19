function Footer({copyright}) {
    const date = new Date();

    return (
        <>
            <div className="copyright">
                {`${copyright} - (${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()})`}
            </div>
        </>
    )
}

export default Footer;