 
import React from 'react';
import './App.css';
import Clock from './componenets/Clock';
import Gallery from './componenets/gallery';
import MyInfo from './componenets/MyInfo';
 
 
class App extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      photos: [
        'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg',
        'https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg'
      ]
    }

  }

   


  render(){
    return (
      <div className="App"> 
        <Gallery photos = {this.state.photos} />
  
      </div>
    );
  }
}

export default App;
