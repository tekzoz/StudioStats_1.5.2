import axios from 'axios';
import { subMonths, isAfter } from 'date-fns';

// Struttura per i dati provenienti dal report Excel
export const foniciData = [
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-03",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-03",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-05",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-08",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-09",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-09",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-09",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-10",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-11",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-11",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-11",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-11",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-12",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-12",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-12",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-15",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-15",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-15",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-15",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-16",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-16",
    turno: "12:30-13:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-16",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-17",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-17",
    turno: "12:30-13:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-01-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-18",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-19",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-19",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-19",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-19",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-19",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-19",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-01-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-22",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-22",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-22",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-22",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-22",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-22",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-22",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-22",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-23",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-01-23",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-23",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-23",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-23",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-23",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-23",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-24",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-24",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-24",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-24",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-24",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-25",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-25",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-25",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-25",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-25",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-01-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-26",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-26",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-01-26",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-26",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-29",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-29",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-29",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-29",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-30",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-30",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-01-30",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-30",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-01-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-31",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-31",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-01-31",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-31",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-31",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-01-31",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
{
      nome: "DARIO PALERMI",
      data: "2024-01-31",
      turno: "13:30-16:30",
      sala: "2 STEFANO",},
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-01",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-01",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-01",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-01",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-01",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-01",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-01",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-01",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-02",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-02",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-02",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-02",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-02",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-05",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-05",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-05",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-05",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-06",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-06",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-06",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-06",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-06",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-06",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-06",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-06",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-06",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-06",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-07",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-07",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-07",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-07",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-07",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-08",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-08",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-08",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-09",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-09",
    turno: "12:30-13:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-09",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-09",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-02-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-12",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-12",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-12",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-12",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-13",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-13",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-13",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-13",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-13",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-14",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-14",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-14",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-14",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-14",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-14",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-15",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-15",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-15",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-15",
    turno: "12:30-13:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-15",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-15",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-16",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-16",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-16",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-19",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-19",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-19",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-19",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-19",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-19",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-19",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-19",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-20",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-20",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-20",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-20",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-20",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-20",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-20",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-20",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-21",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-21",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-21",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-21",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-21",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-21",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-22",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-22",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-22",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-22",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-22",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-23",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-23",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-23",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-23",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-23",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-02-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-26",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-26",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-26",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-27",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-27",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-27",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-27",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-27",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-27",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-28",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-28",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-28",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-28",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-28",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-28",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-28",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-02-29",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-29",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-02-29",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-02-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-29",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-29",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-02-29",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-01",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-01",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-01",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-01",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-01",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-01",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-01",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MARCO AUGUSTO COMBA",
    data: "2024-03-01",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-01",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-01",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-01",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-01",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-01",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-02",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-02",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-04",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-04",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-05",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-05",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-05",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-05",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-06",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-06",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-06",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-06",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-06",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-06",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-06",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-06",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-07",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-07",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-07",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-08",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-08",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-08",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-11",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-11",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-12",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-12",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-12",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-13",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-13",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-14",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-14",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-14",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-03-14",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-15",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-15",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-18",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-18",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-19",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-19",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-20",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-20",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-20",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-20",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-20",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-20",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-20",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-21",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-21",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-21",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-21",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-21",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-21",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-21",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-22",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-22",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-22",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-22",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-22",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-03-22",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-23",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO ACHILLE SCHIAVIO",
    data: "2024-03-23",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-25",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-25",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-25",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-25",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-26",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-26",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-26",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-03-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-26",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-26",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-26",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-27",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-27",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-27",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-27",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-27",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-03-27",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-28",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-03-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-28",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-28",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-28",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-03-29",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-29",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-03-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-03-29",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-02",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-02",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-02",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-02",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-03",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-03",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-03",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-03",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-04",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-04",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-04",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-05",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-05",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-05",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-05",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-05",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-05",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MATTEO ACHILLE SCHIAVIO",
    data: "2024-04-06",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-06",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-08",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-08",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-08",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-08",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-09",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-09",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-09",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-10",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-10",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-11",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-11",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-12",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-12",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-13",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-13",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-15",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-16",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-17",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-17",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-17",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-18",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-18",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-18",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-19",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-19",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-19",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-19",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-20",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-22",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-22",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-22",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-23",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-23",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-23",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-24",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-24",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-26",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-26",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-26",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-26",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-26",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-26",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-26",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-04-26",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-27",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-04-27",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-29",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-29",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-29",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-29",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-29",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-29",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-29",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-29",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-30",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-30",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-04-30",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-30",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-04-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-30",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-04-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-30",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-30",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-04-30",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-04-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-02",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-02",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-02",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-02",
    turno: "12:30-13:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-02",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-02",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-02",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-02",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-02",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-02",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-03",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-03",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-03",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-06",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-06",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-06",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-06",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-06",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-06",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-06",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-06",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-06",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-06",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-06",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-08",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-09",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-09",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-09",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-09",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-10",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-11",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-13",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-13",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-13",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-13",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-13",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-13",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-15",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-15",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-15",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-15",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-20",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-20",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-20",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-20",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-20",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-20",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-21",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-21",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-21",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-21",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-21",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-21",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-21",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-22",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-22",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-22",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-23",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-23",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-23",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-23",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-24",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-24",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-24",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-24",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-27",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-27",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-27",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-27",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-27",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-28",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-28",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-29",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-29",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-29",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-29",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-29",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-29",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-29",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-29",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-29",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-29",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-29",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-30",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-31",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-31",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-05-31",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-01",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-01",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-03",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-03",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-03",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-03",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-03",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-04",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-04",
    turno: "19:30-22:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-04",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-04",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-04",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-05",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-05",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-05",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-06",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-06",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-06",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MANUELE ROMA",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-07",
    turno: "12:30-13:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-07",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-07",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-07",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-07",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-08",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-10",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-10",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-11",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-11",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-12",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-12",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-12",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-12",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-12",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-13",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-13",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-13",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-13",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-13",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-13",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-14",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-14",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-14",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-15",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-17",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-17",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-17",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-17",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-18",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-18",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-19",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-19",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-19",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-19",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-19",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-19",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-19",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-19",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-20",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-20",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-20",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-20",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-20",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-20",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-20",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-20",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-21",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-21",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-21",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-21",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-21",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-21",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-21",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-24",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-24",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-25",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-25",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-25",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-25",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-25",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-25",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-26",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-26",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-26",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-27",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-06-27",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-27",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-27",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-28",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-06-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-28",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-06-28",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-28",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-28",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-06-28",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-01",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "PHILIPPE MORVILLE",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-01",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-01",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-01",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-01",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-01",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-01",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-01",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-01",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-01",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-01",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-02",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-02",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-02",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-02",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-02",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-02",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-02",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-03",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-04",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-04",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-04",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-04",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-04",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-05",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-05",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-05",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-05",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-08",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-09",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-09",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-10",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-11",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-11",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-11",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-11",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-11",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-11",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-11",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "DARIO PALERMI",
    data: "2024-07-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-11",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-12",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-12",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-12",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-15",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-15",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-15",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-15",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-15",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-15",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-16",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-16",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-16",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-16",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-16",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-17",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-17",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-17",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-17",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-17",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-17",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-07-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-18",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-18",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-19",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-19",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-19",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-22",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-22",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-22",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-22",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-22",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-22",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-07-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-23",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-23",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-24",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-25",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-25",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-25",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-25",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-25",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-25",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-25",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-26",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-26",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-26",
    turno: "12:30-13:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-26",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-26",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-26",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-26",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-26",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-26",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-26",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-26",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-29",
    turno: "19:30-22:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-29",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-29",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-29",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-30",
    turno: "12:30-13:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-30",
    turno: "19:30-22:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-30",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-30",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-07-30",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-31",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-31",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-31",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-31",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-31",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-07-31",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-07-31",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "PHILIPPE MORVILLE",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-01",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-01",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-01",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-01",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-01",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-01",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-01",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-01",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-02",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-02",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-02",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "PHILIPPE MORVILLE",
    data: "2024-08-02",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-02",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-02",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-08-02",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-08-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-05",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-05",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-05",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-05",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-05",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-06",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-06",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-07",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-07",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-08",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-09",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-26",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-26",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-27",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-27",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-27",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-28",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-28",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-28",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-28",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-08-29",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-29",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-08-29",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-29",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-29",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-29",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-08-30",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-08-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-02",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-02",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-02",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-02",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-02",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-02",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-02",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-02",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-02",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-03",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-03",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-03",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-03",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-03",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-04",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-04",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-04",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-04",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-05",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-05",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-05",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-05",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-06",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-06",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-09",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-09",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-09",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-09",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-09",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-10",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-11",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-11",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-13",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-13",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-16",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-17",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-17",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-17",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-18",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-18",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-18",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-19",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-19",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-19",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-09-19",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-19",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-19",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-19",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-20",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-20",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-20",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-20",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-20",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-23",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-23",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-23",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-23",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-24",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-24",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-24",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-24",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-24",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-24",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-25",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-25",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-25",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-25",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-25",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-25",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-25",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-26",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-26",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-26",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-26",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-26",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-26",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-27",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-27",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-27",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-09-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-27",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-09-30",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-09-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-09-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-30",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-09-30",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-30",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-09-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-01",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-01",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-01",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-01",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-01",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-01",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-02",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-02",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-02",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-02",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-02",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-02",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-02",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-03",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-03",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-03",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-04",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-04",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-04",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-04",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-07",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-07",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-07",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-07",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-07",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-07",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-07",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-08",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-08",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-08",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-08",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-08",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-08",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-09",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-09",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-09",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-09",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-09",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-10",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-10",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-11",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-11",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-11",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-14",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-14",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-14",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-14",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-14",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-15",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-15",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-15",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MANUELE ROMA",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "PAOLO SIMONETTI",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-17",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-21",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-21",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-21",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-22",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-22",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-22",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-22",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-22",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MANUELE ROMA",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-23",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-23",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-24",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MANUELE ROMA",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-24",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-25",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-25",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-25",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-25",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-26",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-26",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-28",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-28",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-29",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-29",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-29",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-29",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-29",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-29",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-30",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-30",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-10-30",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-30",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-30",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-30",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-10-31",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO DE SANTIS",
    data: "2024-10-31",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-31",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-10-31",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-10-31",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-10-31",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-04",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-04",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-05",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-05",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-05",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-05",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-05",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-05",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-05",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-05",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-05",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-05",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-06",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-06",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-06",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-06",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-06",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-06",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-06",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-06",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-06",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-06",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-06",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LITTERIO MAGGIORE",
    data: "2024-11-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-07",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-07",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-07",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-07",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-11-07",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-07",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-08",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-08",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-08",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-11",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-11",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-12",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-12",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-12",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-12",
    turno: "19:30-22:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-13",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-13",
    turno: "12:30-13:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-13",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-14",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-14",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-14",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-14",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-14",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-15",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-15",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-15",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-16",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-16",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-18",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-18",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-19",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-19",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-19",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-19",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-20",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-20",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-20",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-20",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-20",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-20",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-21",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-21",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-21",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-21",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-25",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-25",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-25",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-25",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-25",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-26",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-26",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-26",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-26",
    turno: "12:30-13:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-26",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-11-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-11-26",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-27",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-27",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-27",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-27",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-28",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-28",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-28",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-28",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-11-28",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-28",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-11-28",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-11-29",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-11-29",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-29",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-29",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-11-29",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-11-29",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-02",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-02",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-02",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-02",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-02",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-02",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-02",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-02",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-02",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-02",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-02",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-03",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-03",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-03",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-03",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-03",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-03",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-03",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-03",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-03",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-03",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-04",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-04",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-04",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-04",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-04",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-04",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-04",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-04",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-04",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-05",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-05",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-05",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-05",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-06",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-06",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-06",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-06",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-06",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-06",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-06",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-09",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-09",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-09",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-09",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-11",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-12",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-13",
    turno: "19:30-22:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-13",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-13",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-13",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-13",
    turno: "19:30-22:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-17",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-18",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-18",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-19",
    turno: "19:30-22:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-19",
    turno: "19:30-22:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-19",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2024-12-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-20",
    turno: "19:30-22:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-20",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2024-12-20",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-21",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-21",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-23",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-23",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-23",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-24",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-24",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-27",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-27",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2024-12-27",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-27",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-27",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-30",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-30",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2024-12-30",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-30",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-30",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "CLAUDIO CANNIZZARO",
    data: "2024-12-30",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2024-12-30",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-30",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2024-12-30",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2024-12-30",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-02",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-02",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-02",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-02",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-02",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-02",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-02",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-02",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-03",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-03",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-03",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-03",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-03",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-03",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-03",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-03",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-07",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-07",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-07",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-07",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-07",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-07",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-07",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-07",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-08",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-08",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-08",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-09",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-09",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-09",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-10",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-10",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-13",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-14",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-14",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-14",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-14",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-14",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-14",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-14",
    turno: "12:30-13:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-15",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-15",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-15",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-15",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-15",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-16",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-16",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-16",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-16",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-16",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-16",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-16",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-17",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-17",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-20",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-20",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-20",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-20",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-20",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-21",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-21",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-21",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-21",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-21",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-21",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-21",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-21",
    turno: "12:30-13:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-22",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-22",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-22",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-01-23",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-23",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-23",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-23",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-23",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-23",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-23",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-23",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-23",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-24",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-24",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-24",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-24",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-01-24",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-24",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-27",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-27",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-27",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-27",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-27",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-27",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-28",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-28",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-28",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-28",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-29",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-29",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-29",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-29",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-29",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-29",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-29",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-29",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-29",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-01-29",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-30",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-30",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-30",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-01-30",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-01-30",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-30",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-30",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-30",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-30",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-30",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-30",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-30",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-01-30",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-01-30",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-31",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-01-31",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-01-31",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-31",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-31",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-01-31",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-01-31",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-01-31",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-03",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-03",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-03",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-03",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-03",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-03",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-03",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-03",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-03",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-03",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-03",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-03",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-03",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-04",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-04",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-04",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-04",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-04",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-04",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-04",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-04",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-04",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-04",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-04",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-04",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-04",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-04",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-05",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-05",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-05",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-05",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-05",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-05",
    turno: "12:30-13:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-05",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-05",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-06",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-06",
    turno: "9:30-12:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-06",
    turno: "12:30-13:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-06",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-07",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ALESSANDRO MURGIA",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-07",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-07",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-07",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-07",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-07",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-07",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-10",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-10",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-10",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-10",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-10",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-10",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-10",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-11",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-11",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-11",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-11",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-11",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-11",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-11",
    turno: "19:30-22:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-12",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-12",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-12",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-12",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-12",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-12",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-12",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-12",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-12",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-12",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-12",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-13",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-13",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-13",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-14",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-14",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-14",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-14",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-14",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-14",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-14",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-14",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-14",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-14",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-14",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-17",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-17",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-17",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-17",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-17",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-17",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-17",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-17",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-17",
    turno: "12:30-13:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-17",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-17",
    turno: "19:30-22:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-17",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-18",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-18",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-18",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-18",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-18",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-18",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-18",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-18",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-18",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-18",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-18",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-18",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-19",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-19",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-19",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-19",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-19",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-19",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-19",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-19",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-19",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-19",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-19",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-19",
    turno: "12:30-13:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-20",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-20",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-20",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-20",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-20",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-20",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-20",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-20",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-20",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-20",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-20",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-20",
    turno: "16:30-19:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-21",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-21",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-21",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-21",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-21",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-02-21",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-21",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-21",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-24",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-24",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-24",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-24",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-24",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-24",
    turno: "16:30-19:30",
    sala: "3 SIMONA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-25",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-25",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-25",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-25",
    turno: "16:30-19:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-25",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-25",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-25",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-25",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-25",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-25",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-25",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-25",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-25",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-25",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-25",
    turno: "12:30-13:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-26",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-26",
    turno: "13:30-16:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-26",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-26",
    turno: "13:30-16:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-26",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-26",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-26",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-26",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-26",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-27",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "MASSIMO LOMBARDO",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-27",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-27",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-27",
    turno: "13:30-16:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-27",
    turno: "13:30-16:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "5 GIUPPY",
    turni: 1
  },
  {
    nome: "SANTIS MASSIMO DE",
    data: "2025-02-27",
    turno: "16:30-19:30",
    sala: "7 ROSSELLA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-27",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-27",
    turno: "12:30-13:30",
    sala: "10 GIULIA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-02-28",
    turno: "13:30-16:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "TOMMASO DACCO",
    data: "2025-02-28",
    turno: "16:30-19:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "ANTONIO GIORGIUCCI",
    data: "2025-02-28",
    turno: "13:30-16:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-28",
    turno: "13:30-16:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "VALENTINA CAPECCI",
    data: "2025-02-28",
    turno: "16:30-19:30",
    sala: "9 MYRIAM",
    turni: 1
  },
  {
    nome: "CRISTIANO LELLINI",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "2 STEFANO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "RODOLFO CIUFFO",
    data: "2025-02-28",
    turno: "13:30-16:30",
    sala: "4 FRANCESCO",
    turni: 1
  },
  {
    nome: "MATTEO FLANDINA",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "6 FIAMMA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-28",
    turno: "13:30-16:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANMARIA DINALLO",
    data: "2025-02-28",
    turno: "16:30-19:30",
    sala: "8 ROSSA",
    turni: 1
  },
  {
    nome: "GIANANDREA ROSSI",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "1 LAURA",
    turni: 1
  },
  {
    nome: "FEDERICO MANUTI",
    data: "2025-02-28",
    turno: "9:30-12:30",
    sala: "10 GIULIA",
    turni: 1
  },
    {nome: "RODOLFO CIUFFO", data: "2025-03-03", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-03", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-03", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-03", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-03", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-03", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-03", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-03", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-03", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-03", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-03", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-03", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-03", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-03", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-03", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-03", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-03", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-03", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-03", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-03", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-03", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-03", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-03", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-03", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-03", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-04", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-04", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-04", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-04", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-04", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-04", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-04", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-04", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-04", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-04", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-04", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-04", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-04", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-04", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-04", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-05", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-05", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-05", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-05", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-05", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-05", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-05", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-05", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-05", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-05", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-05", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-05", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-05", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-05", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-05", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-05", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-05", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-05", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-05", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-05", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-06", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-06", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "CRISTIANO LELLINI", data: "2025-03-06", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-06", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-06", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-06", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-06", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-06", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-06", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-06", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-06", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-06", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-06", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-06", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-06", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-06", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-06", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-06", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-06", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-06", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-06", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-06", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-07", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-07", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-07", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-07", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-07", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-07", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-07", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-07", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-07", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-07", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-07", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-07", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-07", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-07", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-07", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-07", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-07", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-07", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-07", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-07", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-07", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-08", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-08", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-08", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-10", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-10", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-10", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-10", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-10", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-10", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-10", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-10", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-10", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-10", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-10", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-10", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-10", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-10", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-10", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-10", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-10", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-10", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-10", turno: "12:30-13:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-10", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-10", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-11", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-11", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-11", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-11", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-11", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-11", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-11", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-11", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-11", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-11", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-11", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-11", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-11", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-11", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-11", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-11", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-11", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-11", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-12", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-12", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-12", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-12", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-12", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-12", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-12", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-12", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-12", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-12", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-12", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-12", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-12", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-12", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-12", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-12", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-12", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-12", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-12", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-12", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-12", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-12", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-12", turno: "19:30-22:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-13", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-13", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-13", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-13", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-13", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-13", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-13", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-13", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-13", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-13", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-13", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-13", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-13", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-13", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-13", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-13", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-13", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-13", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-13", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-14", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-14", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-14", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-14", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-14", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-14", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-14", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-14", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-14", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-14", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-14", turno: "12:30-13:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-14", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-14", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-14", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-14", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-14", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-14", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-14", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-17", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-17", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-17", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-17", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-17", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-17", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-17", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-17", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-17", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-17", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-17", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-17", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-17", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-17", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-17", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-17", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-17", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-17", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-17", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-17", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-17", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-17", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-17", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-17", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-17", turno: "12:30-13:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-17", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-18", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-18", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-18", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-18", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-18", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-18", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-18", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-18", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-18", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-18", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-18", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-18", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-18", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-18", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-18", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-18", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-18", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-18", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-18", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-18", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-18", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-18", turno: "19:30-22:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-19", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-19", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-19", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-19", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-19", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-19", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-19", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-19", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-19", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-19", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-19", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-19", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-19", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-19", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-19", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-19", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-19", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-19", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-19", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-19", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-20", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-20", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-20", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-20", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-20", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-20", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-20", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-20", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-20", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-20", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-20", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-20", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-20", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-20", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-20", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-20", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-20", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-20", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-20", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-20", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-20", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-20", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-20", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-20", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-20", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-20", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-21", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-21", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-21", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-21", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-21", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-21", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-21", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-21", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-21", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-21", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-21", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-21", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-21", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-21", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-21", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-21", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-21", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-21", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-21", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-21", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-21", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-24", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-24", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-24", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-24", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-24", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-24", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-24", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-24", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-24", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-24", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-24", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-24", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-24", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-24", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-24", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-24", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-24", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-24", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-24", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-24", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-24", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-24", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-24", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-24", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-24", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-25", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-25", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-25", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-25", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-25", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-25", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-25", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-25", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-25", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-25", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-25", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-25", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-25", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-25", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-25", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-25", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-25", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-25", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-25", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-25", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-25", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-26", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-26", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-26", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-26", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-26", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-26", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-26", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-26", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-26", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-26", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-26", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-26", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-26", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-26", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-26", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-26", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-26", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-26", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-26", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-26", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-26", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-26", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-26", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-26", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-27", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-27", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-27", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-27", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-27", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-27", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-27", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-27", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-27", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-27", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-27", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-27", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-27", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-27", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-27", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-27", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-27", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-27", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-27", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-27", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-27", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-27", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-27", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-28", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-28", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-28", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-28", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-28", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-28", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-28", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-28", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-28", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-28", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-28", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-28", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-28", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-28", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "ALESSANDRO MURGIA", data: "2025-03-28", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-28", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-28", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-28", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-28", turno: "12:30-13:30", sala: "2 STEFANO", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-28", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
    {nome: "MATTEO FLANDINA", data: "2025-03-31", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-31", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
    {nome: "VALENTINA CAPECCI", data: "2025-03-31", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-31", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
    {nome: "MASSIMO LOMBARDO", data: "2025-03-31", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-31", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "GIANANDREA ROSSI", data: "2025-03-31", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-31", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-31", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "SANTIS MASSIMO DE", data: "2025-03-31", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-31", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-31", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
    {nome: "TOMMASO DACCO", data: "2025-03-31", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-31", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-31", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
    {nome: "ANTONIO GIORGIUCCI", data: "2025-03-31", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-31", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-31", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
    {nome: "GIANMARIA DINALLO", data: "2025-03-31", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
    {nome: "FEDERICO MANUTI", data: "2025-03-31", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
    {nome: "RODOLFO CIUFFO", data: "2025-03-31", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-01", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-01", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-01", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-01", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-01", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-01", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-01", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-01", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-01", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-01", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-01", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-01", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-01", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-01", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-01", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-01", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-01", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-01", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-01", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-01", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-01", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-01", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-02", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-02", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-02", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-02", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-02", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-02", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-02", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-02", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-02", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-02", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-02", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-02", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-02", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-02", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-02", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-02", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-02", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-02", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-02", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-02", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-02", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-02", turno: "19:30-22:30", sala: "6 FIAMMA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-03", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-03", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-03", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-03", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-03", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-03", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-03", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-03", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-03", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-03", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-03", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-03", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-03", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-03", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-03", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-03", turno: "19:30-22:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-03", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-03", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-04", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-04", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-04", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-04", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-04", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-04", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-04", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-04", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-04", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-04", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-04", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-04", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-04", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-04", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-04", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-04", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-04", turno: "19:30-22:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-04", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-04", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-07", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-07", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-07", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-07", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-07", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-07", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-07", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-07", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-07", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-07", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-07", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-07", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-07", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-07", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-07", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-07", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-07", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-07", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-07", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-07", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-07", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-07", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-07", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-07", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-08", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-08", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-08", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-08", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-08", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-08", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-08", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-08", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-08", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-08", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-08", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-08", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-08", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-08", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-08", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-08", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-08", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-09", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-09", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-09", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-09", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-09", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-09", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-09", turno: "12:30-13:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-09", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-09", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-09", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-09", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-09", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-09", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-09", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-09", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-09", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-09", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-09", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-09", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-09", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-10", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-10", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-10", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-10", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-10", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-10", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-10", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-10", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-10", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-10", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-10", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-10", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-10", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-10", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-10", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-10", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-10", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-10", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-10", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-10", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-10", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-10", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-10", turno: "19:30-22:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-11", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-11", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-11", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-11", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-11", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-11", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-11", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-11", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-11", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-11", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-11", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-11", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-11", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-11", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-11", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-11", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-11", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-11", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-14", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-14", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-14", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-14", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-14", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-14", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-14", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-14", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-14", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-14", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-14", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-14", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-14", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-14", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-14", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-14", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-14", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-14", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-14", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-14", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-14", turno: "12:30-13:30", sala: "8 ROSSA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-15", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-15", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-15", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-15", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-15", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-15", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-15", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-15", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-15", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-15", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-15", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-15", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-15", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-15", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-15", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-15", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-15", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-15", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-15", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-15", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-15", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-15", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-16", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-16", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-16", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-16", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-16", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-16", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-16", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "ANTONIO GIORGIUCCI", data: "2025-04-16", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-16", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-16", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-16", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-16", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-16", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-16", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-16", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-16", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-16", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-16", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-17", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-17", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-17", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-17", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-17", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-17", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-17", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-17", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-17", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-17", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-17", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-17", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-17", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-17", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-17", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-17", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "TOMMASO DACCO", data: "2025-04-17", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-17", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-17", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-17", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-18", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-18", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-18", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-18", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-18", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-18", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "ALESSANDRO MURGIA", data: "2025-04-18", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-18", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "CRISTIANO LELLINI", data: "2025-04-18", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-18", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-18", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-18", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-18", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-22", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-22", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-22", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "ALESSANDRO MURGIA", data: "2025-04-22", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "ALESSANDRO MURGIA", data: "2025-04-22", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-22", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-22", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-22", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "ALESSANDRO MURGIA", data: "2025-04-22", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-22", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-22", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-22", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-22", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-22", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-22", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-22", turno: "12:30-13:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-23", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-23", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-23", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-23", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-23", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-23", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-23", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-23", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-23", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-23", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-23", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-23", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-23", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-23", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-23", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-23", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-23", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-23", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-23", turno: "12:30-13:30", sala: "5 GIUPPY", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-24", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-24", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-24", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-24", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-24", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-24", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-24", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-24", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-24", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-24", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-24", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-24", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-24", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "ALESSANDRO MURGIA", data: "2025-04-24", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-24", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-28", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-28", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-28", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-28", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-28", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-28", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-28", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-28", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-28", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-28", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-29", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-29", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-29", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-29", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-29", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-29", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-29", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-29", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-29", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-29", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-29", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-29", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-29", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-29", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-29", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-29", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-29", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-29", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-30", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-30", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "GIANANDREA ROSSI", data: "2025-04-30", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-30", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-30", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-30", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
      {nome: "GIANMARIA DINALLO", data: "2025-04-30", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-30", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
      {nome: "VALENTINA CAPECCI", data: "2025-04-30", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-30", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
      {nome: "SANTIS MASSIMO DE", data: "2025-04-30", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-30", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-30", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
      {nome: "MATTEO FLANDINA", data: "2025-04-30", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
      {nome: "FEDERICO MANUTI", data: "2025-04-30", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
      {nome: "MASSIMO LOMBARDO", data: "2025-04-30", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-30", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
      {nome: "RODOLFO CIUFFO", data: "2025-04-30", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-02", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-02", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-02", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-02", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-02", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-02", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-02", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-02", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-02", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-02", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-02", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-02", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-02", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-02", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "ALESSANDRO MURGIA", data: "2025-05-02", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-02", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-02", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-02", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "ALESSANDRO MURGIA", data: "2025-05-02", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-02", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-05", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-05", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-05", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-05", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-05", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-05", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-05", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-05", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-05", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-05", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-05", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-05", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-05", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-05", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-05", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-05", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-05", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-05", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-05", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-05", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-05", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-05", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-05", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-05", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "PIETRO BERCHIATTI", data: "2025-05-05", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-05", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-05", turno: "12:30-13:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-06", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-06", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-06", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-06", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-06", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-06", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-06", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-06", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-06", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-06", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-06", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-06", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-06", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-06", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-06", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-06", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-06", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-06", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-06", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-06", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-06", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-06", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-07", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-07", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-07", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-07", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-07", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-07", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-07", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-07", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-07", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-07", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-07", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-07", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-07", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-07", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-07", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-07", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-07", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-07", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-07", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-07", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-07", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-07", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-08", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-08", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-08", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-08", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-08", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-08", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-08", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-08", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-08", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-08", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-08", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-08", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-08", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-08", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-08", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-08", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-08", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-08", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-08", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-08", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-08", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-08", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-08", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-08", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-08", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-09", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-09", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-09", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-09", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-09", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-09", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-09", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-09", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-09", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-09", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-09", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-09", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-09", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-09", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-09", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "FABIO GALEONE", data: "2025-05-09", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-09", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "MANUELE ROMA", data: "2025-05-09", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-09", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-09", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-09", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-12", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-12", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-12", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-12", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-12", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-12", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-12", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-12", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-12", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-12", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-12", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-12", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-12", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-12", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-12", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-12", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-12", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-12", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-12", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-12", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-12", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-12", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-12", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-12", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-13", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-13", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-13", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-13", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-13", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-13", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-13", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-13", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-13", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-13", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-13", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-13", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-13", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-13", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-13", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-13", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-13", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-13", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-13", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-13", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-13", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-13", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-13", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-13", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-13", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-13", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO ACHILLE SCHIAVIO", data: "2025-05-13", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-14", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-14", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-14", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-14", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-14", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-14", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-14", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-14", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-14", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-14", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-14", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-14", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-14", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-14", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-14", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-14", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-14", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-14", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-14", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-14", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-14", turno: "12:30-13:30", sala: "2 STEFANO", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-14", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-14", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-14", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-15", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-15", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-15", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-15", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-15", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-15", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-15", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-15", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-15", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-15", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-15", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-15", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-15", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-15", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-15", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-15", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-15", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-15", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-15", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-15", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-15", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-15", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-15", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-15", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-15", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-15", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-16", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-16", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-16", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-16", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-16", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-16", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-16", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-16", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-16", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-16", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-16", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-16", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-16", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-16", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-16", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-16", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-16", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-16", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-16", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-16", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-16", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-19", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-19", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-19", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-19", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-19", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-19", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-19", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-19", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-19", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-19", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-19", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-19", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-19", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-19", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-19", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-19", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-19", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-19", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-19", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-19", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-19", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-19", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-19", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-19", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-19", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-20", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-20", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-20", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-20", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-20", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-20", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-20", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-20", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-20", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-20", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-20", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-20", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-20", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-20", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-20", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-20", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-20", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-20", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-20", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-20", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-20", turno: "12:30-13:30", sala: "5 GIUPPY", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-21", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-21", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-21", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-21", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-21", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-21", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-21", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-21", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-21", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-21", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-21", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-21", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-21", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-21", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-21", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-21", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-21", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-21", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-21", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-21", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-21", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-21", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-21", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-05-21", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-21", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-21", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-22", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-22", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-22", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-22", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-22", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-22", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-22", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-22", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-22", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-22", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-22", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-22", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-22", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-22", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-22", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-22", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-22", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-22", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-22", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-22", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-22", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-22", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-22", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-22", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-22", turno: "12:30-13:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-23", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-23", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-23", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-23", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-23", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-23", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-23", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-23", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-23", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-23", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-23", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-23", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-26", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-26", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-26", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-26", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-26", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-26", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-26", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-26", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-26", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-26", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-26", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-26", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-26", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-26", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-26", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-27", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-27", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "RODOLFO CIUFFO", data: "2025-05-27", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-27", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-27", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-27", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-27", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-27", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-27", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-27", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-27", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-27", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-27", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-27", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-27", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-27", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-27", turno: "12:30-13:30", sala: "1 LAURA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-28", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-28", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-28", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-28", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-28", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-28", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-28", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-28", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-28", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-28", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-28", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "VALENTINA CAPECCI", data: "2025-05-28", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-28", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-29", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-29", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-29", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-29", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-29", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-29", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-29", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-29", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-29", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-29", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-29", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "MASSIMO LOMBARDO", data: "2025-05-29", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "TOMMASO DACCO", data: "2025-05-29", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-30", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
        {nome: "ANTONIO GIORGIUCCI", data: "2025-05-30", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-30", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-30", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
        {nome: "GIANMARIA DINALLO", data: "2025-05-30", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-30", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
        {nome: "GIANANDREA ROSSI", data: "2025-05-30", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-30", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-30", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "SANTIS MASSIMO DE", data: "2025-05-30", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-30", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-30", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
        {nome: "FEDERICO MANUTI", data: "2025-05-30", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
        {nome: "MATTEO FLANDINA", data: "2025-05-30", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-03", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-03", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-03", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-03", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-03", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-03", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-03", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-03", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-03", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-03", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-03", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-03", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-03", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-03", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-03", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-03", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-04", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-04", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-04", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-04", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-04", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-04", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-04", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-04", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-04", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-04", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-04", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-04", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-04", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-04", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-04", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-04", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-04", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-04", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-04", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-04", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-04", turno: "12:30-13:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-05", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-05", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-05", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-05", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-05", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-05", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-05", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-05", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-05", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-05", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-05", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-05", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-05", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-05", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-05", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-06", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-06", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-06", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-06", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-06", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-06", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-06", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-06", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-06", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-06", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-06", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-06", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-09", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-09", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-09", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-09", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-09", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-09", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-09", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-09", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-09", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-09", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-09", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-09", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-09", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-09", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-09", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-09", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-09", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-09", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-09", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-09", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-09", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-09", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-10", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-10", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-10", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-10", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-10", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-10", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-10", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-10", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-10", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-10", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-10", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-10", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-10", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-10", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-10", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-10", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-10", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-10", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-10", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-10", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-10", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-10", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-11", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-11", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-11", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-11", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-11", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-11", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-11", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-11", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-11", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-11", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-11", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-11", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-11", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-11", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-11", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-11", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-11", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-11", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-11", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-11", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-11", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-11", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-11", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-11", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-11", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "VALENTINA CAPECCI", data: "2025-06-11", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-11", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-11", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-11", turno: "12:30-13:30", sala: "5 GIUPPY", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-12", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-12", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-12", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-12", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-12", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-12", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-12", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-12", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-12", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-12", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-12", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-12", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-12", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-12", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-12", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-12", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-12", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-12", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-12", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-12", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-12", turno: "19:30-22:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-12", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-12", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-12", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-12", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-12", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-12", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-13", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-13", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-13", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-13", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-13", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-13", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-13", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-13", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-13", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-13", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-13", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-13", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-13", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-13", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-13", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-13", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-13", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-16", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-16", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-16", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-16", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-16", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-16", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-16", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-16", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-16", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-16", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-16", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-16", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-16", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-16", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-16", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-16", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-17", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-17", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-17", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-17", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-17", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-17", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-17", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-17", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-17", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-17", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-17", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-17", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-17", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-17", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-17", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-17", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-17", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-17", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-17", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-17", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-17", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-17", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-17", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-17", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-18", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-18", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-18", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-18", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-18", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-18", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-18", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-18", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-18", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-18", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-18", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-18", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-18", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-18", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-18", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-18", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-18", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-18", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-18", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-18", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-18", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-18", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-18", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-19", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-19", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-19", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-19", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-19", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-19", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-19", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-19", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-19", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-19", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-19", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-19", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-19", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-19", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-19", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-19", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-19", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-19", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-19", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-19", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-19", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-19", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-19", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-20", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-20", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-20", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-20", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-20", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-20", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-20", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-20", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-20", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-20", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-20", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-20", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-20", turno: "12:30-13:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-21", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-21", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-23", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-23", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-23", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-23", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-23", turno: "9:30-12:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-23", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-23", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-23", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-23", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-23", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-23", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-23", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-23", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-23", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-23", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-24", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-24", turno: "16:30-19:30", sala: "9 MYRIAM", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-24", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-24", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-24", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-24", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-24", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-24", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-24", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-24", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-24", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-24", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-24", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-24", turno: "9:30-12:30", sala: "3 SIMONA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-24", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-24", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-24", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-24", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-25", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-25", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-25", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-25", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-25", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-25", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-25", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-25", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-25", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-25", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ANTONIO GIORGIUCCI", data: "2025-06-25", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-25", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-25", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-25", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-25", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-25", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-25", turno: "12:30-13:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-26", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-26", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-26", turno: "9:30-12:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-26", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-26", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-26", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-26", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-26", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-26", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-26", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-26", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-26", turno: "13:30-16:30", sala: "5 GIUPPY", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-26", turno: "16:30-19:30", sala: "3 SIMONA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-26", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-26", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-26", turno: "12:30-13:30", sala: "8 ROSSA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-26", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-26", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-27", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-27", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-27", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-27", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-27", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-27", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "PIETRO BERCHIATTI", data: "2025-06-27", turno: "13:30-16:30", sala: "3 SIMONA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-27", turno: "16:30-19:30", sala: "5 GIUPPY", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-27", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-27", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-27", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "MASSIMO LOMBARDO", data: "2025-06-27", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-27", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-30", turno: "13:30-16:30", sala: "10 GIULIA", turni: 1},
          {nome: "EMANUELE LOFFREDI", data: "2025-06-30", turno: "16:30-19:30", sala: "10 GIULIA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-30", turno: "9:30-12:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-30", turno: "13:30-16:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-30", turno: "9:30-12:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-30", turno: "13:30-16:30", sala: "6 FIAMMA", turni: 1},
          {nome: "GIANMARIA DINALLO", data: "2025-06-30", turno: "16:30-19:30", sala: "6 FIAMMA", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-30", turno: "9:30-12:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-30", turno: "13:30-16:30", sala: "2 STEFANO", turni: 1},
          {nome: "ALESSANDRO TAGLIAFERRI", data: "2025-06-30", turno: "16:30-19:30", sala: "2 STEFANO", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-30", turno: "9:30-12:30", sala: "9 MYRIAM", turni: 1},
          {nome: "FEDERICO MANUTI", data: "2025-06-30", turno: "13:30-16:30", sala: "9 MYRIAM", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-30", turno: "13:30-16:30", sala: "8 ROSSA", turni: 1},
          {nome: "TOMMASO DACCO", data: "2025-06-30", turno: "16:30-19:30", sala: "8 ROSSA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-30", turno: "9:30-12:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-30", turno: "13:30-16:30", sala: "1 LAURA", turni: 1},
          {nome: "GIANANDREA ROSSI", data: "2025-06-30", turno: "16:30-19:30", sala: "1 LAURA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-30", turno: "9:30-12:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-30", turno: "13:30-16:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "SANTIS MASSIMO DE", data: "2025-06-30", turno: "16:30-19:30", sala: "7 ROSSELLA", turni: 1},
          {nome: "RODOLFO CIUFFO", data: "2025-06-30", turno: "16:30-19:30", sala: "4 FRANCESCO", turni: 1},
          {nome: "MATTEO FLANDINA", data: "2025-06-30", turno: "9:30-12:30", sala: "5 GIUPPY", turni: 1},
];
  

  const capitalizeName = (name) => {
    return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };
  
// Funzione per raccogliere i dati dei fonici (ad esempio tramite chiamata API)
export const getFoniciData = async () => {
  try {
    const response = await axios.get('/api/fonici/statistiche'); // Sostituisci con il percorso reale
    return response.data; // Ricevi i dati reali
  } catch (error) {
    console.error("Errore nel recupero delle statistiche fonici", error);
    return foniciData; // In caso di errore, restituisci i dati fittizi
  }
};

// Funzione per ottenere l'utilizzo delle sale basata sui dati dei turni
export const getUtilizzoSale = (foniciData) => {
  const saleUsage = foniciData.reduce((acc, { sala }) => {
    acc[sala] = (acc[sala] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(saleUsage)
    .map(([sala, turni]) => ({ sala, turni }))
    .sort((a, b) => b.turni - a.turni); // Ordina in modo decrescente per numero di turni
};

// Funzione per ottenere i dati dei fonici per un periodo di tempo
const getDaysFromPeriod = (period) => {
  switch (period) {
    case 'mese':
      return 30;
    case 'quadrimestre':
      return 120;
    case 'anno':
      return 365;
    default:
      return 0;
  }
};

// Funzione per ottenere i dati dei fonici per un periodo di tempo
export const getFoniciDataForPeriod = (period) => {
  const today = new Date();

  if (period === 'mese') {
    // Ultimo mese completo
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const nextMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    return foniciData.filter((fonico) => {
      const fonicoDate = new Date(fonico.data);
      return fonicoDate >= lastMonth && fonicoDate < nextMonth;
    });
  } else if (period === 'quadrimestre') {
    // Ultimi quattro mesi completi precedenti
    const startPeriod = new Date(today.getFullYear(), today.getMonth() - 4, 1);
    const endPeriod = new Date(today.getFullYear(), today.getMonth(), 1);

    return foniciData.filter((fonico) => {
      const fonicoDate = new Date(fonico.data);
      return fonicoDate >= startPeriod && fonicoDate < endPeriod;
    });
  } else if (period === 'anno') {
    // Anno corrente
    const startYear = new Date(today.getFullYear(), 0, 1);
    const endYear = new Date(today.getFullYear() + 1, 0, 1);

    return foniciData.filter((fonico) => {
      const fonicoDate = new Date(fonico.data);
      return fonicoDate >= startYear && fonicoDate <= today; // Fino ad oggi
    });
  } else {
    // Gestisci altri periodi o ritorna tutti i dati
    return foniciData;
  }
};


// Funzione per ottenere il conteggio dei turni per ciascun fonico in un periodo
export const getFoniciTurnCountsForPeriod = (period) => {
  const filteredData = getFoniciDataForPeriod(period);
  const foniciCounts = {};

  filteredData.forEach(({ nome, turni }) => {
    foniciCounts[nome] = (foniciCounts[nome] || 0) + turni;
  });

  return Object.entries(foniciCounts)
    .map(([nome, turni]) => ({ nome, turni }))
    .sort((a, b) => b.turni - a.turni);
};

// Funzione per ottenere i dati dell'ultimo mese con confronto al mese precedente
export const getFoniciTurnCountsWithTrend = () => {
  // Ottieni i dati dell'ultimo mese completo
  const lastMonthData = getFoniciTurnCountsForPeriod('mese');
  
  // Calcola le date per il mese precedente a quello analizzato
  const today = new Date();
  // L'ultimo mese completo è il mese precedente a quello corrente
  const lastCompleteMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  // Il mese precedente a quello è due mesi fa
  const previousMonth = new Date(today.getFullYear(), today.getMonth() - 2, 1);
  const endPreviousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  
  // Filtra i dati per il mese precedente usando la stessa logica di getFoniciDataForPeriod
  const prevMonthData = foniciData.filter((fonico) => {
    const fonicoDate = new Date(fonico.data);
    return fonicoDate >= previousMonth && fonicoDate < endPreviousMonth;
  });
  
  // Calcola i conteggi per il mese precedente
  const prevMonthCounts = {};
  prevMonthData.forEach(({ nome, turni }) => {
    prevMonthCounts[nome] = (prevMonthCounts[nome] || 0) + turni;
  });
  
  // Combina i dati aggiungendo informazioni di trend
  const dataWithTrend = lastMonthData.map(current => {
    const prevTurni = prevMonthCounts[current.nome] || 0;
    const trend = current.turni > prevTurni ? 'up' : current.turni < prevTurni ? 'down' : 'stable';
    const difference = current.turni - prevTurni;
    
    return {
      ...current,
      trend,
      difference,
      prevTurni
    };
  });
  
  return dataWithTrend;
};

// **Qui aggiungi la funzione getBilanciamentoFonici**

export const getBilanciamentoFonici = () => {
  // Ottieni i conteggi dei turni per ciascun fonico nell'anno
  let foniciCounts = getFoniciTurnCountsForPeriod('anno');

  // Ordina i fonici in base al numero di turni (decrescente)
  foniciCounts.sort((a, b) => b.turni - a.turni);

  // Seleziona i primi 8 fonici
  const top8FoniciCounts = foniciCounts.slice(0, 8);

  // Calcola la media dei turni tra i primi 8 fonici
  const totalTurni = top8FoniciCounts.reduce((sum, fonico) => sum + fonico.turni, 0);
  const averageTurni = totalTurni / top8FoniciCounts.length;

  // Calcola la differenza dalla media per ciascun fonico
  const bilanciamento = top8FoniciCounts.map((fonico) => ({
    nome: fonico.nome,
    turni: fonico.turni,
    differenza: averageTurni - fonico.turni,
  }));

  // Ordina in base alla differenza (dal più negativo al più positivo)
  bilanciamento.sort((a, b) => b.differenza - a.differenza);

  return {
    bilanciamento,
    averageTurni: Math.round(averageTurni),
  };
};

export const getUtilizzoSaleForPeriod = (period) => {
  const filteredData = getFoniciDataForPeriod(period);
  const saleUsage = filteredData.reduce((acc, { sala }) => {
    acc[sala] = (acc[sala] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(saleUsage)
    .map(([sala, turni]) => ({ sala, turni }))
    .sort((a, b) => b.turni - a.turni);
};

// Strutture dati per i mesi
const monthsData = [
  // Dati 2020
  {
    year: 2020,
    month: 1, // Gennaio
    days: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0,
      8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 1, 21: 0,
      22: 0, 23: 0, 24: 3, 25: 0, 26: 0, 27: 0, 28: 11,
      29: 0, 30: 0, 31: 0
    }
  },
  {
    year: 2020,
    month: 2, // Febbraio
    days: {
      1: 0, 2: 0, 3: 7, 4: 7, 5: 8, 6: 11, 7: 10,
      8: 0, 9: 0, 10: 4, 11: 4, 12: 3, 13: 4, 14: 1,
      15: 0, 16: 0, 17: 2, 18: 4, 19: 0, 20: 4, 21: 3,
      22: 0, 23: 0, 24: 9, 25: 4, 26: 3, 27: 6, 28: 8,
      29: 0
    }
  },
  {
    year: 2020,
    month: 3, // Marzo
    days: {
      1: 0, 2: 8, 3: 10, 4: 8, 5: 7, 6: 7, 7: 0,
      8: 0, 9: 5, 10: 3, 11: 0, 12: 1, 13: 0, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0,
      22: 0, 23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 0,
      29: 0, 30: 0, 31: 0
    }
  },
  {
    year: 2020,
    month: 4, // Aprile
    days: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0,
      8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 11, 21: 8,
      22: 8, 23: 10, 24: 11, 25: 0, 26: 0, 27: 16, 28: 13,
      29: 14, 30: 11
    }
  },
  {
    year: 2020,
    month: 5, // Maggio
    days: {
      1: 0, 2: 0, 3: 0, 4: 18, 5: 16, 6: 16, 7: 16, 8: 14, 9: 0,
      10: 0, 11: 19, 12: 22, 13: 14, 14: 13, 15: 16, 16: 0, 17: 0,
      18: 17, 19: 21, 20: 13, 21: 21, 22: 20, 23: 2, 24: 0, 25: 15,
      26: 13, 27: 9, 28: 9, 29: 3, 30: 0, 31: 0
    }
  },
  {
    year: 2020,
    month: 6, // Giugno
    days: {
      1: 3, 2: 0, 3: 7, 4: 6, 5: 4, 6: 0, 7: 0, 8: 5, 9: 5,
      10: 10, 11: 6, 12: 11, 13: 0, 14: 0, 15: 10, 16: 10, 17: 13,
      18: 13, 19: 9, 20: 0, 21: 0, 22: 9, 23: 13, 24: 12, 25: 15,
      26: 11, 27: 0, 28: 0, 29: 0, 30: 16
    }
  },
  {
    year: 2020,
    month: 7, // Luglio
    days: {
      1: 15, 2: 14, 3: 8, 4: 0, 5: 0, 6: 15, 7: 17, 8: 15,
      9: 17, 10: 14, 11: 0, 12: 0, 13: 16, 14: 11, 15: 8, 16: 12,
      17: 7, 18: 0, 19: 0, 20: 8, 21: 13, 22: 8, 23: 12, 24: 6,
      25: 0, 26: 0, 27: 15, 28: 10, 29: 9, 30: 13, 31: 8
    }
  },
  {
    year: 2020,
    month: 8, // Agosto
    days: {
      1: 0, 2: 0, 3: 9, 4: 4, 5: 1, 6: 0, 7: 0, 8: 0,
      9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0, 16: 0,
      17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0, 23: 0, 24: 0,
      25: 0, 26: 0, 27: 0, 28: 1, 29: 0, 30: 0, 31: 0
    }
  },
  {
    year: 2020,
    month: 9, // Settembre
    days: {
      1: 0, 2: 0, 3: 0, 4: 2, 5: 0, 6: 0, 7: 8, 8: 9,
      9: 6, 10: 9, 11: 13, 12: 0, 13: 0, 14: 9, 15: 8, 16: 7,
      17: 9, 18: 4, 19: 0, 20: 0, 21: 8, 22: 8, 23: 10, 24: 11,
      25: 13, 26: 0, 27: 0, 28: 12, 29: 13, 30: 13
    }
  },
  {
    year: 2020,
    month: 10, // Ottobre
    days: {
      1: 15, 2: 11, 3: 2, 4: 0, 5: 12, 6: 19, 7: 20,
      8: 20, 9: 10, 10: 0, 11: 0, 12: 13, 13: 11, 14: 11,
      15: 11, 16: 10, 17: 0, 18: 0, 19: 10, 20: 9, 21: 10,
      22: 12, 23: 8, 24: 0, 25: 0, 26: 6, 27: 9, 28: 9,
      29: 11, 30: 8, 31: 0
    }
  },
  {
    year: 2020,
    month: 11, // Novembre
    days: {
      1: 0, 2: 6, 3: 6, 4: 5, 5: 5, 6: 6, 7: 0,
      8: 0, 9: 6, 10: 5, 11: 6, 12: 7, 13: 2, 14: 0,
      15: 0, 16: 4, 17: 7, 18: 6, 19: 6, 20: 6, 21: 0,
      22: 0, 23: 11, 24: 9, 25: 12, 26: 12, 27: 9, 28: 0,
      29: 0, 30: 6
    }
  },
  {
    year: 2020,
    month: 12, // Dicembre
    days: {
      1: 7, 2: 9, 3: 7, 4: 6, 5: 0, 6: 0, 7: 1,
      8: 0, 9: 6, 10: 11, 11: 11, 12: 0, 13: 0, 14: 7,
      15: 4, 16: 13, 17: 15, 18: 9, 19: 0, 20: 0, 21: 11,
      22: 16, 23: 13, 24: 0, 25: 0, 26: 0, 27: 0, 28: 12,
      29: 11, 30: 14, 31: 0
    }
  },
  // Dati 2021
  {
    year: 2021,
    month: 1, // Gennaio
    days: {
      1: 0, 2: 0, 3: 0, 4: 10, 5: 7, 6: 0, 7: 9,
      8: 11, 9: 0, 10: 0, 11: 13, 12: 11, 13: 10, 14: 13,
      15: 9, 16: 0, 17: 0, 18: 16, 19: 10, 20: 15, 21: 10,
      22: 8, 23: 0, 24: 0, 25: 10, 26: 8, 27: 6, 28: 6,
      29: 5, 30: 0, 31: 0
    }
  },
  {
    year: 2021,
    month: 2, // Febbraio
    days: {
      1: 8, 2: 10, 3: 6, 4: 10, 5: 8, 6: 0, 7: 0,
      8: 6, 9: 10, 10: 10, 11: 7, 12: 7, 13: 2, 14: 0,
      15: 6, 16: 6, 17: 7, 18: 14, 19: 10, 20: 0, 21: 0,
      22: 14, 23: 15, 24: 12, 25: 13, 26: 4, 27: 0, 28: 0
    }
  },
  {
    year: 2021,
    month: 3, // Marzo
    days: {
      1: 11, 2: 14, 3: 17, 4: 19, 5: 12, 6: 0, 7: 0,
      8: 17, 9: 17, 10: 16, 11: 17, 12: 19, 13: 3, 14: 0,
      15: 16, 16: 15, 17: 15, 18: 9, 19: 14, 20: 0, 21: 0,
      22: 12, 23: 10, 24: 15, 25: 17, 26: 8, 27: 0, 28: 0,
      29: 7, 30: 13, 31: 15
    }
  },
  {
    year: 2021,
    month: 4, // Aprile
    days: {
      1: 13, 2: 0, 3: 0, 4: 0, 5: 0, 6: 11, 7: 20,
      8: 17, 9: 14, 10: 0, 11: 0, 12: 16, 13: 17, 14: 19,
      15: 16, 16: 10, 17: 0, 18: 0, 19: 22, 20: 16, 21: 17,
      22: 15, 23: 8, 24: 0, 25: 0, 26: 16, 27: 20, 28: 14,
      29: 17, 30: 12
    }
  },
  {
    year: 2021,
    month: 5, // Maggio
    days: {
      1: 2, 2: 0, 3: 16, 4: 16, 5: 14, 6: 21, 7: 11,
      8: 0, 9: 0, 10: 10, 11: 9, 12: 14, 13: 5, 14: 12,
      15: 0, 16: 0, 17: 13, 18: 20, 19: 20, 20: 24, 21: 15,
      22: 0, 23: 0, 24: 18, 25: 20, 26: 17, 27: 17, 28: 16,
      29: 0, 30: 0, 31: 13
    }
  },
  {
    year: 2021,
    month: 6, // Giugno
    days: {
      1: 17, 2: 2, 3: 20, 4: 15, 5: 8, 6: 0, 7: 15,
      8: 19, 9: 17, 10: 16, 11: 19, 12: 0, 13: 0, 14: 20,
      15: 20, 16: 19, 17: 20, 18: 16, 19: 0, 20: 0, 21: 18,
      22: 19, 23: 17, 24: 14, 25: 16, 26: 0, 27: 0, 28: 17,
      29: 3, 30: 24
    }
  },
  {
    year: 2021,
    month: 7, // Luglio
    days: {
      1: 22, 2: 22, 3: 2, 4: 0, 5: 23, 6: 22, 7: 27,
      8: 23, 9: 19, 10: 5, 11: 0, 12: 18, 13: 14, 14: 9,
      15: 15, 16: 15, 17: 0, 18: 0, 19: 16, 20: 11, 21: 12,
      22: 15, 23: 11, 24: 0, 25: 0, 26: 17, 27: 19, 28: 11,
      29: 15, 30: 20, 31: 0
    }
  },
  {
    year: 2021,
    month: 8, // Agosto
    days: {
      1: 0, 2: 20, 3: 18, 4: 15, 5: 12, 6: 5, 7: 0,
      8: 0, 9: 1, 10: 0, 11: 1, 12: 0, 13: 1, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0,
      22: 0, 23: 0, 24: 0, 25: 0, 26: 2, 27: 1, 28: 0,
      29: 0, 30: 8, 31: 7
    }
  },
  {
    year: 2021,
    month: 9, // Settembre
    days: {
      1: 10, 2: 14, 3: 9, 4: 0, 5: 0, 6: 20, 7: 20,
      8: 17, 9: 19, 10: 18, 11: 0, 12: 0, 13: 19, 14: 16,
      15: 16, 16: 19, 17: 16, 18: 0, 19: 0, 20: 17, 21: 21,
      22: 18, 23: 21, 24: 14, 25: 0, 26: 0, 27: 20, 28: 22,
      29: 19, 30: 20
    }
  },
  {
    year: 2021,
    month: 10, // Ottobre
    days: {
      1: 19, 2: 1, 3: 0, 4: 20, 5: 17, 6: 15, 7: 18,
      8: 16, 9: 0, 10: 0, 11: 19, 12: 18, 13: 18, 14: 16,
      15: 17, 16: 1, 17: 0, 18: 20, 19: 21, 20: 21, 21: 21,
      22: 19, 23: 1, 24: 0, 25: 19, 26: 19, 27: 19, 28: 17,
      29: 17, 30: 0, 31: 0
    }
  },
  {
    year: 2021,
    month: 11, // Novembre
    days: {
      1: 0, 2: 21, 3: 19, 4: 20, 5: 14, 6: 0, 7: 0,
      8: 19, 9: 20, 10: 22, 11: 26, 12: 20, 13: 2, 14: 0,
      15: 20, 16: 23, 17: 20, 18: 21, 19: 15, 20: 0, 21: 0,
      22: 20, 23: 20, 24: 20, 25: 19, 26: 14, 27: 0, 28: 0,
      29: 23, 30: 20
    }
  },
  {
    year: 2021,
    month: 12, // Dicembre
    days: {
      1: 23, 2: 23, 3: 23, 4: 7, 5: 0, 6: 24, 7: 21,
      8: 0, 9: 22, 10: 23, 11: 2, 12: 0, 13: 21, 14: 18,
      15: 17, 16: 17, 17: 13, 18: 0, 19: 0, 20: 15, 21: 11,
      22: 16, 23: 7, 24: 0, 25: 0, 26: 0, 27: 11, 28: 18,
      29: 11, 30: 6, 31: 0
    }
  },
  // Dati 2022
  {
    year: 2022,
    month: 1, // Gennaio
    days: {
      1: 0, 2: 0, 3: 10, 4: 15, 5: 12, 6: 0, 7: 4, 8: 0,
      9: 0, 10: 21, 11: 16, 12: 21, 13: 18, 14: 17, 15: 2,
      16: 0, 17: 19, 18: 16, 19: 21, 20: 20, 21: 19, 22: 0,
      23: 0, 24: 11, 25: 19, 26: 17, 27: 14, 28: 17, 29: 0,
      30: 0, 31: 20
    }
  },
  {
    year: 2022,
    month: 2, // Febbraio
    days: {
      1: 16, 2: 20, 3: 17, 4: 17, 5: 0, 6: 0, 7: 13, 8: 20,
      9: 15, 10: 15, 11: 14, 12: 0, 13: 0, 14: 19, 15: 21,
      16: 20, 17: 17, 18: 19, 19: 0, 20: 0, 21: 22, 22: 19,
      23: 20, 24: 18, 25: 13, 26: 0, 27: 0, 28: 17
    }
  },
  {
    year: 2022,
    month: 3, // Marzo
    days: {
      1: 14, 2: 20, 3: 21, 4: 20, 5: 0, 6: 0, 7: 16, 8: 18,
      9: 17, 10: 20, 11: 19, 12: 0, 13: 0, 14: 21, 15: 20,
      16: 17, 17: 19, 18: 13, 19: 0, 20: 0, 21: 14, 22: 11,
      23: 16, 24: 18, 25: 14, 26: 0, 27: 0, 28: 18, 29: 18,
      30: 18, 31: 19
    }
  },
  {
    year: 2022,
    month: 4, // Aprile
    days: {
      1: 16, 2: 0, 3: 0, 4: 16, 5: 17, 6: 19, 7: 19, 8: 12,
      9: 0, 10: 0, 11: 15, 12: 19, 13: 21, 14: 20, 15: 11,
      16: 0, 17: 0, 18: 0, 19: 20, 20: 19, 21: 17, 22: 15,
      23: 1, 24: 0, 25: 0, 26: 17, 27: 16, 28: 15, 29: 18,
      30: 0
    }
  },
  {
    year: 2022,
    month: 5, // Maggio
    days: {
      1: 0, 2: 20, 3: 18, 4: 21, 5: 16, 6: 14, 7: 0,
      8: 0, 9: 15, 10: 16, 11: 17, 12: 18, 13: 18, 14: 3,
      15: 0, 16: 21, 17: 19, 18: 19, 19: 21, 20: 16, 21: 0,
      22: 0, 23: 18, 24: 21, 25: 21, 26: 19, 27: 18, 28: 3,
      29: 0, 30: 18, 31: 16
    }
  },
  {
    year: 2022,
    month: 6, // Giugno
    days: {
      1: 17, 2: 0, 3: 13, 4: 0, 5: 0, 6: 18, 7: 21,
      8: 21, 9: 22, 10: 19, 11: 3, 12: 0, 13: 19, 14: 17,
      15: 22, 16: 18, 17: 18, 18: 0, 19: 0, 20: 18, 21: 18,
      22: 19, 23: 20, 24: 15, 25: 2, 26: 0, 27: 21, 28: 18,
      29: 0, 30: 23
    }
  },
  {
    year: 2022,
    month: 7, // Luglio
    days: {
      1: 16, 2: 0, 3: 0, 4: 15, 5: 15, 6: 18, 7: 18,
      8: 19, 9: 0, 10: 0, 11: 13, 12: 17, 13: 19, 14: 18,
      15: 21, 16: 3, 17: 0, 18: 21, 19: 23, 20: 19, 21: 23,
      22: 19, 23: 0, 24: 0, 25: 22, 26: 19, 27: 20, 28: 21,
      29: 23, 30: 0, 31: 0
    }
  },
  {
    year: 2022,
    month: 8, // Agosto
    days: {
      1: 21, 2: 17, 3: 20, 4: 12, 5: 9, 6: 0, 7: 0,
      8: 11, 9: 3, 10: 0, 11: 0, 12: 1, 13: 0, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0,
      22: 0, 23: 1, 24: 4, 25: 5, 26: 7, 27: 0, 28: 0,
      29: 17, 30: 16, 31: 17
    }
  },
  {
    year: 2022,
    month: 9, // Settembre
    days: {
      1: 20, 2: 21, 3: 3, 4: 0, 5: 24, 6: 22, 7: 23,
      8: 21, 9: 23, 10: 3, 11: 0, 12: 23, 13: 20, 14: 21,
      15: 22, 16: 14, 17: 0, 18: 0, 19: 21, 20: 19, 21: 21,
      22: 22, 23: 14, 24: 0, 25: 0, 26: 19, 27: 22, 28: 14,
      29: 16, 30: 14
    }
  },
  {
    year: 2022,
    month: 10, // Ottobre
    days: {
      1: 0, 2: 0, 3: 9, 4: 12, 5: 14, 6: 10, 7: 15, 8: 0,
      9: 0, 10: 19, 11: 17, 12: 16, 13: 19, 14: 20, 15: 1,
      16: 0, 17: 19, 18: 15, 19: 19, 20: 22, 21: 15, 22: 0,
      23: 0, 24: 20, 25: 14, 26: 19, 27: 19, 28: 16, 29: 0,
      30: 0, 31: 7
    }
  },
  {
    year: 2022,
    month: 11, // Novembre
    days: {
      1: 0, 2: 19, 3: 19, 4: 19, 5: 0, 6: 0, 7: 19, 8: 21,
      9: 18, 10: 21, 11: 16, 12: 2, 13: 0, 14: 17, 15: 14,
      16: 18, 17: 18, 18: 18, 19: 0, 20: 0, 21: 19, 22: 19,
      23: 16, 24: 19, 25: 17, 26: 0, 27: 0, 28: 18, 29: 16,
      30: 15
    }
  },
  {
    year: 2022,
    month: 12, // Dicembre
    days: {
      1: 16, 2: 14, 3: 0, 4: 0, 5: 12, 6: 17, 7: 18, 8: 0,
      9: 5, 10: 0, 11: 0, 12: 14, 13: 15, 14: 17, 15: 22,
      16: 10, 17: 0, 18: 0, 19: 19, 20: 15, 21: 16, 22: 15,
      23: 5, 24: 0, 25: 0, 26: 0, 27: 8, 28: 4, 29: 4,
      30: 2, 31: 0
    }
  },
  // Dati 2023
  {
    year: 2023,
    month: 1, // Gennaio
    days: {
      1: 0, 2: 1, 3: 2, 4: 4, 5: 0, 6: 0, 7: 0,
      8: 0, 9: 19, 10: 16, 11: 15, 12: 9, 13: 8, 14: 0,
      15: 0, 16: 12, 17: 12, 18: 10, 19: 9, 20: 8, 21: 0,
      22: 0, 23: 12, 24: 12, 25: 16, 26: 19, 27: 16, 28: 0,
      29: 0, 30: 17, 31: 16
    }
  },
  {
    year: 2023,
    month: 2, // Febbraio
    days: {
      1: 16, 2: 15, 3: 13, 4: 0, 5: 0, 6: 16, 7: 19,
      8: 17, 9: 12, 10: 17, 11: 0, 12: 0, 13: 13, 14: 14,
      15: 15, 16: 14, 17: 12, 18: 0, 19: 0, 20: 14, 21: 11,
      22: 2, 23: 2, 24: 3, 25: 0, 26: 0, 27: 2, 28: 0
    }
  },
  {
    year: 2023,
    month: 3, // Marzo
    days: {
      1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0,
      8: 0, 9: 0, 10: 1, 11: 0, 12: 0, 13: 0, 14: 0,
      15: 17, 16: 15, 17: 12, 18: 0, 19: 0, 20: 17, 21: 16,
      22: 21, 23: 21, 24: 20, 25: 0, 26: 0, 27: 21, 28: 17,
      29: 15, 30: 13, 31: 14
    }
  },
  {
    year: 2023,
    month: 4, // Aprile
    days: {
      1: 0, 2: 0, 3: 16, 4: 13, 5: 14, 6: 12, 7: 5,
      8: 0, 9: 0, 10: 0, 11: 17, 12: 14, 13: 15, 14: 15,
      15: 0, 16: 0, 17: 12, 18: 15, 19: 18, 20: 21, 21: 16,
      22: 0, 23: 0, 24: 9, 25: 0, 26: 19, 27: 20, 28: 15,
      29: 0, 30: 0
    }
  },
  {
    year: 2023,
    month: 5, // Maggio
    days: {
      1: 0, 2: 18, 3: 21, 4: 18, 5: 20, 6: 0, 7: 0,
      8: 19, 9: 19, 10: 19, 11: 19, 12: 18, 13: 0, 14: 0,
      15: 19, 16: 19, 17: 19, 18: 17, 19: 10, 20: 0, 21: 0,
      22: 20, 23: 19, 24: 20, 25: 21, 26: 19, 27: 0, 28: 0,
      29: 21, 30: 21, 31: 20
    }
  },
  {
    year: 2023,
    month: 6, // Giugno
    days: {
      1: 19, 2: 0, 3: 0, 4: 0, 5: 22, 6: 21, 7: 19, 8: 16, 9: 19, 10: 0,
      11: 0, 12: 19, 13: 20, 14: 21, 15: 22, 16: 12, 17: 0, 18: 0, 19: 19,
      20: 16, 21: 15, 22: 18, 23: 16, 24: 0, 25: 0, 26: 19, 27: 19, 28: 21,
      29: 0, 30: 7
    }
  },
  {
    year: 2023,
    month: 7, // Luglio
    days: {
      1: 0, 2: 0, 3: 21, 4: 18, 5: 23, 6: 23, 7: 18, 8: 0,
      9: 0, 10: 17, 11: 19, 12: 18, 13: 17, 14: 9, 15: 0,
      16: 0, 17: 16, 18: 16, 19: 13, 20: 14, 21: 9, 22: 0,
      23: 0, 24: 13, 25: 13, 26: 18, 27: 15, 28: 7, 29: 0,
      30: 0, 31: 12
    }
  },
  {
    year: 2023,
    month: 8, // Agosto
    days: {
      1: 15, 2: 7, 3: 8, 4: 3, 5: 0, 6: 0, 7: 3, 8: 1,
      9: 0, 10: 1, 11: 0, 12: 0, 13: 0, 14: 0, 15: 0,
      16: 0, 17: 0, 18: 0, 19: 0, 20: 0, 21: 0, 22: 0,
      23: 0, 24: 0, 25: 0, 26: 0, 27: 0, 28: 6, 29: 8,
      30: 7, 31: 7
    }
  },
  {
    year: 2023,
    month: 9, // Settembre
    days: {
      1: 7, 2: 0, 3: 0, 4: 9, 5: 11, 6: 20, 7: 20, 8: 11,
      9: 0, 10: 0, 11: 17, 12: 17, 13: 18, 14: 15, 15: 12,
      16: 0, 17: 0, 18: 10, 19: 13, 20: 19, 21: 11, 22: 6,
      23: 0, 24: 0, 25: 11, 26: 12, 27: 15, 28: 10, 29: 8,
      30: 0
    }
  },
  {
    year: 2023,
    month: 10, // Ottobre
    days: {
      1: 0, 2: 23, 3: 19, 4: 22, 5: 14, 6: 11, 7: 0,
      8: 0, 9: 13, 10: 22, 11: 18, 12: 16, 13: 12, 14: 0,
      15: 0, 16: 19, 17: 18, 18: 21, 19: 14, 20: 10, 21: 0,
      22: 0, 23: 14, 24: 15, 25: 18, 26: 18, 27: 7, 28: 0,
      29: 0, 30: 16, 31: 13
    }
  },
  {
    year: 2023,
    month: 11, // Novembre
    days: {
      1: 0, 2: 11, 3: 5, 4: 0, 5: 0, 6: 6, 7: 10, 8: 12,
      9: 16, 10: 14, 11: 0, 12: 0, 13: 18, 14: 10, 15: 9,
      16: 7, 17: 6, 18: 0, 19: 0, 20: 13, 21: 12, 22: 11,
      23: 13, 24: 14, 25: 0, 26: 0, 27: 8, 28: 9, 29: 13,
      30: 12
    }
  },
  {
    year: 2023,
    month: 12, // Dicembre
    days: {
      1: 9, 2: 0, 3: 0, 4: 9, 5: 12, 6: 19, 7: 15, 8: 0,
      9: 0, 10: 0, 11: 11, 12: 7, 13: 19, 14: 14, 15: 11,
      16: 0, 17: 0, 18: 20, 19: 23, 20: 16, 21: 12, 22: 8,
      23: 0, 24: 0, 25: 0, 26: 0, 27: 1, 28: 1, 29: 0,
      30: 0, 31: 0
    }
  },
  {
    year: 2024,
    month: 1, // Gennaio
    days: {
      1: 0, 2: 0, 3: 3, 4: 1, 5: 3, 6: 0, 7: 0,
      8: 10, 9: 6, 10: 10, 11: 8, 12: 9, 13: 0, 14: 0,
      15: 10, 16: 12, 17: 10, 18: 9, 19: 9, 20: 0, 21: 0,
      22: 11, 23: 12, 24: 10, 25: 11, 26: 9, 27: 0, 28: 0,
      29: 8, 30: 9, 31: 9
    }
  },
  {
    year: 2024,
    month: 2, // Febbraio
    days: {
      1: 9, 2: 6, 3: 0, 4: 0, 5: 9, 6: 11, 7: 11,
      8: 11, 9: 11, 10: 0, 11: 0, 12: 11, 13: 11, 14: 12,
      15: 16, 16: 10, 17: 0, 18: 0, 19: 11, 20: 14, 21: 8,
      22: 11, 23: 11, 24: 0, 25: 0, 26: 3, 27: 17, 28: 12,
      29: 17
    }
  },
  {
    year: 2024,
    month: 3, // Marzo
    days: {
      1: 13, 2: 3, 3: 0, 4: 8, 5: 8, 6: 10, 7: 8,
      8: 8, 9: 0, 10: 0, 11: 7, 12: 6, 13: 8, 14: 8,
      15: 4, 16: 0, 17: 0, 18: 4, 19: 7, 20: 12, 21: 14,
      22: 10, 23: 3, 24: 0, 25: 11, 26: 13, 27: 7, 28: 8,
      29: 4, 30: 0, 31: 0
    }
  },
  {
    year: 2024,
    month: 4, // Aprile
    days: {
      1: 0, 2: 9, 3: 10, 4: 18, 5: 19, 6: 3, 7: 0,
      8: 21, 9: 25, 10: 23, 11: 25, 12: 19, 13: 3, 14: 0,
      15: 22, 16: 22, 17: 23, 18: 26, 19: 19, 20: 2, 21: 0,
      22: 17, 23: 23, 24: 20, 25: 0, 26: 12, 27: 3, 28: 0,
      29: 13, 30: 15
    }
  },
  {
    year: 2024,
    month: 5, // Maggio
    days: {
      1: 0, 2: 16, 3: 13, 4: 2, 5: 0, 6: 15, 7: 16,
      8: 23, 9: 18, 10: 20, 11: 2, 12: 0, 13: 16, 14: 20,
      15: 19, 16: 21, 17: 18, 18: 3, 19: 0, 20: 18, 21: 17,
      22: 18, 23: 19, 24: 20, 25: 2, 26: 0, 27: 14, 28: 23,
      29: 20, 30: 22, 31: 23
    }
  },
  {
    year: 2024,
    month: 6, // Giugno
    days: {
      1: 2, 2: 0, 3: 24, 4: 25, 5: 19, 6: 27, 7: 23, 8: 2,
      9: 0, 10: 18, 11: 17, 12: 18, 13: 18, 14: 19, 15: 3,
      16: 0, 17: 15, 18: 18, 19: 17, 20: 16, 21: 20, 22: 2,
      23: 0, 24: 22, 25: 20, 26: 21, 27: 19, 28: 18, 29: 0,
      30: 0
    }
  },
  {
    year: 2024,
    month: 7, // Luglio
    days: {
      1: 19, 2: 16, 3: 26, 4: 15, 5: 7, 6: 0, 7: 0,
      8: 20, 9: 22, 10: 25, 11: 16, 12: 21, 13: 0, 14: 0,
      15: 14, 16: 18, 17: 18, 18: 22, 19: 12, 20: 0, 21: 0,
      22: 18, 23: 13, 24: 17, 25: 23, 26: 21, 27: 0, 28: 0,
      29: 29, 30: 28, 31: 22
    }
  },
  {
    year: 2024,
    month: 8, // Agosto
    days: {
      1: 19, 2: 11, 3: 0, 4: 0, 5: 10, 6: 5, 7: 5,
      8: 6, 9: 2, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0,
      15: 0, 16: 0, 17: 0, 18: 0, 19: 2, 20: 0, 21: 0,
      22: 0, 23: 0, 24: 0, 25: 0, 26: 7, 27: 7, 28: 8,
      29: 12, 30: 8, 31: 0
    }
  },
  {
    year: 2024,
    month: 9,
    days: {
      1: 0, 2: 17, 3: 24, 4: 14, 5: 11, 6: 6, 7: 0,
      8: 0, 9: 14, 10: 9, 11: 14, 12: 9, 13: 9, 14: 0,
      15: 0, 16: 13, 17: 21, 18: 18, 19: 13, 20: 8, 21: 8,
      22: 0, 23: 20, 24: 18, 25: 17, 26: 9, 27: 16, 28: 0,
      29: 0, 30: 18
    }
  },  
  {
    year: 2024,
    month: 10,
    days: {
      1: 17, 2: 21, 3: 17, 4: 17, 5: 0, 6: 0, 7: 16, 8: 14, 9: 14,
      10: 18, 11: 13, 12: 0, 13: 0, 14: 19, 15: 18, 16: 24, 17: 22, 18: 21,
      19: 0, 20: 0, 21: 21, 22: 21, 23: 20, 24: 21, 25: 20, 26: 3,
      27: 0, 28: 25, 29: 21, 30: 25, 31: 20
    }
  },
  {
    year: 2024,
    month: 11, // Novembre
    days: {
      1: 0, 2: 0, 3: 0,
      4: 23, 5: 17, 6: 14, 7: 16, 8: 14, 9: 0,
      10: 0, 11: 16, 12: 24, 13: 17, 14: 22, 15: 17, 16: 3,
      17: 0, 18: 10, 19: 8, 20: 11, 21: 10, 22: 9, 23: 3,
      24: 0, 25: 23, 26: 23, 27: 14, 28: 15, 29: 7, 30: 0
    }
  },
  {
    year: 2024,
    month: 12, // Dicembre
    days: {
      1: 0,
      2: 15,
      3: 16,
      4: 12,
      5: 9,
      6: 8,
      7: 0,
      8: 0,
      9: 16,
      10: 19,
      11: 23,
      12: 23,
      13: 18,
      14: 0,
      15: 0,
      16: 20,
      17: 24,
      18: 24,
      19: 24,
      20: 29,
      21: 2,
      22: 0,
      23: 29,
      24: 8,
      25: 0,
      26: 0,
      27: 9,
      28: 0,
      29: 0,
      30: 12,
      31: 0
    }
  },
  {
    year: 2025,
    month: 1, // Gennaio
    days: {
      1: 324
    }
  },
  {
    year: 2025,
    month: 2, // Febbraio
    days: {
      1: 330
    }
  },
  {
    year: 2025,
    month: 3, // Marzo
    days: {
      1: 468
    }
  },
  {
    year: 2025,
    month: 4, // Aprile
    days: {
      1: 384
    }
  },
  {
    year: 2025,
    month: 5, // Maggio
    days: {
      1: 442
    }
  },
  {
    year: 2025,
    month: 6, // Giugno
    days: {
      1: 385
    }
  },
];

// Funzioni di utilità

// Funzione per calcolare i turni aggregati per fonico
const aggregaTurniPerFonico = (turni) => {
  const aggregati = turni.reduce((acc, { nome, turni }) => {
    const formattedName = capitalizeName(nome); // Formattiamo il nome correttamente
    if (!acc[formattedName]) acc[formattedName] = 0;
    acc[formattedName] += turni;
    return acc;
  }, {});

  // Restituiamo i dati ordinati in base ai turni in ordine decrescente
  return Object.entries(aggregati)
    .map(([nome, turni]) => ({ nome, turni }))
    .sort((a, b) => b.turni - a.turni);
};

// Funzione per calcolare l'utilizzo delle sale
const aggregaTurniPerSala = (turni) => {
  const aggregati = turni.reduce((acc, { sala, turni }) => {
    if (!acc[sala]) acc[sala] = 0;
    acc[sala] += turni;
    return acc;
  }, {});

  // Restituiamo i dati ordinati in base ai turni in ordine decrescente
  return Object.entries(aggregati)
    .map(([sala, turni]) => ({ sala, turni }))
    .sort((a, b) => b.turni - a.turni);
};


const calculateTotalShifts = (data) => {
  return Object.values(data.days).reduce((total, shifts) => total + shifts, 0);
};

const getWorkdaysInMonth = (year, month) => {
  const date = new Date(year, month - 1, 1);
  let workdays = 0;
  while (date.getMonth() === month - 1) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) workdays++;
    date.setDate(date.getDate() + 1);
  }
  return workdays;
};

const calculateAverageWorkdayShifts = (data) => {
  const total = calculateTotalShifts(data);
  const workdays = getWorkdaysInMonth(data.year, data.month);
  return total / workdays;
};

const getMonthName = (monthNumber) => {
  const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                      'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  return monthNames[monthNumber - 1];
};

const findMaxShiftsDay = (data) => {
  return Object.entries(data.days).reduce((max, [day, shifts]) => {
    return shifts > max.shifts ? { day: parseInt(day), shifts } : max;
  }, { day: 0, shifts: 0 });
};

const findMinShiftsDay = (data) => {
  return Object.entries(data.days).reduce((min, [day, shifts]) => {
    if (shifts === 0) return min;
    return (shifts < min.shifts || min.shifts === 0) ? { day: parseInt(day), shifts } : min;
  }, { day: 0, shifts: 0 });
};

export const getMonthData = (yearMonth) => {
  const [year, month] = yearMonth.split('-').map(Number);
  const monthData = monthsData.find(m => m.year === year && m.month === month);
  
  if (monthData) {
    return {
      totaleTurni: calculateTotalShifts(monthData),
      mediaGiornaliera: calculateAverageWorkdayShifts(monthData),
      massimoTurni: findMaxShiftsDay(monthData),
      minimoTurni: findMinShiftsDay(monthData)
    };
  }
  
  return null;
};

export const getAvailableMonths = () => {
  return monthsData
    .map(m => ({
      value: `${m.year}-${m.month.toString().padStart(2, '0')}`,
      label: `${getMonthName(m.month)} ${m.year}`,
      sortValue: m.year * 12 + m.month
    }))
    .sort((a, b) => b.sortValue - a.sortValue)
    .map(({ value, label }) => ({ value, label }));
};

export const getLatestMonthData = () => {
  const lastMonth = monthsData[monthsData.length - 1];
  return {
    totaleTurni: calculateTotalShifts(lastMonth),
    mediaGiornaliera: calculateAverageWorkdayShifts(lastMonth),
    massimoTurni: findMaxShiftsDay(lastMonth),
    minimoTurni: findMinShiftsDay(lastMonth),
    year: lastMonth.year,
    month: lastMonth.month
  };
};

export const getPreviousMonthData = () => {
  if (monthsData.length > 1) {
    const previousMonth = monthsData[monthsData.length - 2];
    return {
      totaleTurni: calculateTotalShifts(previousMonth),
      mediaGiornaliera: calculateAverageWorkdayShifts(previousMonth),
      massimoTurni: findMaxShiftsDay(previousMonth),
      minimoTurni: findMinShiftsDay(previousMonth),
      year: previousMonth.year,
      month: previousMonth.month
    };
  }
  // Se non c'è un mese precedente disponibile, restituisci dati fittizi
  return {
    totaleTurni: 280,
    mediaGiornaliera: 9.3,
    massimoTurni: { day: 15, shifts: 20 },
    minimoTurni: { day: 30, shifts: 1 },
    year: 2025,
    month: 5
  };
};

export const getAnnualAverageData = () => {
  const totalTurni = monthsData.reduce((total, month) => total + calculateTotalShifts(month), 0);
  const averageTurni = totalTurni / monthsData.length;
  return {
    mediaAnnuale: averageTurni
  };
};

export const getYearData = (year, limitMonth = 12) => {
  const yearData = monthsData.filter(m => m.year.toString() === year && m.month <= limitMonth);
  if (yearData.length > 0) {
    const totaleTurni = yearData.reduce((total, month) => total + calculateTotalShifts(month), 0);
    return {
      totaleTurni,
      mediaMensile: totaleTurni / yearData.length
    };
  }
  return null;
};

// Aggiungi questa nuova funzione per ottenere l'anno e il mese correnti
export const getCurrentYearAndMonth = () => {
  const now = new Date();
  return { currentYear: now.getFullYear(), currentMonth: now.getMonth() + 1 };
};

export const getAvailableYears = () => {
  const years = [...new Set(monthsData.map(m => m.year))];
  return years
    .map(year => ({
      value: year.toString(),
      label: year.toString()
    }))
    .sort((a, b) => b.value - a.value);
};

export const getYearlyData = (year) => {
  const yearData = {};
  monthsData.forEach(month => {
    if (month.year === year) {
      yearData[month.month - 1] = { totaleTurni: calculateTotalShifts(month) };
    }
  });

  if (Object.keys(yearData).length === 0) {
    for (let i = 0; i < 12; i++) {
      yearData[i] = { totaleTurni: 0 };
    }
  }

  return yearData;
};

// Nuove funzioni per i confronti con anni precedenti
export const getSameMonthPreviousYear = () => {
  const lastMonth = monthsData[monthsData.length - 1];
  const targetYear = lastMonth.year - 1;
  const targetMonth = lastMonth.month;
  
  const previousYearMonth = monthsData.find(m => m.year === targetYear && m.month === targetMonth);
  
  if (previousYearMonth) {
    return {
      totaleTurni: calculateTotalShifts(previousYearMonth),
      mediaGiornaliera: calculateAverageWorkdayShifts(previousYearMonth),
      year: targetYear,
      month: targetMonth
    };
  }
  
  return null;
};

export const getSameMonthBestPreviousYear = () => {
  const lastMonth = monthsData[monthsData.length - 1];
  const targetMonth = lastMonth.month;
  
  // Trova tutti i dati dello stesso mese negli anni precedenti
  const sameMonthData = monthsData.filter(m => 
    m.month === targetMonth && m.year < lastMonth.year
  );
  
  if (sameMonthData.length === 0) return null;
  
  // Trova l'anno con il maggior numero di turni per questo mese
  const bestYear = sameMonthData.reduce((best, current) => {
    const currentTotal = calculateTotalShifts(current);
    const bestTotal = calculateTotalShifts(best);
    return currentTotal > bestTotal ? current : best;
  });
  
  return {
    totaleTurni: calculateTotalShifts(bestYear),
    mediaGiornaliera: calculateAverageWorkdayShifts(bestYear),
    year: bestYear.year,
    month: bestYear.month
  };
};

export const getCorrectAnnualAverage = () => {
  const lastMonth = monthsData[monthsData.length - 1];
  const currentYear = lastMonth.year;
  
  // Calcola la media solo sui mesi dell'anno corrente
  const currentYearData = monthsData.filter(m => m.year === currentYear);
  
  if (currentYearData.length === 0) return { mediaAnnuale: 0 };
  
  const totalTurni = currentYearData.reduce((total, month) => total + calculateTotalShifts(month), 0);
  const averageTurni = totalTurni / currentYearData.length;
  
  return {
    mediaAnnuale: averageTurni,
    monthsCount: currentYearData.length
  };
};

export const getBestMonthByDailyAverage = () => {
  if (monthsData.length === 0) return null;
  
  // Trova il mese con la media giornaliera più alta
  const bestMonth = monthsData.reduce((best, current) => {
    const currentAverage = calculateAverageWorkdayShifts(current);
    const bestAverage = calculateAverageWorkdayShifts(best);
    return currentAverage > bestAverage ? current : best;
  });
  
  return {
    totaleTurni: calculateTotalShifts(bestMonth),
    mediaGiornaliera: calculateAverageWorkdayShifts(bestMonth),
    year: bestMonth.year,
    month: bestMonth.month
  };
};
