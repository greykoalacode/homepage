import React from "react";
import Card, {
  CardPrimaryContent,
  CardMedia,
  CardActions,
} from "@material/react-card";
import "@material/react-card/dist/card.css";
import "./testCardS.css";
import ranking from "./ranking";
import TopperList from "../Card/TopperList";
import Fastest from "../Card/fastest";
import image from '../../assets/images/leaderboard.png';

const topFive = ranking.topFive;
const fast = ranking.fastest;
// const displayFn= () =>{
// return <h1>{topFive}</h1>
// }

const testCard = () => {
  // displayDets =() =>{

  // }
  return (
    <Card className="card">
      <CardPrimaryContent className="tc">
        <h1>What's New?</h1>
        <CardMedia
          square
          className="image"
          imageUrl={image}
        />
      </CardPrimaryContent>

      <CardActions>
          
          <div className="topCoders">
            <div>
            <h2>Top Coders</h2>
            <ol className="topperOL">
              <TopperList topFive={topFive}/>
            </ol>
            </div>
            <div>
             <h2>Fastest Hands</h2>
            <ol className="topperOL">
              <Fastest fast={fast}/>
            </ol>
            </div>
          </div>
      </CardActions>
    </Card>
  );
};

export default testCard;
