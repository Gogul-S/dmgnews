import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import NewsListScreen from './src/screens/NewsListScreen';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsListScreen />
    </QueryClientProvider>
  );
};

export default App;
