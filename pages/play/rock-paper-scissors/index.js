/* eslint-disable */
import Image from "next/image";
import refreshPng from "../../../public/assets/refresh.png";
import { Col, Container, Row } from "reactstrap";
// import NavBar from "../../Navbar";
import Handler from "./Handler";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TableLeaderboard from "./Table";
import { updateLeaderboard, getLeaderBoards } from "../../../utils/firebase";

function Play() {
  const router = useRouter();
  const {
    query: { userUid, userName },
  } = router;
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
    await updateLeaderboard(userUid, userName, win);
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
      <h2 className="text-center">Rock Paper Scissors</h2>
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
            <Image src={refreshPng} alt="scissors" width={100} height={100} />
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Play;
