import { CheckCircle, XCircle, Minus } from 'lucide-react';

interface ComparisonFeature {
  feature: string;
  vextria: boolean | string;
  competitor: boolean | string;
  category?: string;
}

interface ComparisonTableProps {
  competitorName: string;
  features: ComparisonFeature[];
}

export function ComparisonTable({ competitorName, features }: ComparisonTableProps) {
  const renderValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <XCircle className="w-5 h-5 text-red-500 mx-auto" />
      );
    }
    if (value === 'Partial') {
      return <Minus className="w-5 h-5 text-yellow-600 mx-auto" />;
    }
    return <span className="text-sm text-center block">{value}</span>;
  };

  // Group features by category
  const categorizedFeatures = features.reduce((acc, feature) => {
    const category = feature.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(feature);
    return acc;
  }, {} as Record<string, ComparisonFeature[]>);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
            <th className="text-left p-4 text-white font-semibold">Feature</th>
            <th className="text-center p-4 text-white font-semibold">Vextria AI</th>
            <th className="text-center p-4 text-white font-semibold">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(categorizedFeatures).map(([category, categoryFeatures], categoryIndex) => (
            <>
              {category !== 'General' && (
                <tr key={`category-${categoryIndex}`} className="bg-gray-50">
                  <td colSpan={3} className="p-3 font-semibold text-sm text-gray-700">
                    {category}
                  </td>
                </tr>
              )}
              {categoryFeatures.map((feature, featureIndex) => (
                <tr
                  key={`feature-${categoryIndex}-${featureIndex}`}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 text-gray-700">{feature.feature}</td>
                  <td className="p-4">{renderValue(feature.vextria)}</td>
                  <td className="p-4">{renderValue(feature.competitor)}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
}