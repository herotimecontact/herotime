/**
 * AdSlot Component - Google AdSense Placeholder
 * 
 * This component creates placeholder ad sections for Google AdSense integration.
 * Replace 'ca-pub-XXXXXXXXXXXXXXXX' with your actual AdSense publisher ID
 * and update data-ad-slot with your actual ad unit IDs when ready.
 * 
 * Usage:
 * <AdSlot slot="hero-bottom" format="horizontal" />
 * <AdSlot slot="page-bottom" format="rectangle" />
 */

export default function AdSlot({ slot, format = 'auto', className = '' }) {
  // Check if ads should be shown (controlled by environment variable)
  const showAds = process.env.NEXT_PUBLIC_SHOW_ADS === 'true';
  
  // Don't render anything if ads are disabled
  if (!showAds) {
    return null;
  }

  // AdSense formats
  const formats = {
    auto: { height: 'auto', display: 'block' },
    horizontal: { height: '90px', display: 'block' },
    rectangle: { height: '250px', display: 'block' },
    vertical: { height: '600px', display: 'inline-block', width: '160px' }
  };

  const style = formats[format] || formats.auto;

  return (
    <div className={`ad-container ${className}`}>
      <div className="ad-label">Advertisement</div>
      <ins
        className="adsbygoogle"
        style={{
          display: style.display,
          height: style.height,
          width: style.width || '100%',
          backgroundColor: 'rgba(20, 30, 20, 0.3)',
          border: '1px solid rgba(34, 139, 34, 0.2)',
          minHeight: style.height
        }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      >
        {/* Placeholder content - Remove when AdSense is active */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'rgba(134, 239, 172, 0.3)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          padding: '1rem',
          textAlign: 'center'
        }}>
          Sponsored Content
        </div>
      </ins>
    </div>
  );
}
