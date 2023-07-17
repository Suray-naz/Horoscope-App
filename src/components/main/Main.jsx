import {data} from "./../../helpers/data";
import Card from "./Card";
import "./Main.scss";



const Main = () => {
  return (
    <div className="card-container">
        {data.map ((card)=>(
            <Card {...card} key={card.id}/>
        ))}
        
    </div>
  )
}

export default Main