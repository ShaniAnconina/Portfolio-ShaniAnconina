import './assets/scss/styles.scss'

import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './pages/home-page.jsx'
// import { AppFooter } from './cmps/app-footer.jsx'

export function App() {
  return (
    <div className="app main-layout full">
      <AppHeader />
      <p>lalalala</p>
      <HomePage />
      {/* <AppFooter /> */}
    </div>
  )
}