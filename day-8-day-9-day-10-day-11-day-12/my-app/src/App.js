 
import React from 'react';
import './App.css';
import ArticleBloc from './componenets/Article';
import Clock from './componenets/Clock';
import MyForms from './componenets/Forms';
import Gallery from './componenets/gallery';
import LikeButton from './componenets/LikeButton';
import MyInfo from './componenets/MyInfo';
 
 
class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      //articles : [] // waiting for the server to response !!
      /*articles: [
        { id:1, content:'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', nbrLikes:20 , didLike: false, addDate:new Date() },
        { id:2, content:'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', nbrLikes:16 , didLike: true, addDate:new Date() },
        { id:3, content:'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', nbrLikes:10 , didLike: true, addDate:new Date() },
        { id:4, content:'make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', nbrLikes:3 , didLike: false, addDate:new Date() },
        
      ]*/

    }

  }

   


  render(){
    return (
      <div className="App"> 
       {
         /**
          *  {
          this.state.articles.map((a)=>{
            return <ArticleBloc content= {a.content} date={a.addDate} nbrLikes={a.nbrLikes} didLike={a.didLike} /> ;
          })
        }
          */ 

       }
        

       <MyForms/> 





      </div>
    );
  }
}

export default App;
