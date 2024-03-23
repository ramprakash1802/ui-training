import { useState } from 'react';
import './App.css'
import { Header } from './components/Header'
import { Section } from './components/Section';
import { List } from './components/List';

function App() {

  const [count, setCount] = useState<number>(0);
  const items = [1,2,3];

  return (
    <>
      <Header 
        title='React Typescript'
      />
      <Section
        title='This is a sub-title'
      >
        <p>Child 1</p>
        <p>Child 2</p>
      </Section>
      <p>{count}</p>
      <button onClick={() => setCount(prevCount => prevCount+1)}>+</button>
      <List items={items} render={(item: number) => <li>{item}</li>}></List>
    </>
  )
}

export default App
