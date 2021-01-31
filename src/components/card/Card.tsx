import './card.scss';

export default function Card(props: Props) {
  const className = props.className ?? '';
  const onClick = props.onClick ?? (() => {});
  const showExtraClass = !!props.showExtra ? 'card__info--visible' : '';

  return (
    <div className={className}>
      <div className="card" onClick={(onClick)}>
        <div className="card__image" style={{backgroundImage: `url(${props.imageUrl})`}}></div>
        <div className="card__caption">
          <p className="card__title">{props.title}</p>
          <p className={`card__info ${showExtraClass}`.trim()}>{props.info}</p>
        </div>
      </div>
    </div>
  )
}

interface Props { 
  className?: string;
  children?: any;
  onClick?: () => any;
  showExtra?: boolean;
  title: string;
  info: string;
  imageUrl: string;
}