import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, PhoneOff, Loader2, ChevronDown } from 'lucide-react';
import { createRetellWebCall, RETELL_AGENTS, getAgentById } from '@/lib/retell';

declare global {
  interface Window {
    RetellWebClient?: any;
  }
}

const TryAgentSection = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>(RETELL_AGENTS[0].id);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [retellClient, setRetellClient] = useState<any>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Load Retell Web SDK - preload in background
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/retell-sdk@latest/dist/retell.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const startCall = async () => {
    setIsConnecting(true);

    try {
      // Wait for SDK if not loaded yet
      if (!window.RetellWebClient) {
        console.log('Waiting for SDK to load...');
        await new Promise((resolve, reject) => {
          const checkInterval = setInterval(() => {
            if (window.RetellWebClient) {
              clearInterval(checkInterval);
              resolve(true);
            }
          }, 100);

          // Timeout after 5 seconds
          setTimeout(() => {
            clearInterval(checkInterval);
            reject(new Error('SDK load timeout'));
          }, 5000);
        });
      }

      // Create web call with selected agent
      const callData = await createRetellWebCall(selectedAgent);

      // Initialize Retell Web Client
      const client = new window.RetellWebClient();

      // Set up event listeners
      client.on('call_started', () => {
        console.log('Call started');
        setIsCallActive(true);
        setIsConnecting(false);
      });

      client.on('call_ended', () => {
        console.log('Call ended');
        setIsCallActive(false);
        setIsConnecting(false);
      });

      client.on('agent_start_talking', () => {
        console.log('Agent started talking');
      });

      client.on('agent_stop_talking', () => {
        console.log('Agent stopped talking');
      });

      client.on('error', (error: any) => {
        console.error('Call error:', error);
        setIsCallActive(false);
        setIsConnecting(false);
        alert('Call failed. Please try again.');
      });

      // Start the call
      await client.startCall({
        accessToken: callData.access_token,
        callId: callData.call_id,
        sampleRate: 24000,
        enableUpdate: true,
      });

      setRetellClient(client);
    } catch (error) {
      console.error('Failed to start call:', error);
      setIsConnecting(false);
      alert('Failed to connect. Please check your internet connection.');
    }
  };

  const endCall = () => {
    if (retellClient) {
      retellClient.stopCall();
      setRetellClient(null);
      setIsCallActive(false);
    }
  };

  const currentAgent = getAgentById(selectedAgent);

  return (
    <section className="relative py-20 pb-32 bg-gradient-to-b from-black via-[#0A0510] to-black overflow-visible">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(123,97,255,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="relative bg-black/40 backdrop-blur-xl rounded-[32px] border border-white/10 shadow-2xl p-12 md:p-16"
            style={{ boxShadow: '0 0 60px rgba(123, 97, 255, 0.15)' }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Try Your Agent for Free
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Experience Clario AI in action — choose an agent and start a live demo call
                </p>
              </div>

              {/* Right Side - Call Interface */}
              <div className="space-y-6 relative">
                {!isCallActive ? (
                  <>
                    {/* Agent Dropdown */}
                    <div className="relative z-30">
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        disabled={isConnecting}
                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-left flex items-center justify-between hover:bg-white/10 hover:border-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
                      >
                        <span className="text-white font-medium">
                          {currentAgent?.name || 'Select an agent'}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-[#0F0F1E] backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden z-40"
                          style={{ boxShadow: '0 8px 32px rgba(123, 97, 255, 0.3)' }}>
                          {RETELL_AGENTS.map((agent) => (
                            <button
                              key={agent.id}
                              onClick={() => {
                                setSelectedAgent(agent.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full px-6 py-4 text-left transition-all border-b border-white/5 last:border-b-0 ${
                                selectedAgent === agent.id
                                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/30'
                                  : 'text-white hover:bg-white/5'
                              }`}
                            >
                              <div className="font-medium">{agent.name}</div>
                              <div className="text-sm text-gray-400 mt-0.5">{agent.description}</div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Start Call Button */}
                    <button
                      onClick={startCall}
                      disabled={isConnecting}
                      className="w-full px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, #7B61FF 0%, #6B4CFF 100%)',
                        boxShadow: '0px 0px 24px rgba(125, 76, 255, 0.6)',
                      }}
                    >
                      {isConnecting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Connecting...
                        </>
                      ) : (
                        <>
                          <Phone className="w-5 h-5" />
                          Start Demo Call
                        </>
                      )}
                    </button>

                    {/* Info Text */}
                    <p className="text-center text-sm text-gray-500">
                      No payment required • Live demo call • Instant connection
                    </p>
                  </>
                ) : (
                  <>
                    {/* Active Call Box */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg shadow-green-500/50">
                          <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          Clario AI Talking
                        </h3>
                        <p className="text-sm text-gray-400">
                          Connected with {currentAgent?.name}
                        </p>
                      </div>

                      {/* End Call Button */}
                      <button
                        onClick={endCall}
                        className="w-full px-8 py-4 rounded-2xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                          boxShadow: '0px 0px 24px rgba(239, 68, 68, 0.5)',
                        }}
                      >
                        <PhoneOff className="w-5 h-5" />
                        End Call
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryAgentSection;
