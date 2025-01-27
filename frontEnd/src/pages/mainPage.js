import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavData } from '../store/Reducers/itemSlice';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import CardList from '../components/cardList';

import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});


function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}


const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));


export default function DashboardLayoutBasic(props) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  // Memoize the item list to optimize rendering
  const memoizeditemList = React.useMemo(() => items, [items]);

  React.useEffect(() => {
    // Fetch navigation data when idle
    if (status === 'idle') {
      dispatch(fetchNavData());
    }
  }, [status, dispatch]);

  const { window } = props;
  const router = useDemoRouter('/dashboard');
  const demoWindow = window ? window() : undefined;


  return (
    <AppProvider
      navigation={items}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <nav className="MuiBox-root css-1r8vyhc">
        <div className="menu">
          <Link to="/item-list">
            <SettingsIcon />
          </Link>
        </div>
      </nav>
      <DashboardLayout>


        <PageContainer>
          {status === 'loading' ? (
            <Skeleton height="20px" />
          ) : status === 'failed' ? (
            <div>Error: {error}</div>
          ) : (
            <CardList items={memoizeditemList} />
          )}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
