import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://nlwheat.arthursantos.tech:2083'
})