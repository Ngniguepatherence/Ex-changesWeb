import React,{Component} from "react";
import Card from "./card";

import img1 from "../../asset/images/conversion.png";
import img2 from "../../asset/images/argent.webp";
import img3 from "../../asset/images/argent10.jpg";

class Cards extends Component{
    render(){
        return(
           <div className="container-fluid d-flex justify-content-center">
           <div className="row">
                <div className="col-md-4">
                    <Card imgsrc={img1} title='conversion'/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img2} title='service de publication'/>
                </div>
                <div className="col-md-4">
                    <Card imgsrc={img3} title='chat' />
                </div>
           </div>
           </div> 
        );
    }
}
export default Cards;