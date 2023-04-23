import React from 'react';
import List from './components/List';

const App = () => {
const items = [
{ text: 'Item 1' },
{ text: 'Item 2' },
{ text: 'Item 3' },
];

return (
<div>
<h1>List Component Demo</h1>
<List items={items} />
</div>
);
};

export default App;