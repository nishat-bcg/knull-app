import React from 'react';

const GreetHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, say hello to TypeScript.</div>
);

export default GreetHello;
