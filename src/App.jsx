import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import ChooseTemplate from './ChooseTemplate/ChooseTemplate';
import ImportResume from './ImportResume/ImportResume';
import CreateResume from './Create/CreateResume';
import Export from './components/Export/Export';
import StoredResumes from './components/StoredResumes/StoredResumes';
import PageNotFound from './components/PageNotFound/PageNotFound';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home />}/>
                <Route path="/choose-template" element={< ChooseTemplate />}/>
                <Route path="/import-resume" element={< ImportResume />}/>
                <Route path="/create" element={< CreateResume />}/>
                <Route path="/export" element={<Export />} />
                <Route path="/stored_resumes" element={<StoredResumes />} />
                <Route path="*" element={< PageNotFound />}/>
            </Routes>
        </Router>
    );
}