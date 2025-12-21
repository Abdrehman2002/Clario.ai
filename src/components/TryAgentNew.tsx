import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, Check, PhoneOff, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { RetellWebClient } from "retell-client-js-sdk";

const AGENTS = [
  {
    id: 'agent_68d22a69f45a3ee37168684831',
    label: "AutoCare Receptionist",
    description: "Automotive service scheduling",
  },
  {
    id: 'agent_71d88e63296903b65f6dc0d372',
    label: "Real Estate Receptionist",
    description: "Property inquiries & showings",
  },
  {
    id: 'agent_medical_placeholder',
    label: "Medical Receptionist",
    description: "Healthcare appointments",
  },
  {
    id: 'agent_law_placeholder',
    label: "Law Firm Receptionist",
    description: "Legal consultations",
  },
  {
    id: 'agent_spa_placeholder',
    label: "Spa/Salon Receptionist",
    description: "Beauty & wellness booking",
  },
  {
    id: 'agent_fitness_placeholder',
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
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const startCall = async () => {
    if (!selected) return;

    try {
      setIsLoading(true);
      setCallStatus("calling");

      const apiKey = import.meta.env.VITE_RETELL_API_KEY;

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
    <section className="py-16 md:py-20 pb-20 md:pb-32 bg-gradient-to-b from-black via-[#0A0510] to-black relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-black/40 backdrop-blur-xl rounded-2xl md:rounded-[32px] border border-white/10 shadow-2xl p-6 md:p-8 lg:p-12"
          style={{ boxShadow: '0 0 60px rgba(123, 97, 255, 0.15)' }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            {/* Left Side - Text */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                Try Your Agent for Free
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                Experience Clario AI in action — choose an agent and start a live demo call
              </p>
            </div>

            {/* Right Side - Call Interface */}
            <div className="flex-1 w-full max-w-md space-y-4 md:space-y-6 relative">
              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
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

              <p className="text-center text-xs md:text-sm text-gray-500">
                No payment required • Live demo call • Instant connection
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
