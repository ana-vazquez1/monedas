'use client'

import styles from './page.module.css'
import { useState, useEffect } from 'react'
import { Box, TextField, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const historicalRates = [
  { year: 1992, rate: 15.23 },
  { year: 1995, rate: 16.12 },

]

export default function Home() {
  const [fromCurrency, setFromCurrency] = useState('AED');
  const [toCurrency, setToCurrency] = useState('INR');
  const [setAmount] = useState(1);

  const chartData = {
    labels: historicalRates.map((rate) => rate.year),
    datasets: [
      {
        label: 'Exchange Rate',
        data: historicalRates.map((rate) => rate.rate),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };


  return (
    <div class="contenedor">
      <div class="rectangulo">
        <main className={styles.main}>
          <h1 className={styles.title}>CONVERSOR DE DIVISAS</h1>


          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, marginLeft: '30px' }}>
            <TextField
              label="Moneda"
              type="tex"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              sx={{ mr: 2 }}
            />
            <TextField
              label="Resultado"
              type="tex"
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              sx={{ mr: 2 }}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="from-currency-label"></InputLabel>
              <Select
                labelId="from-currency-label"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
              >
                <MenuItem value="AED">AED</MenuItem>
              </Select>
            </FormControl>
            <ArrowForwardIcon />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="to-currency-label"></InputLabel>
              <Select
                labelId="to-currency-label"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <MenuItem value="INR">INR</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button sx={{ width: '450px', backgroundColor: '#401F71', marginLeft: '30px' }} variant="contained" disableElevation>
            Result
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ width: '80%', maxWidth: 600 }}>
              <Line data={chartData} />
            </Box>
          </Box>
        </main>
      </div >
    </div >
  )
}
