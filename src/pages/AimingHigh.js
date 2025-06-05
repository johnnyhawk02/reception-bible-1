import { aimingHighContent } from '../content/aimingHigh';

function AimingHigh() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{aimingHighContent.title}</h1>
      <p className="text-gray-700 mb-4">{aimingHighContent.description}</p>
      
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Overview</h2>
        <div className="space-y-2">
          {aimingHighContent.overview.map((item, index) => (
            <p key={index} className="text-gray-700">{item}</p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Pricing</h2>
        <div className="space-y-1">
          {aimingHighContent.pricing.map((item, index) => (
            <div key={index} className="text-gray-700">
              <span className="font-medium">{item.type}:</span> {item.price}
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        {aimingHighContent.procedures.map((procedure, index) => (
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

export default AimingHigh;
