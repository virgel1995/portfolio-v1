import React, { Suspense, lazy } from 'react';



const MainBG = lazy(() => {
	return new Promise(resolve => {
		setTimeout(() => resolve(import("./components/MainBG/MainBG")), 3000);
	});
});
const Loader = lazy(() =>
	import("./components/Loader/Loader"))
/*const Navbar = lazy(() =>
	import("./components/Navbar/Navbar"))*/
// SEO
const Seo = lazy(() => import('./components/Seo/Seo'))

function App() {
	return (
		<div>
			<Seo />

			<Suspense fallback={<Loader />}>
				<MainBG />
			</Suspense>
		</div>
	);
}

export default App;
