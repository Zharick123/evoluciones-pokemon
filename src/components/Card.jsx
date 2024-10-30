import '../sass/Card.scss'

const Card = (name, img) => {
  return (
    <div className="card">
        <p className="card__circle"></p>
        <div className="card__name">{name}</div>
        <img className="card__img" src={img} alt="pokemon img" />
    </div>
  )
}

export {Card} 