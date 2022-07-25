/* eslint-disable */
import refreshPng from "../../../assets/refresh.png";
import { Container } from "reactstrap";
// import NavBar from "../../Navbar";
import Handler from "./Handler";
import { useEffect, useState } from "react";
import TableLeaderboard from "./Table";
import { updateLeaderboard, getLeaderBoards } from "../../../firebase";

function Play({ user }) {
  // console.log(user);
  const RPS = ["rock", "paper", "scissor"];

  const [playerSelect, setPlayerSelect] = useState("");
  const [cpuSelect, setCpuSelect] = useState("");
  const [win, setWin] = useState("START"); // START, WIN, LOSE, DRAW
  const [leaderboards, setLeaderboards] = useState([]);

  // Untuk meng update table leaderboard
  async function updateTableLeaderboard() {
    const responses = await getLeaderBoards();
    setLeaderboards(responses);
  }

  useEffect(() => {
    async function fetchData() {
      await updateTableLeaderboard();
    }
    fetchData();
  }, []);

  function computerSelect() {
    const rand = Math.floor(Math.random() * 100);
    if (rand > 0 && rand < 35) {
      return RPS[0];
    }
    if (rand > 35 && rand < 70) {
      return RPS[1];
    }
    return RPS[2];
  }

  function winCondition(p1, p2) {
    if (p1 === p2) {
      return "DRAW";
    }

    if (p1 === "scissor" && p2 === "paper") {
      return "WIN";
    }

    if (p1 === "rock" && p2 === "scissor") {
      return "WIN";
    }

    if (p1 === "paper" && p2 === "rock") {
      return "WIN";
    }

    return "LOSE";
  }

  async function handlePlayerPlay(pMove) {
    setPlayerSelect(pMove);
    const cpu = computerSelect();
    setCpuSelect(cpu);
    const win = winCondition(pMove, cpu);
    setWin(win);
    await updateLeaderboard(user, win);
    await updateTableLeaderboard();
  }

  function reset() {
    setCpuSelect("");
    setPlayerSelect("");
    setWin("START");
  }

  function celebrate() {
    if (win === "START") {
      return <h1>Vs</h1>;
    }
    if (win === "LOSE") {
      return <h1 className="error"> You Lose!!</h1>;
    }
    if (win === "WIN") {
      return <h1 className="error"> You Win!!</h1>;
    }
    if (win === "DRAW") {
      return <h1 className="error">It's Draw!!</h1>;
    }
  }

  return (
    <Container>
      {/* <NavBar navigations={[]} text="Rock Paper Sisscors" /> */}
      <section id="gameplay" className="mt-4">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Handler
              selected={playerSelect}
              title="Player"
              clickHandler={handlePlayerPlay}
            />
            <div className="row row-cols-1 col-sm-4 col-4 align-content-around text-center">
              <div className="col">
                <TableLeaderboard leaderboards={leaderboards} />
              </div>
              <div className="col">{celebrate()}</div>
            </div>
            <Handler
              selected={cpuSelect}
              title="Computer"
              clickHandler={() => {
                return;
              }}
            />
          </div>
        </div>
      </section>
      <section id="refresh-section">
        <div className="row text-center">
          <div onClick={reset}>
            <img
              width="100px"
              height="100px"
              src={refreshPng}
              alt="refresh button"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Play;
