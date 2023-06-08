import FavoriteCard from './FavoriteCard';
import { List, ListName } from './FavoriteList.styled';

const FavoriteList = ({ list, listName }) => {
  return (
    <>
      <ListName>{listName}</ListName>
      <List>
        {list.map(card => (
          <FavoriteCard
            key={card.id}
            img={card.img}
            title={card.title}
            desc={card.desc}
            time={card.time}
          />
        ))}
      </List>
    </>
  );
};

export default FavoriteList;
