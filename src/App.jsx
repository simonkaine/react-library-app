import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import BookList from './views/Books/BookList'
import BookDetail from './views/Books/BookDetail'
import './App.css'

function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Router>
        <Link to="/books" style={{ color: 'white' }}>
          Return to books list..
        </Link>
        <Switch>
          <Route exact path="/books" component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
