import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { alertService } from "../../services";
import OceanBlock, {
  abcArray,
  range,
  diffBetweenArray,
} from "../../Utils/Common";
import {
  OceonShipBlock,
  NotificationSection,
  ActionSection,
  ShipConfirmation,
} from "../../components";
import { GlobalContext } from "../../GlobalContext";
import "./GameContainer.css";

const GameContainer = () => {
  const [oceanBlocks, setOceanBlocks] = useState(new Array(100));
  const [isInfinitive, setIsInfinitive] = useState(true);
  const [currentAttempts, setCurrentAttempts] = useState(0);
  const [thereIsActiveShipBlocks, setThereIsActiveShipBlocks] = useState(true);
  const [displayShips, setDisplayShips] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalBody, setModalBody] = useState("");
  const [gameId, setGameId] = useState(0);
  const { loadGames, globalState } = useContext(GlobalContext);
  const { attemptsParam, showShips } = useParams();
  const attempts = +attemptsParam;
  const alertOptions = {
    autoClose: true,
    keepAfterRouteChange: false,
  };

  const IterateShipContainers = (Containers, BlockUniverse) => {
    for (let index = 0; index < Containers.length; index++) {
      const container = Containers[index];
      IterateShips(container, BlockUniverse, index);
    }
  };

  const IterateShips = (Ships, BlockUniverse, SuperName) => {
    for (let index = 0; index < Ships.length; index++) {
      const Ship = Ships[index];
      setShipProperties(Ship, BlockUniverse, SuperName, index);
    }
  };

  const setShipProperties = (shipBlocks, BlockUniverse, SuperName, SubName) => {
    for (let index = 0; index < shipBlocks.length; index++) {
      const blockIndex = shipBlocks[index];
      BlockUniverse[blockIndex].isShip = true;
      BlockUniverse[blockIndex].isActiveShip = true;
      BlockUniverse[
        blockIndex
      ].shipKey = `${SuperName.toString()}S00${SubName.toString()}`;
    }
  };

  const GetShipByTailSize = (initialBlocks, tailSize) => {
    var result = [];
    var shipSearchingDefaultResult = false;

    while (!shipSearchingDefaultResult) {
      var spaceStartIndex = Math.floor(Math.random() * 100);
      var ShipApplicant = range(spaceStartIndex, spaceStartIndex + tailSize);
      var validationDefaultResult = true;
      var shipSize = ShipApplicant.length;
      var validationStep = 0;

      while (validationDefaultResult && shipSize > validationStep) {
        //check if the array item is between in [0,1,2,3...,99]
        if (
          !initialBlocks.some(
            (block) => block === ShipApplicant[validationStep]
          )
        ) {
          validationDefaultResult = false;
        }

        var currentStepValue = ShipApplicant[validationStep];

        if (tailSize > 0) {
          //check if the middle array item is in [10,20,30,40,50,90] and [9,19,29,39,49,59,69,79,89,99]
          if (tailSize > 1) {
            if (0 < validationStep && validationStep < shipSize) {
              if (currentStepValue % 10 === 0 || currentStepValue % 10 === 9) {
                validationDefaultResult = false;
              }
            }
          } else {
            if (validationStep == 0 && currentStepValue % 10 === 9) {
              validationDefaultResult = false;
            }
          }
        }

        validationStep++;
      }

      if (validationDefaultResult) {
        result.push(...ShipApplicant);
        shipSearchingDefaultResult = true;
      }
    }
    return result;
  };

  const generateGroupOfShips = (count, baseNumbers, size) => {
    let step = 0;
    let groupResult = [];
    let currentBaseNumbers = Array.from(baseNumbers);
    while (step < count) {
      groupResult.push(GetShipByTailSize(currentBaseNumbers, size));
      currentBaseNumbers = Array.from(
        diffBetweenArray(currentBaseNumbers, groupResult[step])
      );
      step++;
    }
    return { groupResult, currentBaseNumbers };
  };

  const generateShipContainers = (BlockUniverse) => {
    let groupResult = [];
    let shipSize = 3;
    let result = {
      groupResult: [],
      currentBaseNumbers: Array.from(BlockUniverse),
    };

    for (let shipAmount = 1; shipAmount <= 4; shipAmount++) {
      result = Object.create(
        generateGroupOfShips(shipAmount, result.currentBaseNumbers, shipSize)
      );
      groupResult.push(Array.from(result.groupResult));
      shipSize--;
    }
    return groupResult;
  };

  const addNewGame = (currentAttempts) => {
    let globalGames = [...globalState.games];
    const currentId = globalGames.length + 1;
    setGameId(currentId);
    const currentGame = {
      id: currentId,
      attemps: attempts,
      restOfAttemps: currentAttempts,
      thereIsActiveShipBlocks: true,
    };
    globalGames.push(currentGame);
    loadGames([...globalGames]);
  };

  const load = () => {
    setThereIsActiveShipBlocks(true);
    if (parseInt(attempts) === 0) {
      setIsInfinitive(true);
    } else {
      setIsInfinitive(false);
      setCurrentAttempts(attempts);
    }
    setDisplayShips(showShips > 0);
    addNewGame(parseInt(attempts));

    //this array begins in [0,1,2,3,4,5...,98,99]
    const groupResult = generateShipContainers(Array.from(Array(100).keys()));

    //this array begins in [0,1,2,3,4,5...,98,99]
    var initialOceanBlocks = Array.from(Array(100).keys()).map((number) => {
      let block = new OceanBlock();

      const getRowNameOrderNumber = (base, letterBase, number, block) => {
        const init = base * 10;
        if (init <= number && number <= init + 9) {
          block.rowName = letterBase;
          block.columNumber = number + 1 - base * 10;
        }
        block.index = number;
      };

      abcArray.forEach((letter, letterIndex) => {
        getRowNameOrderNumber(letterIndex, letter, number, block);
      });

      return block;
    });

    IterateShipContainers(groupResult, initialOceanBlocks);

    setOceanBlocks(initialOceanBlocks);
  };

  useEffect(() => {
    load();
  }, []);

  const findDestroyShip = (blockUniverse, currentBlock) => {
    for (let index = 0; index < blockUniverse.length; index++) {
      const block = blockUniverse[index];
      if (block.shipKey === currentBlock.shipKey) {
        block.isAttacked = true;
        block.isActiveShip = false;
      }
    }
  };

  const updateCurrentGame = (currentAttempts, thereIsActiveShipBlocks) => {
    let globalGames = [...globalState.games];
    let currentGame = globalGames[gameId - 1];
    currentGame.restOfAttemps = currentAttempts;
    currentGame.thereIsActiveShipBlocks = thereIsActiveShipBlocks;
    loadGames([...globalGames]);
  };

  const fire = (index) => {
    if (!isInfinitive && currentAttempts === 0) {
      const loseMessage =
        "You do not have more shots!!. Would you like to restart the game?";
      alertService.error(loseMessage, alertOptions);
      setModalBody(loseMessage);
      handleShowModal();
      return false;
    }

    let newOceanBlocks = Array.from(oceanBlocks);
    let currentBlock = newOceanBlocks[index];
    let stepAttempts = currentAttempts;

    if (!currentBlock.isAttacked) {
      if (currentBlock.isShip) {
        findDestroyShip(newOceanBlocks, currentBlock);
        alertService.info("ship destroyed!!", alertOptions);
      } else {
        currentBlock.isAttacked = true;
        alertService.warn("you failed the shot!!", alertOptions);
      }
      if (!isInfinitive) {
        stepAttempts = currentAttempts - 1;
        setCurrentAttempts(stepAttempts);
      }
    } else {
      alertService.warn("This area was atacked!!", alertOptions);
    }

    const currentThereIsActiveShips = newOceanBlocks.some(
      (block) => block.isActiveShip
    );
    setThereIsActiveShipBlocks(currentThereIsActiveShips);

    if (!currentThereIsActiveShips) {
      const winMessage =
        "you won the game!!. Would you like to restart the game?";
      alertService.success(winMessage, alertOptions);
      setModalBody(winMessage);
      handleShowModal();
    }

    setOceanBlocks(newOceanBlocks);

    updateCurrentGame(stepAttempts, currentThereIsActiveShips);
  };

  const restartGame = () => {
    load();
  };

  const handleClose = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const handleAcceptModal = () => {
    setShowModal(false);
    restartGame();
  };

  return (
    <>
      <Row>
        <ShipConfirmation
          show={showModal}
          body={modalBody}
          title="Finished Game"
          onCancel={handleClose}
          onAccept={handleAcceptModal}
        />
      </Row>
      <Row className="GameContainer mt-4">
        <Col>
          <ActionSection restartGame={restartGame} />
          <NotificationSection
            isInfinitive={isInfinitive}
            thereIsActiveShipBlocks={thereIsActiveShipBlocks}
            currentAttempts={currentAttempts}
          />
          <Card style={{ padding: "1rem" }}>
            <div className="ocean-container">
              {oceanBlocks.map((block) => (
                <OceonShipBlock
                  key={block.index}
                  {...block}
                  fire={fire}
                  displayShips={displayShips}
                  display={block.Display()}
                />
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default GameContainer;
