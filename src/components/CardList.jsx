/* eslint-disable react/prop-types */
import Card from '../components/Card.jsx';


function CardList(props) {
  const { updateDatas } = props;
  return (
    <div className='cardlist'>
      {updateDatas.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
}

export default CardList