
import { Component } from 'react/cjs/react.production.min';
import './charList.scss';
import abyss from '../../resources/img/abyss.jpg';

import MarvelService from '../services/MarvelService';

class CharList extends Component {

    state = {
        charList: [],
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharList();
    }

    onCharListLoaded = (charList) => {
        this.setState({
            charList:charList,
        })
    }

    updateCharList = () => {
        this.marvelService
        .getAllCharacters().then(this.onCharListLoaded);
    }


    charItem (arr) {
        const items = arr.map((item) => {
            return (
                <li
                    className="char__item"
                    key={item.id}>
                    <img src={item.thumbnail} alt={item.name} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return items;
    }

    render() {
        const items = this.charItem(this.state.charList);

        return (
            <div className="char__list">
                <ul className="char__grid">
                    {items}
                </ul>
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default CharList;



