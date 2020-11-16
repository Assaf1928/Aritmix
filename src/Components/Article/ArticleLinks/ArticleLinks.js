import React from 'react';

const ArticleLinks = (props) => {
    let LinksMap = props.Links.map(elm => {
        return <li Id={`Sl${elm.Id}`} key={elm.Id}>{elm.Content}</li>
    })
    return (
        <div>

    
    <ul>{LinksMap}</ul>
        </div>
    )
}

export default ArticleLinks;