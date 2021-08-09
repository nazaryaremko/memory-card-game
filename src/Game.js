import React, {useState, useEffect} from 'react'
import Card from './Card.js'
import Header from './Header.js'
import Footer from './Footer.js'
const cards = [
    require("./characters/Hermione.png").default,
    require("./characters/Harry.png").default,
    require("./characters/Ron.png").default,
    require("./characters/Albus.png").default,
    require("./characters/Draco.png").default,
    require("./characters/Ginny.png").default,
    require("./characters/Minerva.png").default,
    require("./characters/Neville.png").default,
    require("./characters/Petunia.png").default,
    require("./characters/Quirrell.png").default,
    require("./characters/Rubeus.png").default,
    require("./characters/Severus.png").default,
    require("./characters/Vernon.png").default,
    require("./characters/Voldemort.png").default
]

function Game() {
    const [randomImages, refreshCards] = useState('')
    const [initialCards, loadCards] = useState('')
    const [clickedImages, updateClickedImages] = useState([])
    const [score, updateScore] = useState(0)
    const [bestscore, updateBestScore] = useState(0)

    function shuffle(array) {
        var currentIndex = array.length,  randomIndex;
      
        while (0 !== currentIndex) {
      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    function updateScoreOnClick(event) {
        if (clickedImages.includes(event.target.src)){
            updateClickedImages(clickedImages.splice(0,clickedImages.length))
            reshuffleImages()
            updateScore(prevScore => 0)

        }
        else {
            updateClickedImages(clickedImages.push(event.target.src))
            reshuffleImages() 
            updateScore(prevScore => prevScore+1)
        }
    }

    if (score > bestscore) {
        updateBestScore(prevBest => prevBest+1)
    }
    
    
    function reshuffleImages() {
        const shuffledImages = shuffle(cards)
        let newRandomImages = [];
        for (var i = 0; i < shuffledImages.length; i++) {
            newRandomImages.push(<Card key={i} image={shuffledImages[i]} reshuffleImages = {reshuffleImages} updateScore = {updateScoreOnClick}/>);
        }
        refreshCards(prevImages => newRandomImages)
    }

    useEffect(() => {
        loadCards(reshuffleImages())
    }, [])

    return (
        <div>
            <Header currentscore = {score} bestscore={bestscore}/>
            <div class='container'>{randomImages}</div>
            <Footer />
        </div>
    )
}
export default Game