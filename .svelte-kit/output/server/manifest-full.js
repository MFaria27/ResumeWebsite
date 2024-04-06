export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitignore",".nojekyll","CNAME","css/bulma.css","css/style.css","favicon/android-chrome-72x72.png","favicon/apple-touch-icon.png","favicon/browserconfig.xml","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon/mstile-150x150.png","favicon/safari-pinned-tab.svg","favicon/site.webmanifest","favicon.png","images/code-icons/angular.png","images/code-icons/aws.png","images/code-icons/css.png","images/code-icons/C_Programming.svg","images/code-icons/d3.png","images/code-icons/gitlab.svg","images/code-icons/HTML5.png","images/code-icons/javascript.png","images/code-icons/office_suite.png","images/code-icons/python.png","images/code-icons/React.svg","images/code-icons/sql.png","images/code-icons/tableau.png","images/code-icons/typescript.png","images/GitHub.png","images/linkedin.png","images/mail.png","images/profile.jpg","images/project-thumbnails/chessThumbnail.png","images/project-thumbnails/DuckHuntScreenshot.png","images/project-thumbnails/indeed-logo.png","images/project-thumbnails/mqpThumbnail.png","images/project-thumbnails/NVidiaThumbnail.png","images/project-thumbnails/parserThumbnail.png","images/project-thumbnails/punchenderThumbnail.png","images/project-thumbnails/PythonWordGamesThumbnail.png","images/project-thumbnails/SpotifyAlgorithm.png","images/project-thumbnails/SpotifyProjectThumbnail.png","images/project-thumbnails/VoiceRecognitionThumbnail.png","MFaria Resume Oct 2023.pdf","particles/particles.js","particles/particles.json","particles/start-particles.js","scss/bulma.scss"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".xml":"text/xml",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg",".pdf":"application/pdf",".js":"text/javascript",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.mGoYKQmO.js","app":"_app/immutable/entry/app._IuBC-z3.js","imports":["_app/immutable/entry/start.mGoYKQmO.js","_app/immutable/chunks/entry.yGa_jaIB.js","_app/immutable/chunks/scheduler.Ndbq6cgY.js","_app/immutable/chunks/paths.7vUsW3VQ.js","_app/immutable/entry/app._IuBC-z3.js","_app/immutable/chunks/scheduler.Ndbq6cgY.js","_app/immutable/chunks/index.4fco6ntR.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
