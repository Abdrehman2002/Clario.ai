import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Check, PhoneOff, Loader2, Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { RetellWebClient } from "retell-client-js-sdk";

const AGENTS = [
  {
    id: 'agent_7fd7ccb79e102797dc752d1129',
    label: "AutoCare Receptionist",
    description: "Automotive service scheduling",
  },
  {
    id: 'agent_f505f23fdcda8e1ce0c1da509a',
    label: "Real Estate Receptionist",
    description: "Property inquiries & showings",
  },
  {
    id: 'agent_18e1bd3c4522eddbcbd2f534e4',
    label: "Medical Receptionist",
    description: "Healthcare appointments",
  },
  {
    id: 'agent_94e78bae3e80e19ea1de58cfde',
    label: "Law Firm Receptionist",
    description: "Legal consultations",
  },
  {
    id: 'agent_504221fd9984ba67a933edb15a',
    label: "Spa/Salon Receptionist",
    description: "Beauty & wellness booking",
  },
  {
    id: 'agent_de71e1886ab931ecd2641751ba',
    label: "Fitness/Gym Receptionist",
    description: "Membership & classes",
  },
];

export function TryAgentNew() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<typeof AGENTS[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [callStatus, setCallStatus] = useState<"idle" | "calling" | "connected" | "ended">("idle");
  const [retellClient, setRetellClient] = useState<RetellWebClient | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mobileVideoLoaded, setMobileVideoLoaded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (agent: typeof AGENTS[0]) => {
    setSelected(agent);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handle video click to unmute
  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = false;
      setIsMuted(false);
    }
  };

  // Handle video loaded
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  // Handle mobile video loaded
  const handleMobileVideoLoaded = () => {
    setMobileVideoLoaded(true);
  };

  // Play/pause video based on viewport visibility for desktop video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && callStatus === 'idle') {
            video.play().catch((error) => {
              console.log("Autoplay failed:", error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [callStatus]);


  // Pause video when call connects
  useEffect(() => {
    if (callStatus === 'connected' || callStatus === 'calling') {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.pause();
      }
    }
  }, [callStatus]);

  const startCall = async () => {
    if (!selected) return;

    try {
      setIsLoading(true);
      setCallStatus("calling");

      const apiKey = 'key_52cf8f696d64009de42d4196e27c';

      if (!apiKey) {
        throw new Error('Retell API key is not configured');
      }

      // Create web call
      const response = await fetch("https://api.retellai.com/v2/create-web-call", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: selected.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error("Retell API error:", data);
        throw new Error(data.message || "Failed to create web call");
      }

      console.log("Web call created:", data);

      // Initialize Retell Web Client
      const client = new RetellWebClient();

      // Set up event listeners
      client.on("call_started", () => {
        console.log("Call started");
        setCallStatus("connected");
        setIsLoading(false);
      });

      client.on("call_ended", () => {
        console.log("Call ended");
        setCallStatus("ended");
        setTimeout(() => {
          setCallStatus("idle");
          setRetellClient(null);
        }, 2000);
      });

      client.on("error", (error) => {
        console.error("Call error:", error);
        setCallStatus("idle");
        setIsLoading(false);
        alert("Call failed. Please try again.");
      });

      // Start the call with access token
      await client.startCall({
        accessToken: data.access_token,
      });

      setRetellClient(client);

    } catch (err: any) {
      console.error("Error starting call:", err);
      alert("Error starting call: " + (err.message || err));
      setCallStatus("idle");
      setIsLoading(false);
    }
  };

  const endCall = () => {
    if (!retellClient) return;

    try {
      retellClient.stopCall();
      setCallStatus("ended");

      setTimeout(() => {
        setCallStatus("idle");
        setRetellClient(null);
      }, 2000);
    } catch (err: any) {
      console.error("Error ending call:", err);
      setCallStatus("idle");
      setRetellClient(null);
    }
  };

  return (
    <section className="py-16 md:py-20 pb-80 md:pb-96 bg-gradient-to-b from-black via-[#0A0510] to-black relative overflow-visible" style={{ zIndex: 60 }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative overflow-visible" style={{ zIndex: 60 }}>

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 px-4 relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(123,97,255,0.15),transparent_70%)] blur-3xl"></div>

          <div className="relative">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2.5 text-sm font-bold tracking-[0.2em] uppercase px-6 py-3 rounded-full"
                    style={{
                      background: 'rgba(123, 97, 255, 0.15)',
                      border: '1px solid rgba(123, 97, 255, 0.3)',
                      color: '#A78BFA',
                      boxShadow: '0 0 20px rgba(123, 97, 255, 0.2)'
                    }}>
                LIVE DEMO
              </span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                style={{
                  textShadow: '0 0 80px rgba(123, 97, 255, 0.3)'
                }}>
              <div className="text-white mb-2">Talk with your agent.</div>
              <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent"
                   style={{
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     filter: 'drop-shadow(0 0 40px rgba(139, 92, 246, 0.4))'
                   }}>
                Designed to perform.
              </div>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">

            </p>
          </div>
        </div>

        {/* Mobile Version - Video Only (Appears first on mobile) */}
        <div className="md:hidden mb-8 px-4">
          {/* Mobile Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div
              className="relative w-full mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={handleVideoClick}
              style={{
                border: '3px solid #7B61FF',
                boxShadow: '0 0 40px rgba(123, 97, 255, 0.4), 0 0 80px rgba(123, 97, 255, 0.2)'
              }}
            >
              {/* Loading Placeholder */}
              {!mobileVideoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 text-purple-400 animate-spin" />
                    <span className="text-purple-300 text-sm font-medium">Loading video...</span>
                  </div>
                </div>
              )}

              <video
                ref={mobileVideoRef}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                onLoadedMetadata={handleMobileVideoLoaded}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>

              {/* Unmute Prompt Overlay */}
              {isMuted && mobileVideoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 pointer-events-none">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl bg-purple-600 transition-all shadow-2xl pointer-events-auto"
                    style={{ zIndex: 100 }}
                  >
                    <Volume2 className="w-10 h-10 text-white" />
                    <span className="text-white font-semibold text-sm">Tap to enable sound</span>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-8 lg:gap-12">

          {/* Left Side - Vertical Video (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden md:block flex-shrink-0"
          >
            <div
              className="relative w-[280px] lg:w-[340px] h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              onClick={handleVideoClick}
              style={{
                border: '3px solid #7B61FF',
                boxShadow: '0 0 40px rgba(123, 97, 255, 0.4), 0 0 80px rgba(123, 97, 255, 0.2)'
              }}
            >
              {/* Loading Placeholder */}
              {!videoLoaded && (
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-purple-400 animate-spin" />
                    <span className="text-purple-300 text-sm font-medium">Loading video...</span>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoaded}
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              >
                <source src="/demo-video.mp4" type="video/mp4" />
              </video>

              {/* Unmute Prompt Overlay */}
              {isMuted && videoLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 pointer-events-none">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center gap-3 px-6 py-6 rounded-2xl bg-purple-600 transition-all shadow-2xl pointer-events-auto"
                    style={{ zIndex: 100 }}
                  >
                    <Volume2 className="w-12 h-12 text-white" />
                    <span className="text-white font-semibold text-sm">Tap to enable sound</span>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Side - Try Your Agent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[32px] border border-white/10 shadow-2xl p-6 md:p-8 lg:p-12 relative overflow-visible flex flex-col"
            style={{ boxShadow: '0 0 60px rgba(123, 97, 255, 0.15)', zIndex: 60, userSelect: 'none' }}
          >
            {/* Title and Description */}
            <div className="text-center md:text-left mb-6" style={{ userSelect: 'none' }}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Try Your Agent for Free
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                Experience Vextria AI in action — choose an agent and start a live demo call
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-4" style={{ userSelect: 'none' }}>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-gray-300 font-medium">Natural Conversations</p>
                    <p className="text-xs text-gray-500">Human-like voice interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-gray-300 font-medium">Instant Response</p>
                    <p className="text-xs text-gray-500">Answer calls in under 1 second</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm text-gray-300 font-medium">Smart Scheduling</p>
                    <p className="text-xs text-gray-500">Books appointments automatically</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call Interface Container */}
            <div className="space-y-4 md:space-y-6 relative" style={{ zIndex: 70 }}>
              {/* Dropdown */}
              <div className="relative" style={{ zIndex: 70 }} ref={dropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={handleToggle}
                  disabled={callStatus !== "idle"}
                  className={cn(
                    "w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl border-2 transition-all duration-300 text-left flex items-center justify-between",
                    "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 backdrop-blur-sm",
                    callStatus !== "idle" && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <span className="font-medium text-sm md:text-base">
                    {selected ? selected.label : "Select an agent"}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 mt-2 rounded-2xl border-2 border-white/20 overflow-hidden shadow-2xl bg-[#0F0F1E] backdrop-blur-xl z-[9999]"
                      style={{ boxShadow: '0 8px 32px rgba(123, 97, 255, 0.3)' }}
                    >
                      {AGENTS.map((agent, index) => (
                        <motion.button
                          key={agent.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                          onClick={() => handleSelect(agent)}
                          className={cn(
                            "w-full px-4 md:px-6 py-3 md:py-4 text-left transition-all duration-200 flex items-center justify-between group",
                            "border-b border-white/5 last:border-b-0",
                            selected?.id === agent.id
                              ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                              : "text-white hover:bg-white/5"
                          )}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="font-medium text-sm md:text-base">{agent.label}</div>
                            <div className="text-xs md:text-sm text-gray-400 mt-0.5 truncate">
                              {agent.description}
                            </div>
                          </div>
                          {selected?.id === agent.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              className="flex-shrink-0 ml-2"
                            >
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                            </motion.div>
                          )}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Call Buttons */}
              {callStatus === "connected" ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={endCall}
                  className="w-full px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 md:gap-3"
                  style={{
                    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                    boxShadow: '0px 0px 24px rgba(239, 68, 68, 0.5)',
                    color: 'white',
                  }}
                >
                  <PhoneOff className="w-4 h-4 md:w-5 md:h-5" />
                  End Call
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: selected && !isLoading && callStatus === "idle" ? 1.02 : 1 }}
                  whileTap={{ scale: selected && !isLoading && callStatus === "idle" ? 0.98 : 1 }}
                  onClick={startCall}
                  disabled={!selected || isLoading || callStatus !== "idle"}
                  className={cn(
                    "w-full px-6 md:px-8 py-3 md:py-4 rounded-2xl text-base md:text-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 md:gap-3",
                    selected && !isLoading && callStatus === "idle"
                      ? "cursor-pointer"
                      : "opacity-50 cursor-not-allowed"
                  )}
                  style={{
                    background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                    boxShadow: '0px 0px 24px rgba(125, 76, 255, 0.6)',
                    color: 'white',
                  }}
                >
                  {callStatus === "calling" ? (
                    <>
                      <Loader2 className="w-4 h-4 md:w-5 md:h-5 animate-spin" />
                      Connecting...
                    </>
                  ) : callStatus === "ended" ? (
                    <>Call Ended</>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 md:w-5 md:h-5" />
                      Start Demo Call
                    </>
                  )}
                </motion.button>
              )}

              <p className="text-center md:text-left text-xs md:text-sm text-gray-500 mb-4">
                No payment required • Live demo call • Instant connection
              </p>

              {/* Additional Info */}
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-semibold text-white mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-xs text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>The AI will greet you and ask how it can help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Try asking about services, pricing, or booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Experience natural conversation flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">•</span>
                    <span>Test appointment scheduling capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
