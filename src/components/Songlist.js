import React from 'react';

const SongList = (props) => {
  let num = 0

  const items = props.songs.map(song => {


     return(

      <li key={num += 1}>

      <p   > Ranking: {num}
      </p>
      <p>
Artist:   {song["im:artist"].label}
</p>
<p>
Title:   {song["im:name"].label}

        </p>

        <img src={song["im:image"][0].label} height="125px" width="125px" alt="thumbnail"/>

        <p>
        <audio src={song["link"][1].attributes.href} controls>

        </audio>

      </p>



     </li>

   )
  })


  return(

    <ul> {items} </ul>
  )
}

export default SongList;
