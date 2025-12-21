import { Feature } from "@/components/ui/feature-with-image-comparison";

function FeatureDemo() {
  return (
    <div className="w-full">
      <Feature
        badge="Platform"
        title="AI-Powered Dashboard Analytics"
        description="Experience the transformation from basic reporting to intelligent, real-time business insights powered by AI."
        beforeImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
        afterImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
      />
    </div>
  );
}

export { FeatureDemo };
