import './App.css';
import React, { Suspense } from 'react';

// Update this line to match the new exposed path
const Provider = React.lazy(() => import('provider/ProviderComponent'));
const Button = React.lazy(() => import('provider/Button'));

const App = () => {
  return (
    <div className="content" style={{backgroundColor: '#FF10Ab'}}>
      <Suspense fallback={<div>Loading remote component...</div>}>
        <Provider />
        <Button />
      </Suspense>
      <div>
        Another DIV from Host
      </div>
    </div>
  );
};

export default App;
