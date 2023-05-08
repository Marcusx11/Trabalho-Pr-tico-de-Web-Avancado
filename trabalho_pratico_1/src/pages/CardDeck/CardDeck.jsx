import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./CardHandler.css";

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";

export default class CardHandler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      drawnCards: [],
      drawnCardsNames: [],
    };
    this.drawNewCard = this.drawNewCard.bind(this);

    const drawnCard = this.state.cards[this.state.cards.length - 1];
    this.setState((prevState) => ({
      drawnCards: [...prevState.drawnCards, drawnCard],
      drawnCardsNames: [...prevState.drawnCardsNames, drawnCard.name],
      cards: [...prevState.cards.slice(0, -1)],
    }));
  }

  async componentDidMount() {
    const data = await axios.get(API_URL).then(({ data }) => data);

    const cards = await axios
      .get(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=6`)
      .then((e) => e.data.cards);

    this.setState({ cards });
  }

  drawNewCard() {
    return this.setState((prevState) => ({
      drawnCards: [
        ...prevState.drawnCards,
        prevState.cards[prevState.cards.length - 1],
      ],
      cards: [...prevState.cards.slice(0, -1)],
    }));
  }

  render() {
    const cards = this.state.drawnCards.map((e, i) => (
      <Card key={i} src={e.image} />
    ));
    const buttonText = () => {
      if (this.state.drawnCards.length > 51) return "Carregado!";
      if (this.state.cards.length <= 0) return "Todas na mesa";
      else if (this.state.cards.length > 0)
        return `${this.state.cards.length} Cartas na mão`;
    };
    return (
      <div className="CardHandler">
        <button
          className="CardHandler-btn"
          onClick={this.drawNewCard}
          disabled={this.state.cards.length <= 0}
        >
          {buttonText()}
        </button>

        <div className="CardHandler-deck">{cards}</div>
        <div>Cartas apresentadas :</div>
        <ul>
          {this.state.drawnCards.map((card, index) => (
            <li key={index}>
              {card.value} of {card.suit}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
