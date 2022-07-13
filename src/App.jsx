import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './home/Home';
import ChooseTemplate from './chooseTemplate/ChooseTemplate';
import ImportResume from './importResume/ImportResume';
import CreateResume from './create/CreateResume';
import Export from './export/Export';
import StoredResumes from './storedResumes/StoredResumes';

import 'bootstrap/dist/css/bootstrap.min.css';

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
                <Route path="/export" element={<Export />} />
                <Route path="/stored_resumes" element={<StoredResumes />} />
                <Route path="*" element={< PageNotFound />}/>
            </Routes>
        </Router>
    );
}