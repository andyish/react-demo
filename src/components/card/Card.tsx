import './card.scss';

export default function Card(props: {className?: string, children?: any}) {
  const className = props.className ?? '';
  return (
    <div className={className}>
      <div className="card">
        <img className="card__image" src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/one-pot_bacon_spinach_50776_16x9.jpg" />
        <div className="card__caption">
          <p className="card__title">Dish of food</p>
        </div>
      </div>
    </div>
  )
}