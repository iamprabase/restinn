import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import 'font-awesome/css/font-awesome.min.css'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import PropertyListingScreen from './screens/PropertyListingScreen'
import PropertyDetailScreen from './screens/PropertyDetailScreen'
import PropertyTypeListingScreen from './screens/PropertyTypeListingScreen'

function App() {
  return (
    <Router>
        <Header />
        <main className="py-2">
          <Container fluid>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/properties" exact element={<PropertyListingScreen />} />
              <Route path="/properties/:id" exact element={<PropertyDetailScreen />} />
              <Route path="/property-types/:id" exact element={<PropertyTypeListingScreen />} />
              <Route path="/login" exact element={<SignInScreen />} />
              <Route path="/register" exact element={<SignUpScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
    </Router>
  );
}

export default App