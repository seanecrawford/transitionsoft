import React, { useState } from 'react';

export default function FlowBuilder() {
  const [steps, setSteps] = useState([{ title: '', description: '', tone: 'Neutral' }]);

  const updateStep = (index: number, field: string, value: string) => {
    const updated = steps.map((step, i) =>
      i === index ? { ...step, [field]: value } : step
    );
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, { title: '', description: '', tone: 'Neutral' }]);
  };

  return (
    <section className="space-y-6">
      <h3 className="text-xl font-semibold">🛠️ Build Your Change Flow</h3>
      {steps.map((step, index) => (
        <div key={index} className="bg-white p-4 border rounded shadow">
          <input
            className="w-full mb-2 border p-2 rounded"
            type="text"
            placeholder="Step Title"
            value={step.title}
            onChange={(e) => updateStep(index, 'title', e.target.value)}
          />
          <textarea
            className="w-full mb-2 border p-2 rounded"
            placeholder="Step Description"
            value={step.description}
            onChange={(e) => updateStep(index, 'description', e.target.value)}
          />
          <select
            className="w-full border p-2 rounded"
            value={step.tone}
            onChange={(e) => updateStep(index, 'tone', e.target.value)}
          >
            <option>Neutral</option>
            <option>Reassuring</option>
            <option>Transparent</option>
            <option>Empathetic</option>
          </select>
        </div>
      ))}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={addStep}
      >
        ➕ Add Step
      </button>
    </section>
  );
}

