import { useEffect } from 'react';
import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * SpeedInsights Component
 * 
 * Integrates Vercel Speed Insights into the application to track and monitor
 * web performance metrics including Core Web Vitals.
 * 
 * This component should be mounted once in your application, preferably
 * near the root level to ensure it tracks all page interactions.
 */
export const SpeedInsights = () => {
  useEffect(() => {
    // Inject Speed Insights tracking script
    injectSpeedInsights();
  }, []);

  return null;
};

export default SpeedInsights;
