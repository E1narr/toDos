// src/components/quizComponents/ResultsTable.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Result {
  username: string;
  score: number;
}

export const ResultsTable: React.FC = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("results") || "[]");
    setResults(savedResults);
  }, []);

  return (
    <Box sx={{ marginTop: "20px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Имя пользователя</TableCell>
              <TableCell>Очки</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index}>
                <TableCell>{result.username}</TableCell>
                <TableCell>{result.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
