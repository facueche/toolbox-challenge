import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import * as ApiFileService from './core/services/api.file.service';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    setLoading(true);
    try {
      setFiles(await ApiFileService.getFiles());
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <h1 className='Title'>Toolbox - Files</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        {
          loading ?
            <Spinner animation="grow" className='Spinner' /> :
            <tbody>
              {
                files.map(file => {
                  return file.lines.map((line, key) => {
                    return <tr key={key}>
                      <td>{file.file}</td>
                      <td>{line.text}</td>
                      <td>{line.number}</td>
                      <td>{line.hex}</td>
                    </tr>
                  })
                })
              }
            </tbody>
        }
      </Table>
    </div>
  );
}

export default App;
