import React, { Suspense } from 'react';

import Home from './pages/Home';

function App() {
	return (
		<Suspense fallback={<div>Loading</div>}>
			<Home />
		</Suspense>
  );
}

export default App;
