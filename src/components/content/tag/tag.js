function Tag({tags}) {
    
    const newList = tags.map((item,index) => {
        return (
            <div key={index}>
                <a href={`${item.href}`}> {`${item.title}`}</a>
            </div>
        )
    });

    return (
        <div>
            {newList}
        </div>
    );
}

export default Tag;