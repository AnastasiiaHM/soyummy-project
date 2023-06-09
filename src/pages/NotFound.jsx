import { NoContent } from 'components/NoContent/NoContent';
import { Select } from 'components/Select/Select';

const values = ['tbs', 'tsp', 'kg', 'g'];

const NotFound = () => {
  return (
    <>
      <NoContent />
      <Select options={values} />
    </>
  );
};

export default NotFound;
