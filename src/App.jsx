import { Tldraw } from 'tldraw'
import { getAssetUrls } from '@tldraw/assets/selfHosted'
import 'tldraw/tldraw.css'

const assetUrls = getAssetUrls()

function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw 
        persistenceKey="sebbes-tldraw-local"
        assetUrls={assetUrls}
      />
    </div>
  )
}

export default App
