import { libraryContent } from '../content/library';

function Library() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{libraryContent.title}</h1>
      <p className="text-gray-700 mb-6">{libraryContent.description}</p>
      
      <div className="space-y-6">
        {libraryContent.procedures.map((procedure, index) => (
          <div key={index} className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">{procedure.title}</h2>
            <div className="space-y-2">
              {procedure.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="text-gray-700">
                  {stepIndex + 1}. {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
