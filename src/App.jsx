import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home/Home';
import ChooseTemplate from './chooseTemplate/ChooseTemplate';
import ImportResume from './importResume/ImportResume';
import CreateResume from './create/CreateResume';

//Page Not Found Component
import PageNotFound from './pageNotFound/PageNotFound';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route path="/choose-template" element={< ChooseTemplate />}/>
                <Route path="/import-resume" element={< ImportResume />}/>
                <Route path="/create" element={< CreateResume />}/>
                <Route path="*" element={< PageNotFound />}/>
            </Routes>
        </Router>
    );
}