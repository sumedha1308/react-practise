function Item(props) {
    return (
        <div>
            <a href={props.link}>{props.title}</a>
        </div>
    );
}

export default Item;
