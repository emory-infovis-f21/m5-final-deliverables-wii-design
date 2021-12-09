import React from "react";
import './About.css'

function About() {
    return(
        <div className='about'>
            <div className='intro'>
                <h1>Introduction</h1>
                <p>With the growth of the video industry and the wide choice of gaming options, it may be overwhelming for video game novices and even video game enthusiasts to find video games that they like. Utilizing datasets from Metacritic and video game sales, we developed an algorithm that allows users to search the title of their favorite video games and generate recommendations based on their most preferred features, such as genre, critic score, and sales.</p>
            </div>
            <div className='data'>
                <p>Datasets from Kaggle:</p>
                <a href='https://drive.google.com/file/d/1rxdKOFH5RDHmLZjnA4h9yimVebv-nSpt/view?usp=sharing'>video_games.csv</a><br/>
                <a href='https://drive.google.com/file/d/1kRfRqaf8m6OPksgCFHvUftjr_h-WGeHq/view?usp=sharing'>Video_Games_Sales_as_at_22_Dec_2016.csv</a><br/>
                <a href='https://drive.google.com/file/d/10mjBYAN7r04ktLkDDlziiIEvjIOSxvUO/view?usp=sharing'>Metacritic_games_of_all_time.csv</a><br/>
                <p>The dataset that we integrated ourselves:</p>
                <a href='https://drive.google.com/file/d/1xZKWRaKUQ1vyjfv-ljts-G2pWLPfspRu/view?usp=sharing'>clean_data.csv</a>
            </div>
        </div>
    )
}

export default About;