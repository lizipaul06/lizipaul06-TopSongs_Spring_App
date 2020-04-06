import React from 'react';

const GenreSelector = (props) => {
  const genres = props.songs.map(song =>{
    return <option value={song} key={song.category["im:id"]}>{song.category.attributes.term}</option>
  })

  function handleChange(event){
    props.onGenreSelect(event.target.value)
  }

  return (
    <select id="genre-selector" onChange = {handleChange} defaultValue="default">
      <option disabled value="default" >Choose a genre...</option>
      {genres}
    </select>
  )
}

export default GenreSelector;
