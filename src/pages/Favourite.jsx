import FavoriteList from 'components/Favorite/FavoriteList';

const Favourite = () => {
  const list = [
    {
      id: 1,
      img: 'https://assets.bonappetit.com/photos/61154fec53498539aff61243/1:1/w_320,c_limit/0821-Peach-Pie-final.jpg',
      title: 'Salmon Eggs Benedict',
      desc: 'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
      time: '20 min',
    },
    {
      id: 2,
      img: 'https://assets.bonappetit.com/photos/61154fec53498539aff61243/1:1/w_320,c_limit/0821-Peach-Pie-final.jpg',
      title: 'Salmon Eggs Benedict',
      desc: 'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
      time: '20 min',
    },
    {
      id: 3,
      img: 'https://assets.bonappetit.com/photos/61154fec53498539aff61243/1:1/w_320,c_limit/0821-Peach-Pie-final.jpg',
      title: 'Salmon Eggs Benedict',
      desc: 'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
      time: '20 min',
    },
    {
      id: 4,
      img: 'https://assets.bonappetit.com/photos/61154fec53498539aff61243/1:1/w_320,c_limit/0821-Peach-Pie-final.jpg',
      title: 'Salmon Eggs Benedict',
      desc: 'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
      time: '20 min',
    },
    {
      id: 5,
      img: 'https://assets.bonappetit.com/photos/61154fec53498539aff61243/1:1/w_320,c_limit/0821-Peach-Pie-final.jpg',
      title: 'Salmon Eggs Benedict',
      desc: 'Salmon eggs are rich in essential nutrients, low in calories, and recommended as part of a healthy diet. Including salmon in a balanced diet can help decrease the chances of heart disease, ease inflammation, and more. ',
      time: '20 min',
    },
  ];
  return <FavoriteList list={list} listName={'Favorites'} />;
};

export default Favourite;
