import React from 'react';
import Answer from './answer';

export default class HolaMundo extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 'Hello'
    };
  }

  tester() {
    console.log('Hello');
    //this.setState({ value: 'Bye' });
  }

  render() {
    return (
      <div>
         <p>Did you guess?</p>
        <h1>Hello World! </h1>
        <Answer tester={() => this.tester()} />
      </div>
    );
  }
}


// const onSubmit = e => e.preventDefault();
{/* <form onSubmit={onSubmit}>
<label htmlFor="search">Search</label>&emsp;
<input
  type="search"
  id="search"
  name="search"
  placeholder="Dale Cooper"
  onChange={props.onChange}
/>
</form> */}



