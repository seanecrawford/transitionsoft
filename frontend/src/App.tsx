import React from 'react';
import ChangePlan from './modules/ChangePlan';

function App() {
  return (
    <main className="p-8 font-sans text-gray-800">
      <h1 className="text-3xl font-bold">Welcome to TransitionSoft</h1>
      <p className="mt-4 text-lg">Softening organizational change, one interaction at a time.</p>

      <section className="mt-8">
        <ChangePlan />
      </section>
    </main>
  );
}

export default App;

