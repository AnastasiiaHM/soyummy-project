import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRecipesByCategory,
  fetchCategory,
} from 'redux/recipes/operations';
import Skeleton from '../components/RecipesGallery/GallerySkeleton';

const Categories = () => {
  const dispatch = useDispatch();
  const {
    category,
    recipes,
    filter,
    loading,
    totalPages,
    currentPage,
    itemsPerPage,
  } = useSelector(state => state.categories);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchRecipesByCategory(filter));
  }, [dispatch, filter]);

  const onChangeCategory = category => {
    dispatch(fetchRecipesByCategory(filter));
  };
  const handlePageChange = page => {
    dispatch(fetchRecipesByCategory(page));
  };
  return (
    <>
      <h1 className="title">Categories</h1>

      <CategoriesTab
        categoriesList={category}
        onChangeCategory={onChangeCategory}
      />

      {loading ? (
        <Skeleton />
      ) : (
        <RecipesGallery
          totalPages={totalPages}
          page={currentPage}
          itemsPerPage={itemsPerPage}
          recipes={recipes}
          pageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Categories;
