import './App.css';
import Wrapper from './Wrapper';
import Wrapper2 from './Wrapper2';
import Counter1 from './Counter1';
import Counter2 from './Counter2';

function App() {
  return (
      <div className="App">
        <div className="main">
          <h1>Upvote / Downvote</h1>
          <h4>Simple toggle buttons created using render props in React.js</h4>
          <div className='wrap'>
            <Wrapper 
            render={(IncreaseCount, look) => {
              return <Counter1 IncreaseCount={IncreaseCount} look={look} />
            }}
            />
            <Wrapper2 
            render={(DecreaseCount, look) => {
              return <Counter2 DecreaseCount={DecreaseCount} look={look}/>
            }}
            />
          </div> 
        </div>
      </div>
  );
}

export default App;
