import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

const BeerCard = (props) => {
    const [description, setDescription] = useState(props.description);
    const [ingredients, setIngredients] = useState("");

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1300) {
                const words = props.description.split(" ");
                setDescription(words.slice(0, 14).join(" ") + "...");
            } else {
                setDescription(props.description);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [props.description]);

    useEffect(() => {
        const keys = Object.keys(props.ingredients);
        let keyingredients = "";
        keys.forEach(key => {
            keyingredients += `${key}, `;
        });
        setIngredients(keyingredients)
    }, [props.ingredients]);

    return (
        <div className="card grid-item">
            <Row>
                <Col md={2} sm={4} className="image_container">
                    <img src={props.imageURL} className="img" alt="Img not found" />
                    {ingredients && (
                        <span className="ingredients">Ingredients: {ingredients}</span>
                    )}
                </Col>
                <Col md={10} sm={8} className="text_container">
                    <label className="text-head">{props.name}</label>
                    <label className="sub-head">{props.genre}</label>
                    <label className="sub-text">{description}</label>
                </Col>
            </Row>
        </div>
    )
}

export default BeerCard;