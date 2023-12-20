import OnBoardingRoutes from '../../navigations/Boarding/OnBoardingRoutes';
import DashboardStackRoutes from '../../navigations/dashboard/DashboardStackRoutes';
import {useAppSelector} from '../../store/store/hooks/hooks';

const AppProviderLayout = () => {
  const {isOnBoarded} = useAppSelector(state => state.app);
  return <>{!isOnBoarded ? <OnBoardingRoutes /> : <DashboardStackRoutes />}</>;
};

export default AppProviderLayout;
