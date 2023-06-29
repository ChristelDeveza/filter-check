/* eslint-disable react/prop-types */

function Card(props) {
  const {
    picture,
    brand,
    model,
    storage,
    name,
    price,
    screen,
    network,
    reconditionned,
    ram,
    newMobile,
    good,
  } = props;
  return (
    <div className='card'>
      <img src={picture} alt='chat' />
      <h4 className='card-header'>{brand}</h4>
      <h5>{name}</h5>
      <div className='card-body'>
        <ul>
          <li>{model}</li>
          <li>RAM {ram} Go</li>
          <li>Stockage {storage} Go</li>
          <li>{screen} pouces</li>
          <li>Réseau {network ? '5G' : '4G'}</li>
          <li>Prix {price}</li>
          <li>
            Téléphone reconditionné:{' '}
            {reconditionned ? <span>&#9989;</span> : <span>&#10060;</span>}
          </li>
          <li>{newMobile ? 'Etat neuf' : 'Occasion'}</li>
          <li>{!newMobile ? (good ? 'Bon état' : 'Mauvais état') : null}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
