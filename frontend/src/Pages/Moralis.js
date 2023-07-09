import React, { useState } from 'react';
import { useMoralis, useMoralisFile } from 'react-moralis';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  Alert,
} from 'react-bootstrap';

const App = () => {
  const { Moralis, user } = useMoralis();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    save: saveFile,
    isUploading: isFileUploading,
    error: fileUploadError,
  } = useMoralisFile();

  const onFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const onSubmit = async () => {
    setErrorMessage('');
    if (!file) {
      setErrorMessage('Please upload a file.');
      return;
    }

    try {
      const moralisFile = new Moralis.File(file.name, file);
      await saveFile(moralisFile);

      // Mint the NFT here
      console.log('File uploaded successfully.', moralisFile.url());
    } catch (error) {
      console.error('Error uploading file:', error);
      setErrorMessage('Error uploading file. Please try again.');
    }
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>NFT Minting</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>File</Form.Label>
              <InputGroup>
                <FormControl
                  type="file"
                  onChange={onFileChange}
                  />
                </InputGroup>
              </Form.Group>
              {errorMessage && (
                <Alert variant="danger" onClose={() => setErrorMessage('')} dismissible>
                  {errorMessage}
                </Alert>
              )}
              <Button
                variant="primary"
                type="button"
                onClick={onSubmit}
                disabled={isFileUploading}
              >
                {isFileUploading ? 'Uploading...' : 'Mint NFT'}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default App;
s  
