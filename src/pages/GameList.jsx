import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Alert,
  CardText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "./GameList.style.css";

function GameList() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "games"));
      setGames(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    }
    fetchData();
  }, [games]);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !description || !url)
      return alert("Please insert missing field!");

    try {
      await addDoc(collection(db, "games"), {
        name,
        description,
        url,
      });
      const querySnapshot = await getDocs(collection(db, "games"));
      setGames(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  return (
    <Container>
      <Row>
        <Col xs="12">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Add New Game</CardTitle>
              <Form>
                <FormGroup>
                  <Label>Game name</Label>
                  <Input
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="please input the game name"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Game description</Label>
                  <Input
                    id="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    placeholder="please input the game description"
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label>Game url</Label>
                  <Input
                    id="description"
                    onChange={(e) => setUrl(e.target.value)}
                    value={url}
                    placeholder="please input the game url"
                    type="text"
                  />
                </FormGroup>
                <Button onClick={(e) => handleSubmit(e)}>Save</Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        {games.length > 0 ? (
          games.map((game) => {
            return (
              <Col xs="4" key={game.url}>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{game.name}</CardTitle>
                    <CardText>{game.description}</CardText>
                    <Button color="primary" outline>
                      <Link to={`/game/${game.url}`}>Play</Link>
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })
        ) : (
          <Col>
            <Alert color="secondary">No games yet</Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default GameList;
