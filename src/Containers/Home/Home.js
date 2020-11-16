import React, { Component, createElement } from "react";
import Article from '../../Components/Article/Article';
import Tip from '../../Components/Tip/Tip';

import classes from './Home.module.css';
class Home extends Component {

    constructor(props){
        super(props);
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    


      }
    state = {

    searchInput: "",
    TextSplit: [],
    Articles: [{
        Id:0, 
        Title:"Title1",
        Content:"Keep Dishes Clean If you’re a person who tends to let dishes pile up in the sink to avoid washing them, try this simple trick to put the effort involved into perspective: For a few days, as you think of it, set a timer before you begin washing the dishes, and make note of how long it took to clean up. If you know the task will take just minutes to complete, it will be less difficult to convince yourself to take care of those dishes now. How to Clean a Burned Pot: To clean a badly scorched pot without scrubbing, cover the burned area with a liberal amount of baking soda and pour in enough boiling water to fill the pot a third to halfway up. When the water is cool enough to touch, head in with your sponge and use the baking soda solution to scrub away the scorch. Dump the solution and wash the pot with hot, soapy water. The Dishwasher Debate: While there isn’t an absolutely correct way to load a dishwasher (and what would couples bicker over if such a directive were carved in stone?), there is one universal rule: It is much easier to load from back to front.",
        ContentToArray:[],
        SpecialLinks: [{Id:1,Content:"Data1", ContentToArray:[]},{Id:2,Content:"Data2",ContentToArray:[]}],
        EditionDate: new Date(),
        Edit:false,
    },{
        Id:1, 
        Title:"Title2",
        Content:"Keep Dishes Clean If you’re a person who tends to let dishes pile up in the sink to avoid washing them, try this simple trick to put the effort involved into perspective: For a few days, as you think of it, set a timer before you begin washing the dishes, and make note of how long it took to clean up. If you know the task will take just minutes to complete, it will be less difficult to convince yourself to take care of those dishes now. How to Clean a Burned Pot: To clean a badly scorched pot without scrubbing, cover the burned area with a liberal amount of baking soda and pour in enough boiling water to fill the pot a third to halfway up. When the water is cool enough to touch, head in with your sponge and use the baking soda solution to scrub away the scorch. Dump the solution and wash the pot with hot, soapy water. The Dishwasher Debate: While there isn’t an absolutely correct way to load a dishwasher (and what would couples bicker over if such a directive were carved in stone?), there is one universal rule: It is much easier to load from back to front.",
        ContentToArray:[],
        SpecialLinks: [{Id:1,Content:"Data1", ContentToArray:[]},{Id:2,Content:"Data2",ContentToArray:[]}],
      EditionDate: new Date(),
        Edit:false,

    },{
        Id:2, 
        Title:"Title3",
        Content:"Keep Dishes Clean If you’re a person who tends to let dishes pile up in the sink to avoid washing them, try this simple trick to put the effort involved into perspective: For a few days, as you think of it, set a timer before you begin washing the dishes, and make note of how long it took to clean up. If you know the task will take just minutes to complete, it will be less difficult to convince yourself to take care of those dishes now. How to Clean a Burned Pot: To clean a badly scorched pot without scrubbing, cover the burned area with a liberal amount of baking soda and pour in enough boiling water to fill the pot a third to halfway up. When the water is cool enough to touch, head in with your sponge and use the baking soda solution to scrub away the scorch. Dump the solution and wash the pot with hot, soapy water. The Dishwasher Debate: While there isn’t an absolutely correct way to load a dishwasher (and what would couples bicker over if such a directive were carved in stone?), there is one universal rule: It is much easier to load from back to front.",
        ContentToArray:[],
        SpecialLinks: [{Id:1,Content:"Data1", ContentToArray:[]},{Id:2,Content:"Data2",ContentToArray:[]}],
      EditionDate: new Date(),
        Edit:false,

    },
    {
        Id:3, 
        Title:"Title4",
        ContentToArray:[],
        Content:"Keep Dishes Clean If you’re a person who tends to let dishes pile up in the sink to avoid washing them, try this simple trick to put the effort involved into perspective: For a few days, as you think of it, set a timer before you begin washing the dishes, and make note of how long it took to clean up. If you know the task will take just minutes to complete, it will be less difficult to convince yourself to take care of those dishes now. How to Clean a Burned Pot: To clean a badly scorched pot without scrubbing, cover the burned area with a liberal amount of baking soda and pour in enough boiling water to fill the pot a third to halfway up. When the water is cool enough to touch, head in with your sponge and use the baking soda solution to scrub away the scorch. Dump the solution and wash the pot with hot, soapy water. The Dishwasher Debate: While there isn’t an absolutely correct way to load a dishwasher (and what would couples bicker over if such a directive were carved in stone?), there is one universal rule: It is much easier to load from back to front.",
        SpecialLinks: [{Id:1,Content:"Data1", ContentToArray:[]},{Id:2,Content:"Data2",ContentToArray:[]}],
        EditionDate: new Date(),
        Edit:false
    }],
    Tips:[{Id:1,Content:"Tip number 1 description", ContentToArray:[]},
     {Id:2, Content:"Tip number 2 description", ContentToArray:[]},
     {Id:3, Content:"Tip number 3 description", ContentToArray:[]},
     {Id:4, Content:"Tip number 4 description", ContentToArray:[]}],
     ResultsList: []


  }

