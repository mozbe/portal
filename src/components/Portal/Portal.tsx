import { withAuth } from '../../auth';
/* *** */
import UserTable from '../UserTable';

const Portal = () => {
  return (
    <UserTable />
  );
};

export default withAuth(Portal);
