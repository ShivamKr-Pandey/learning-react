# Eat N Split — Data Flow Diagram

This diagram shows the main component interactions and data flow for the Eat N Split app.

```mermaid
flowchart TD
	%% Nodes (components)
	App([App]):::appStyle
	FriendsList([FriendsList]):::listStyle
	FriendItem([FriendItem]):::itemStyle
	AddFriend([AddFriend Form]):::addStyle
	SplitBill([SplitBill Form]):::splitStyle

	%% Data stores / Actions
	StateStore([App State]):::stateStyle
	UI([User Actions]):::uiStyle

	%% Flows
	UI --> App
	App --> FriendsList
	FriendsList --> FriendItem
	FriendItem --> SplitBill
	FriendItem --> App
	AddFriend --> App
	SplitBill --> App
	App --> StateStore
	StateStore --> FriendsList

	%% Styling: distinct background colors and readable text
	classDef appStyle fill:#0ea5a4,stroke:#044e54,color:#ffffff,stroke-width:1px;
	classDef listStyle fill:#7c3aed,stroke:#4c1d95,color:#ffffff,stroke-width:1px;
	classDef itemStyle fill:#f97316,stroke:#7c2d00,color:#ffffff,stroke-width:1px;
	classDef addStyle fill:#06b6d4,stroke:#064e63,color:#000000,stroke-width:1px;
	classDef splitStyle fill:#ef4444,stroke:#7f1d1d,color:#ffffff,stroke-width:1px;
	classDef stateStyle fill:#111827,stroke:#000000,color:#ffffff,stroke-width:1px;
	classDef uiStyle fill:#10b981,stroke:#064e3b,color:#ffffff,stroke-width:1px;

	%% Make arrows thicker/visible (Mermaid doesn't support arrow styling per-edge reliably in all renderers, but stroke-width on nodes helps)
```

Notes:

- Each node is a component or a conceptual state store.
- Arrows show direction of data or event flow (user actions -> App -> components -> state updates).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
