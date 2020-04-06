import React from 'react';
import SongList from '../components/Songlist.js'
import GenreSelector from '../components/GenreSelecter.js'

class MusicContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
    selectedGenre: ""

    };

  this.handleGenreSelected = this.handleGenreSelected.bind(this);

  }


  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url).then(res => res.json()).then(songs  => this.setState({songs: songs.feed.entry})).catch(err => console.error)

  }

  handleGenreSelected(song){
  this.setState({selectedGenre: song})
}

  render(){

    const selectedGenre = this.state.songs.find(song => song === this.state.selectedGenre)


    return(
      <div>
      <h2> Top 20 Songs </h2>
      <GenreSelector songs={this.state.songs}/>
      <SongList  songs={this.state.songs}/>

      <p onGenreSelect = {this.handleGenreSelected}>
      {selectedGenre["im:name"].label} </p>
    </div>
  );
  }
}


export default MusicContainer;
