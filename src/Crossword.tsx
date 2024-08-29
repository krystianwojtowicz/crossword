import { useEffect, useState } from "react";
import React from "react";

export interface FormValues {
  title?: string;
  timeAllowed: number;
  skill: string;
  image: string;
  content: { [key: string]: any }[];
  owner: string;
  subject: string;
  passmark: number;
  notes: string;
}

interface IData {
  c_icon: string;
  c_levelid: string;
  c_title: string;
  c_intro: string;
  c_height: string;
  c_width: string;
  c_showwords: "0" | "1";
  c_lengths: "0" | "1";
  c_author_id: string;
  c_created: string;
  c_ownerid: string;
}

interface IWord {
  groupid: string;
  word: string;
  question: string;
  full_word: string;
}

interface IItem {
  name: string;
  data: IData;
  id: string;
  words: IWord[];
}

interface ICrossword {
  edit: boolean;
  item: IItem;
}

interface IWordData {
  word: string;
  row: number;
  col: number;
  direction: "across" | "down";
}
export default function Crossword({ edit, item }: ICrossword) {
  const [wordsData, setWordsData] = useState<IWordData[]>([]);
  const [crossword, setCrossword] = useState<any>([]);

  const [date, setDate] = useState(0);
  const wordsDataForState: IWordData[] = [];

  const BOARD_SIZE: number = 19;

  type Direction = "across" | "down";

  function generateCrossword(words: string[]): string[][] {
    const board: string[][] = createEmptyBoard(BOARD_SIZE);
    const wordsDataForState: {
      word: string;
      row: number;
      col: number;
      direction: Direction;
    }[] = [];

    // Sort words by length, descending
    words.sort((a, b) => b.length - a.length);

    function placeWordWithIntersection(
      word: string,
      board: string[][]
    ): boolean {
      let placed = false;
      let attempts = 0;
      const maxAttempts = 100;

      while (attempts < maxAttempts) {
        attempts++;
        const intersection = findIntersection(board, word);
        if (intersection) {
          const { row, col, direction } = intersection;
          if (canPlaceWord(board, word, row, col, direction)) {
            wordsDataForState.push({ word, row, col, direction });
            placeWord(board, word, row, col, direction);
            placed = true;
            break; // Word is placed, exit the loop
          }
        } else {
          break; // No intersection found, exit the loop
        }
      }

      return placed;
    }

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      if (i === 0) {
        // Place the first word randomly
        let row = Math.floor(Math.random() * (BOARD_SIZE - word.length));
        let col = Math.floor(Math.random() * (BOARD_SIZE - word.length));
        const direction: Direction = Math.random() > 0.5 ? "across" : "down";

        if (canPlaceWord(board, word, row, col, direction)) {
          wordsDataForState.push({ word, row, col, direction });
          placeWord(board, word, row, col, direction);
        }
      } else {
        // Place remaining words, ensuring they intersect with existing words
        const placed = placeWordWithIntersection(word, board);
        if (!placed) {
          // if (
          //     words.findIndex((el) => el == word) ==
          //     words.length - 2
          // ) {
          //     console.log(2);
          // }
          // Move the word to the end of the array
          words.push(words.splice(i, 1)[0]);
          // Decrement `i` to check the next word again in the same position
          i--;
        }
      }
    }

    setWordsData(wordsDataForState);
    return board;
  }

  function createEmptyBoard(size: number): string[][] {
    return Array.from({ length: size }, () => Array(size).fill(""));
  }

  function canPlaceWord(
    board: string[][],
    word: string,
    row: number,
    col: number,
    direction: "across" | "down"
  ): boolean {
    if (direction === "across") {
      // Sprawdzenie, czy słowo zmieści się w wierszu
      if (col + word.length > BOARD_SIZE) return false;

      for (let i = 0; i < word.length; i++) {
        if (
          col + i >= BOARD_SIZE ||
          (board[row][col + i] !== "" && board[row][col + i] !== word[i])
        ) {
          return false;
        }
      }

      // Sprawdzenie, czy przed lub za słowem poziomym nie ma innych liter
      // if (
      //     (col - 1 > 0 && board[row][col - 1] !== '') || // przed słowem
      //     (col + word.length < BOARD_SIZE &&
      //         board[row][col + word.length] !== '') // za słowem
      // ) {
      //     // if (words.findIndex((el) => el == word) == words.length - 2) {
      //     //     console.log(2);
      //     // }
      //     return false;
      // }
    } else if (direction === "down") {
      // Sprawdzenie, czy słowo zmieści się w kolumnie
      if (row + word.length > BOARD_SIZE) return false;

      for (let i = 0; i < word.length; i++) {
        if (
          row + i >= BOARD_SIZE ||
          row < 0 ||
          (board[row + i][col] !== "" && board[row + i][col] !== word[i])
        ) {
          return false;
        }
      }

      // Sprawdzenie, czy nad lub pod pionowym słowem nie ma innych liter
      if (
        (row - 1 > 0 && board[row - 1][col] !== "") || // nad słowem
        (row + word.length < BOARD_SIZE && board[row + word.length][col] !== "") // pod słowem
      ) {
        return false;
      }
    }

    return true;
  }

  function placeWord(
    board: string[][],
    word: string,
    row: number,
    col: number,
    direction: Direction
  ): void {
    if (direction === "across") {
      for (let i = 0; i < word.length; i++) {
        board[row][col + i] = word[i];
      }
    } else if (direction === "down") {
      for (let i = 0; i < word.length; i++) {
        board[row + i][col] = word[i];
      }
    }
  }

  function findIntersection(
    board: string[][],
    word: string
  ): { row: number; col: number; direction: Direction } | null {
    for (let r = 0; r < BOARD_SIZE; r++) {
      for (let c = 0; c < BOARD_SIZE; c++) {
        const currentLetter = board[r][c];
        if (currentLetter && word.includes(currentLetter)) {
          const wordIndex = word.indexOf(currentLetter);

          // Try placing word horizontally
          const acrossRow = r;
          const acrossCol = c - wordIndex;
          if (canPlaceWord(board, word, acrossRow, acrossCol, "across")) {
            return {
              row: acrossRow,
              col: acrossCol,
              direction: "across",
            };
          }

          // Try placing word vertically
          const downRow = r - wordIndex;
          const downCol = c;
          if (canPlaceWord(board, word, downRow, downCol, "down")) {
            return {
              row: downRow,
              col: downCol,
              direction: "down",
            };
          }
        }
      }
    }
    return null;
  }

  const words: string[] = item.words.map((el) => el.word);

  useEffect(() => {
    const generateAndCheckCrossword = () => {
      const startTime = Date.now();
      const maxTime = 30; // Maksymalny czas w milisekundach

      const tryGenerate = () => {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime > maxTime) {
          console.log("Max time reached. Re-generating crossword.");
          generateAndCheckCrossword(); // Ponowne generowanie
          return;
        }

        const crosswordBoard = generateCrossword(words);

        if (crosswordBoard && crosswordBoard.length > 0) {
          console.log("Generated crossword:", crosswordBoard);
          setCrossword(crosswordBoard);
          return;
        }

        // Jeśli krzyżówka nie została wygenerowana, próbuj ponownie po 10 ms
        setTimeout(tryGenerate, 10);
      };

      tryGenerate(); // Rozpocznij generowanie
    };

    generateAndCheckCrossword(); // Pierwsze wywołanie funkcji generującej
  }, []);

  // useEffect(() => {
  //     setDate(new Date().getTime());
  //     const crosswordBoard: string[][] = generateCrossword(words);

  //     setCrossword(crosswordBoard);
  //     console.log(crosswordBoard);
  // }, []);
  return (
    <div className="w-full">
      {!edit && (
        <>
          {crossword.length > 0 && (
            <div className="min-[993px]:flex">
              <table className="border-[6px] border-[#808080] min-[993px]:w-[60%]">
                <tbody>
                  {Array.from({ length: BOARD_SIZE }).map((_, i) => (
                    <tr key={i}>
                      {Array.from({
                        length: BOARD_SIZE,
                      }).map((_, index) => (
                        <td
                          key={index}
                          className={`${
                            crossword[i][index] == "" ? "bg-[#333]" : "bg-white"
                          } m-0 h-[38px] w-[5em] border-[1px] border-[#cdcdcd] p-0`}
                        >
                          {crossword[i][index]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
