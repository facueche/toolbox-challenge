import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Table, Spinner, InputGroup, Form, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import * as ApiFileService from './core/services/api.file.service';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  const searchFile = async () => {
    setLoading(true);
    try {
      setFiles(await ApiFileService.searchFileByFileName(searchText));
    } catch (error) {
      alert(error.message);
    }
    setLoading(false);
  }

  const handleSearchFile = () => {
    if (searchText !== "")
      searchFile();
    else
      fetchFiles();
  }

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
    console.log(searchText);
  }

  const handleClearSearchText = () => {
    setSearchText("");
    fetchFiles();
  }

  return (
    <div className="App">
      <h1 className='Title'>Toolbox - Files</h1>
      <hr />
      <fieldset disabled={loading}>
        <InputGroup>
          <Form.Control
            placeholder="Enter file name. (Blank to fetch all files)"
            onChange={handleSearchTextChange}
            value={searchText}
          />
          <Button
            variant="outline-secondary"
            onClick={handleClearSearchText}
          >
            Clear
          </Button>
          <Button
            variant="outline-secondary"
            onClick={handleSearchFile}
          >
            Search
          </Button>
        </InputGroup>
      </fieldset>
      <br />
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
