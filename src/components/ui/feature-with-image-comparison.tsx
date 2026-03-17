import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureProps {
  badge?: string;
  title?: string;
  description?: string;
  beforeImage?: string;
  afterImage?: string;
}

function Feature({
  badge = "Platform",
  title = "AI-Powered Dashboard",
  description = "See your business transform with real-time analytics and intelligent automation.",
  beforeImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80",
  afterImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40 bg-gradient-to-b from-[#0a0f0d] to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4">
          <div>
            <Badge
              variant="outline"
              className="border-[#00A892]/20 bg-[#00A892]/5 text-[#00A892] hover:bg-[#00A892]/10"
            >
              {badge}
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tight lg:max-w-xl font-bold text-white">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-400">
              {description}
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none border border-white/[0.08] shadow-lg shadow-[#00A892]/10"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-[#00A892] h-full w-1 absolute z-20 top-0 -ml-1 select-none shadow-lg shadow-[#00A892]/50"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-[#00A892] rounded hover:scale-110 transition-all w-6 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-3 z-30 cursor-ew-resize flex justify-center items-center shadow-xl shadow-[#00A892]/50 border border-white/10"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-5 w-5 select-none text-white" />
                </button>
              </div>
              <img
                src={afterImage}
                alt="After - Enhanced dashboard"
                loading="lazy"
                className="absolute left-0 top-0 z-10 w-full h-full object-cover aspect-video rounded-2xl select-none"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <img
                src={beforeImage}
                alt="Before - Standard dashboard"
                loading="lazy"
                className="absolute left-0 top-0 w-full h-full object-cover aspect-video rounded-2xl select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
