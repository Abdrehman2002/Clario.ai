# Vextria AI Voice Widget - Embedding Guide

## 🎯 Overview

The Vextria AI Voice Widget is a premium floating voice assistant that appears on all pages of your website. Visitors can click the widget to instantly start a voice conversation with your AI agent powered by Retell AI.

## ✨ Features

- **Floating Button**: Bottom-right corner with glowing purple gradient
- **Smooth Animations**: Spring-based animations with hover effects
- **Voice Connection**: Real-time WebRTC voice calls via Retell AI
- **Visual Feedback**: Animated waveform during conversations
- **Call Controls**: Mute, unmute, and end call functionality
- **Call Timer**: Displays duration of active calls
- **Status Indicators**: Clear visual states (idle, connecting, connected, ended)
- **Responsive Design**: Works perfectly on mobile and desktop
- **Premium UI**: Glassmorphism effects with blur backgrounds

## 🚀 Quick Start (React/Next.js)

### 1. Installation

The widget is already integrated into your Vextria AI website. It appears automatically on all pages.

### 2. Configuration

The widget uses these default settings:

```typescript
const AGENT_ID = 'agent_9cef40d41106ca13e58d6a38f6';
const API_KEY = 'key_52cf8f696d64009de42d4196e27c';
```

### 3. Customization

To customize the widget, edit `src/components/VoiceWidget.tsx`:

#### Change Agent ID
```typescript
const AGENT_ID = 'your_agent_id_here';
```

#### Change API Key
```typescript
const API_KEY = 'your_api_key_here';
```

#### Customize Colors
The widget uses your site's existing purple gradient theme:
```typescript
// Main button gradient
from-[#7B61FF] via-[#6B4CFF] to-[#5B3EFF]

// Waveform colors
from-purple-500 to-blue-500
```

#### Change Position
```typescript
// Current: bottom-right
className="fixed bottom-6 right-6 z-[9999]"

// Bottom-left alternative:
className="fixed bottom-6 left-6 z-[9999]"
```

#### Change Button Text
```typescript
<span className="hidden sm:block">Talk to Vextria AI</span>
```

## 📦 Embed on External Websites

### Option 1: iframe Embed

Build your site and host it, then embed using an iframe:

```html
<iframe
  src="https://your-vextria-site.com/widget-only"
  style="position: fixed; bottom: 20px; right: 20px; width: 400px; height: 600px; border: none; z-index: 9999;"
  allow="microphone"
></iframe>
```

### Option 2: Standalone JavaScript Widget

Create a distributable widget:

```bash
npm run build
```

Then include in any HTML page:

```html
<!-- Add to your <head> -->
<link rel="stylesheet" href="https://cdn.your-domain.com/voice-widget.css">

<!-- Add before </body> -->
<script src="https://cdn.your-domain.com/voice-widget.js"></script>
<script>
  VextriaVoiceWidget.init({
    agentId: 'agent_9cef40d41106ca13e58d6a38f6',
    apiKey: 'key_52cf8f696d64009de42d4196e27c',
    position: 'bottom-right', // or 'bottom-left'
    theme: 'purple' // or 'blue', 'custom'
  });
</script>
```

### Option 3: WordPress Plugin

1. Copy the widget code
2. Create a WordPress shortcode:

```php
function vextria_voice_widget() {
  return '<div id="vextria-voice-widget-root"></div>
          <script src="https://cdn.your-domain.com/voice-widget.js"></script>';
}
add_shortcode('vextria_voice', 'vextria_voice_widget');
```

3. Add to footer:
```php
<?php echo do_shortcode('[vextria_voice]'); ?>
```

### Option 4: Webflow Embed

1. Add Custom Code in Project Settings
2. Add before `</body>`:

```html
<div id="vextria-voice-widget"></div>
<script src="https://unpkg.com/retell-client-js-sdk"></script>
<script>
  // Widget initialization code here
</script>
```

## 🎨 UI Customization Examples

### Example 1: Blue Theme
```typescript
// Replace purple with blue
className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"
```

### Example 2: Larger Button
```typescript
// Change button size
className="px-8 py-5 text-lg"
```

### Example 3: No Text on Mobile
```typescript
// Hide text on all screens
<span className="hidden">Talk to Vextria AI</span>
```

