import React from 'react';
import classes from './Article.module.css'
import ArticleLinks from './ArticleLinks/ArticleLinks';
const Article = (props) => {
    {console.log(props.data.Edit)}

    return ( 
    <div className={classes.container}>
        <div Id={props.data.Id} className={classes.imgContainer} style={{background:  'url("https://www.kdcleaner.com/wp-content/uploads/2017/09/commercial-cleaning-3-1-1024x455.jpg")'}}></div>
        <h1>{props.data.Title}</h1>
        {props.data.Edit ? <textarea onChange={(event) => props.contentChangeHandler(props.data.Id,event)} value={props.data.Content}>
        </textarea> : 
        <div  onClick={() => props.articleEditChange(props.data.Id,true)}>
        {props.data.Content}
        </div>
}
            {props.data.Edit ?<button onClick={() => props.articleEditChange(props.data.Id,false)} type="button">SAVE</button> : ''}
        <ArticleLinks Links={props.data.SpecialLinks}/>
    </div>
    )


}

export default Article;