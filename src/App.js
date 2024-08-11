import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import YaziListesi from "./Components/YaziListesi";
import YaziDetayListesi from "./Components/YaziDetayListesi";
import moment from 'moment';
import 'moment/locale/tr';

function App() {
  const formatDate = (dateString) => {
    return moment(dateString).locale('tr').format('DD MMMM YYYY, HH:mm');
  };  
  return (
    <Router>
      <div className="main_wrapper">
        <header></header>
        <div className="ui raised very padded text container segment">
          <Routes>
            <Route path="/" exact element={<YaziListesi formatDate={formatDate}/>} />
             <Route path="/posts/:id" element={<YaziDetayListesi formatDate={formatDate}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;