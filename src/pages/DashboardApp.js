import React, {useState,useEffect} from "react"

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import clientAxios from "../config/axios";
// components
import Page from '../components/Page';
import Navbar from "../components/Navegation"

// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppWebsiteVisits,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------



export default function DashboardApp() {

  const TimeFetch = 500

  const [chips,guardarChips] = useState(0)
  const [pasaportes,guardarPasaportes] = useState(0)
  const [vacunas,guardarVacunas] = useState(0)
  const [users,guardarUsers] = useState(0)

  useEffect(()=>getChips(),[chips])
  useEffect(()=>getPasaportes(),[pasaportes])
  useEffect(()=>getVacunas(),[vacunas])
  useEffect(()=>getUsers(),[users])

// Fetch Data Api Node js --> Pooling
  const getChips =async () => {
    setTimeout(async()=> {
      const consultaChips = await clientAxios.get("/animales/chips") 
      guardarChips(consultaChips)
    },TimeFetch)
  }

  const getPasaportes =async () => {
    setTimeout(async()=> {
      const consultaPasaportes = await clientAxios.get("/animales/pasaportes") 
      guardarPasaportes(consultaPasaportes)
    },TimeFetch)
  }

  const getVacunas =async () => {
    setTimeout(async()=> {
      const consultaVacunas = await clientAxios.get("/animales/vacunas") 
      guardarVacunas(consultaVacunas)
    },TimeFetch)
  }

  const getUsers =async () => {
    setTimeout(async()=> {
      const consultaUsers = await clientAxios.get("/usuarios/cantidad") 
      guardarUsers(consultaUsers)
    },TimeFetch)
  }

  
  const theme = useTheme();

  // -------->HTML
  return (
    <Page title="Rivia">
      <Navbar/>
      <Container maxWidth="xl">
        {/* Welcome */}
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hola, Bienvenido al Panel de Rivia.
        </Typography>

        <Grid container spacing={3}>

          {/* Cards */}
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Chips | Inventario" total={chips.data} icon={'gg:smartphone-chip'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Pasaportes | Documentos" total={pasaportes.data} color="info" icon={'fontisto:passport-alt'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Sellos | Vacunación" total={vacunas.data} color="warning" icon={'bi:credit-card-2-front-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Usuarios" total={users.data} color="error" icon={'fa-regular:user'} />
          </Grid>
          {/* Fin Cards */}

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Solicitudes"
              subheader="Último mes"
              chartLabels={[
                '02/01/2022',
                '01/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'Aceptadas',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Suspendidas',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Rechazadas',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Estado Actual"
              chartData={[
                { label: 'Valencia', value: 4344 },
                { label: 'Castellón', value: 5435 },
                { label: 'Alicante', value: 1443 },
                
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.yellow[0],
               
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="Últimas Noticias"
              list={[...Array(4)].map((_, index) => ({
                id: "1",
                title: "faker.name.jobTitle()",
                description: "faker.name.jobTitle()",
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: `2022-04-01T00:00:00.000Z`,
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Actividad Reciente"
              list={[...Array(5)].map((_, index) => ({
                id: "1",
                title: "faker.company.catchPhrase()",
                type: `order${index + 1}`,
                time: `2022-04-01T00:00:00.000Z`,
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tareas"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
              
            />
          </Grid>
          
        </Grid>
      </Container>
    </Page>
  );
}
