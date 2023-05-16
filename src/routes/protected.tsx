import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Spinner, Header } from '@/shared';

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            <Spinner size="xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}

export const protectedRoutes = [
  {
    path: 'app/',
    element: <App />,
    children: [{ path: 'protected/*', element: <div>Protected</div> }],
  },
];
