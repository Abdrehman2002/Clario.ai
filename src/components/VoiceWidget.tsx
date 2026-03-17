import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Phone, PhoneOff, Minimize2, Loader2 } from 'lucide-react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { cn } from '@/lib/utils';

type CallStatus = 'idle' | 'connecting' | 'connected' | 'ended';

export function VoiceWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [callStatus, setCallStatus] = useState<CallStatus>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [retellClient, setRetellClient] = useState<RetellWebClient | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // Agent configuration
  const AGENT_ID = 'agent_9cef40d41106ca13e58d6a38f6';
  const API_KEY = 'key_52cf8f696d64009de42d4196e27c';

  // Ensure portal container exists and is properly configured
  useEffect(() => {
    let portalContainer = document.getElementById('vextria-voice-widget-portal');

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.id = 'vextria-voice-widget-portal';
      document.body.appendChild(portalContainer);
    }

    setPortalReady(true);

    return () => {
      // Cleanup on unmount
      const container = document.getElementById('vextria-voice-widget-portal');
      if (container && container.childNodes.length === 0) {
        container.remove();
      }
    };
  }, []);

  // Format call duration
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Start call timer
  useEffect(() => {
    if (callStatus === 'connected') {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setCallDuration(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [callStatus]);

  // Simulate audio waveform animation
  useEffect(() => {
    if (callStatus === 'connected' && !isMuted) {
      const animate = () => {
        setAudioLevel(Math.random() * 100);
        animationRef.current = requestAnimationFrame(animate);
      };
      animate();
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      setAudioLevel(0);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [callStatus, isMuted]);

  // Start voice call
  const startCall = async () => {
    try {
      setCallStatus('connecting');

      console.log('🔑 Using API Key:', API_KEY);
      console.log('🤖 Agent ID:', AGENT_ID);

      // Create web call
      const response = await fetch('https://api.retellai.com/v2/create-web-call', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          agent_id: AGENT_ID,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Retell API error:', data);
        throw new Error(data.message || 'Failed to create web call');
      }

      console.log('✅ Web Call Created:', data);

      // Initialize Retell Web Client
      const client = new RetellWebClient();

      // Set up event listeners
      client.on('call_started', () => {
        console.log('Call started');
        setCallStatus('connected');
      });

      client.on('call_ended', () => {
        console.log('Call ended');
        setCallStatus('ended');
        setTimeout(() => {
          setCallStatus('idle');
          setIsOpen(false);
          setRetellClient(null);
        }, 2000);
      });

      client.on('error', (error) => {
        console.error('Call error:', error);
        setCallStatus('idle');
        alert('Call failed. Please check microphone permissions and try again.');
      });

      client.on('update', (update) => {
        console.log('Call update:', update);
      });

      // Start the call with access token
      await client.startCall({
        accessToken: data.access_token,
      });

      setRetellClient(client);
    } catch (err: any) {
      console.error('Error starting call:', err);
      alert('Error starting call: ' + (err.message || err));
      setCallStatus('idle');
    }
  };

  // End call
  const endCall = () => {
    if (!retellClient) return;

    try {
      retellClient.stopCall();
      setCallStatus('ended');

      setTimeout(() => {
        setCallStatus('idle');
        setIsOpen(false);
        setRetellClient(null);
      }, 2000);
    } catch (err: any) {
      console.error('Error ending call:', err);
      setCallStatus('idle');
      setRetellClient(null);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Note: Retell SDK mute functionality would go here
  };

  // Handle widget click
  const handleWidgetClick = () => {
    if (callStatus === 'idle') {
      setIsOpen(true);
      startCall();
    } else {
      setIsOpen(!isOpen);
    }
  };

  const widgetContent = (
    <>
      {/* Floating Widget Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-[99999]"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 99999,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={handleWidgetClick}
          className={cn(
            'relative flex items-center gap-3 px-6 py-4 rounded-full',
            'bg-gradient-to-r from-[#7B61FF] via-[#6B4CFF] to-[#5B3EFF]',
            'text-white font-semibold shadow-2xl',
            'transition-all duration-300 hover:shadow-[0_0_40px_rgba(123,97,255,0.6)]',
            'overflow-hidden group'
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={
            callStatus === 'idle'
              ? {
                  boxShadow: [
                    '0 0 20px rgba(123, 97, 255, 0.4)',
                    '0 0 30px rgba(123, 97, 255, 0.6)',
                    '0 0 20px rgba(123, 97, 255, 0.4)',
                  ],
                }
              : {}
          }
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />

          {/* Content */}
          <div className="relative flex items-center gap-3">
            {callStatus === 'idle' ? (
              <>
                <Mic className="w-5 h-5" />
                <span className="hidden sm:block">Talk to Vextria AI</span>
              </>
            ) : callStatus === 'connecting' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="hidden sm:block">Connecting...</span>
              </>
            ) : callStatus === 'connected' ? (
              <>
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="hidden sm:block">{formatDuration(callDuration)}</span>
              </>
            ) : (
              <>
                <PhoneOff className="w-5 h-5" />
                <span className="hidden sm:block">Call Ended</span>
              </>
            )}
          </div>
        </motion.button>
      </motion.div>

      {/* Voice Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-6 z-[99999] w-[340px] sm:w-[380px]"
            style={{
              position: 'fixed',
              bottom: '112px',
              right: '24px',
              zIndex: 99999,
            }}
          >
            <div className="relative bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-6 overflow-hidden">
              {/* Background gradient effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                      <Mic className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm">Vextria AI</h3>
                      <p className="text-gray-400 text-xs">
                        {callStatus === 'connecting' && 'Connecting...'}
                        {callStatus === 'connected' && 'Connected'}
                        {callStatus === 'ended' && 'Call Ended'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Minimize2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Waveform Visualization */}
                <div className="mb-6 h-24 flex items-center justify-center gap-1">
                  {callStatus === 'connected' ? (
                    <>
                      {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
                          animate={{
                            height: isMuted
                              ? '4px'
                              : `${Math.random() * 60 + 10}px`,
                          }}
                          transition={{
                            duration: 0.15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        />
                      ))}
                    </>
                  ) : callStatus === 'connecting' ? (
                    <div className="text-center">
                      <Loader2 className="w-12 h-12 text-purple-500 animate-spin mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Connecting to AI Agent...</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-2">
                        <PhoneOff className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-gray-400 text-sm">Call Ended</p>
                    </div>
                  )}
                </div>

                {/* Call Duration */}
                {callStatus === 'connected' && (
                  <div className="text-center mb-6">
                    <p className="text-2xl font-bold text-white tabular-nums">
                      {formatDuration(callDuration)}
                    </p>
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-center gap-4">
                  {callStatus === 'connected' && (
                    <>
                      {/* Mute Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleMute}
                        className={cn(
                          'w-14 h-14 rounded-full flex items-center justify-center',
                          'transition-all duration-300',
                          isMuted
                            ? 'bg-red-500/20 text-red-400'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        )}
                      >
                        {isMuted ? (
                          <MicOff className="w-5 h-5" />
                        ) : (
                          <Mic className="w-5 h-5" />
                        )}
                      </motion.button>

                      {/* End Call Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={endCall}
                        className="w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center shadow-lg hover:shadow-red-500/50 transition-all duration-300"
                      >
                        <PhoneOff className="w-5 h-5" />
                      </motion.button>
                    </>
                  )}

                  {callStatus === 'ended' && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsOpen(false)}
                      className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      Close
                    </motion.button>
                  )}
                </div>

                {/* Status Text */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    {callStatus === 'connected' && 'Speak naturally with the AI'}
                    {callStatus === 'connecting' && 'Requesting microphone access...'}
                    {callStatus === 'ended' && 'Thanks for talking with Vextria AI'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  // Don't render until portal is ready
  if (!portalReady) {
    return null;
  }

  // Render widget using portal to dedicated container at body level
  const portalContainer = document.getElementById('vextria-voice-widget-portal');
  if (!portalContainer) {
    return null;
  }

  return createPortal(widgetContent, portalContainer);
}
