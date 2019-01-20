import React, { lazy, Suspense } from 'react';
import ProgressIndicator from 'components/ProgressIndicator';

const Index = lazy(() => import('./index'));

export default () => (
  <Suspense fallback={<ProgressIndicator />}>
    <Index />
  </Suspense>
);