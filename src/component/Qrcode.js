import * as React from 'react';
import QRCode from 'qrcode.react';

const QrCode = () => {
  const [url, setUrl] = React.useState('');

  const downloadQRCode = (evt) => {
    evt.preventDefault();
  

    setUrl('');
  };
  const qrcode = 
  <QRCode  
  id="qrCodeId" 
  size={500} 
  value={'https://www.ivistamed.com/'} 
  bgColor="white" 
  includeMargin
  fgColor='black'
  level='H'
  />;

  return (
    <div>
      <form onSubmit={downloadQRCode}>
        <input
          type="text"
          value={url}
          onChange={e => setUrl(e.target.value)}
          placeholder="https://example.com"
        />

        <button type="submit">Download QR Code</button>
      </form>

      <div>{qrcode}</div>
    </div>
  );
};
export default QrCode;
