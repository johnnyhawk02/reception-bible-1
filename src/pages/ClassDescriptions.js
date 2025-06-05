import { classDescriptions } from '../content/classDescriptions';

function ClassDescriptions() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Class Descriptions</h1>
      
      <div className="space-y-4">
        {classDescriptions.map((classItem, index) => (
          <div key={index} className="space-y-1">
            <h2 className="text-lg font-bold text-gray-900">{classItem.title}</h2>
            <p className="text-gray-700">{classItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassDescriptions;
