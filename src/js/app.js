var root = document.getElementById('root');

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(FormInput, {}),
    ]);
};
 
ReactDOM.render(React.createElement(App), root);