    componentDidMount() {
        let Articles = this.state.Articles;
        let Tips = this.state.Tips;
        Articles.forEach(elm => {
            let articleContent = elm.Content;
            elm.ContentToArray = articleContent.split(" ");
            elm.SpecialLinks.forEach(Sl => {
                let SlContent = Sl.Content;
                Sl.ContentToArray = SlContent.split(" ");
            })
        })
        Tips.forEach(Tip => {
            let tipContent = Tip.Content;
            Tip.ContentToArray = tipContent.split(" ");
        })
            console.log(Articles[0].ContentToArray)
    }

  articleEditChange = (Id,value) => {
    let Articles = this.state.Articles;
     Articles[Id].Edit = value;
     if (!(value))  { Articles[Id].Date = new Date();
    Articles[Id].ContentToArray = Articles[Id].Content.split(" "); 
    }
      this.setState({
          ...this.state,
            Articles: Articles
      })
  }

  contentChangeHandler = (Id,event) => {
    let Articles = this.state.Articles;
    Articles[Id].Content = event.target.value;
    this.setState({
        ...this.state,
        Articles:Articles
    })
  }
  markElement = (type,Id) => {
      console.log('1');
    switch (type) {
    case 'Article': document.getElementById(Id).scrollIntoView(); break;
    case 'Tip': document.getElementById(`Tip${Id}`).scrollIntoView(); break;
    case 'Link': document.getElementById(`Sl${Id}`).scrollIntoView(); break;

    }
  }
 
  onSearchInputChange = (event) => {
    let user_input = event.target.value;
    let articles = this.state.Articles;
    let tips = this.state.Tips;
    let newResults = []
    
    if(user_input.length > 1) {
    articles.forEach(article => {
       
        article.ContentToArray.forEach(ArrayItem=> {
            if(ArrayItem.substr(0,user_input.length).toUpperCase() == user_input.toUpperCase()) {
                newResults.push({type: 'Article',Id:article.Id,Content:`${ArrayItem}  /  ${article.Title}  /  ${article.EditionDate.toDateString()}`});
        }
        })

        article.SpecialLinks.forEach(Sl => {
            Sl.ContentToArray.forEach(ArrayItem=> {
                if(ArrayItem.substr(0,user_input.length).toUpperCase() == user_input.toUpperCase()) {
                    newResults.push({type: 'Link',Id:Sl.Id,Content:`${ArrayItem} /  ${article.Title}`});
                
            }

            })
        })
    });

    tips.forEach(tip => {
        tip.ContentToArray.forEach(ArrayItem=> {
            if(ArrayItem.substr(0,user_input.length).toUpperCase() == user_input.toUpperCase())
            newResults.push({type: 'Tip',Id:tip.Id,Content:`${ArrayItem} / ${tip.Content}`});
        })
    
    })

    }

    this.setState({
        ...this.state,
        ResultsList: newResults
    })

  }

 


  
render() {

    let TipsMap = this.state.Tips.map((elm)=> {
      return  <Tip Id={elm.Id} key={elm.Id}>{elm.Content}</Tip>
    })

    let ArticlesMap = this.state.Articles.map((elm)=> {
        return  <Article contentChangeHandler={this.contentChangeHandler} articleEditChange={this.articleEditChange} key={elm.Id} data={elm}></Article>
      })
      let autoCompleteResults;
      if(this.state.ResultsList.length != 0) {
       autoCompleteResults = this.state.ResultsList.map((elm,index)=> {
          return <li key={index} onClick={() => this.markElement(elm.type,elm.Id)}>{elm.Content}</li>
      });
    }
      else autoCompleteResults = "";
      
    console.log(autoCompleteResults) 

    return (
        <div>
            <div className={classes.searchInput}>
                <input onChange={this.onSearchInputChange} placeholder="search content"/>
                <div>
                  {autoCompleteResults}
                </div>
                </div>
            <div ref={this.tipsContainer} className={classes.topContainer}>
                <div>
        <h1>Tips</h1>
        {TipsMap}
        </div>
<div><h2>Welcome</h2>
<h3>Cleaning Tips & Articles</h3></div>
        </div>

        <h1>Articles</h1>
        <div ref={this.articlesContainer} className={classes.ArticlesContainer}>
        {ArticlesMap}
        </div>
        </div>
    )
}
    
}

export default Home;