### Example 4: Different Icon
```typescript
import { Phone } from 'lucide-react';
// Replace Mic with Phone
<Phone className="w-5 h-5" />
```

## 🔧 Advanced Configuration

### Custom Agent Selection

Allow users to choose different agents:

```typescript
const AGENTS = [
  { id: 'agent_spa', name: 'Spa Agent' },
  { id: 'agent_medical', name: 'Medical Agent' },
  { id: 'agent_auto', name: 'Auto Agent' },
];

const [selectedAgent, setSelectedAgent] = useState(AGENTS[0]);
```

### Analytics Integration

Track widget interactions:

```typescript
// In startCall function
gtag('event', 'voice_widget_call_started', {
  agent_id: AGENT_ID,
  timestamp: new Date().toISOString()
});

// In endCall function
gtag('event', 'voice_widget_call_ended', {
  duration: callDuration,
  agent_id: AGENT_ID
});
```

### Custom Welcome Message

Add a tooltip on first visit:

```typescript
const [showTooltip, setShowTooltip] = useState(true);

// Show tooltip for 5 seconds
useEffect(() => {
  const timer = setTimeout(() => setShowTooltip(false), 5000);
  return () => clearTimeout(timer);
}, []);
```

## 🐛 Troubleshooting

### Microphone Permission Denied

The widget will automatically request microphone access. If denied:

```typescript
client.on('error', (error) => {
  if (error.message.includes('permission')) {
    alert('Please allow microphone access to use voice chat');
  }
});
```

### API Key Issues

If you see "Payment overdue" or authentication errors:
1. Verify API key is correct
2. Check Retell AI dashboard for account status
3. Ensure agent ID exists and is active

### Widget Not Appearing

Check:
1. VoiceWidget is imported in App.tsx
2. Component is rendered: `<VoiceWidget />`
3. No CSS z-index conflicts
4. Browser console for errors

### Call Not Connecting

Debug steps:
1. Open browser console (F12)
2. Look for Retell SDK errors
3. Verify agent ID is correct
4. Check network tab for API calls
5. Ensure microphone permissions granted

## 📱 Mobile Optimization

The widget is already mobile-optimized:

- Text hidden on small screens: `className="hidden sm:block"`
- Touch-friendly button size: `px-6 py-4`
- Responsive panel width: `w-[340px] sm:w-[380px]`
- Fixed positioning prevents scrolling issues

## 🎯 Best Practices

### Performance
- Widget lazy loads on mount (no initial API call)
- Connection only established when clicked
- Efficient animation using requestAnimationFrame
- Cleanup on component unmount

### UX Guidelines
- Button pulsing animation attracts attention
- Clear status indicators during connection
- Visual waveform feedback during conversation
- One-click to start talking
- Easy access to end call button

### Security
- API keys should be environment variables in production
- Never expose keys in client-side code for public sites
- Use server-side proxy for API calls in production
- Validate user permissions before connecting

## 🔄 Updates & Maintenance

### Update Agent ID
```bash
# Edit VoiceWidget.tsx
const AGENT_ID = 'new_agent_id';
```

### Update Styling
All styles use Tailwind CSS classes. Modify directly in the component.

### Update Retell SDK
```bash
npm update retell-client-js-sdk
```

## 📊 Usage Analytics

Track these metrics:
- Widget clicks
- Call durations
- Successful connections
- Drop-off rates
- Peak usage times

Integration example with Google Analytics:

```typescript
// Track clicks
onClick={() => {
  gtag('event', 'widget_click');
  handleWidgetClick();
}}

// Track call duration
useEffect(() => {
  if (callStatus === 'ended' && callDuration > 0) {
    gtag('event', 'call_completed', {
      duration: callDuration
    });
  }
}, [callStatus]);
```

## 🌐 Browser Compatibility

Tested on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile Chrome (Android)
- ✅ Mobile Safari (iOS)

## 📞 Support

For issues or questions:
- Check console logs for errors
- Review Retell AI documentation
- Contact Vextria AI support
- Check browser compatibility

## 🎉 Live Demo

Visit your website at http://localhost:8084/ to see the widget in action!

The widget appears in the bottom-right corner on all pages.
