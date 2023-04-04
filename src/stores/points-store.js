import { defineStore } from 'pinia';
import axios from 'axios';

export const usePointsStore = defineStore('points', {
  state: () => ({
    derinE: [],
    marleneG: [],
    marieL: [],
    anaN: [],
    jhonP: [],
    eliasR: [],
    taniaY: [],
    adrianaZ: [],
    marcoV: [],
    bimarG: [],
    ricardoV: [],
    tatianaV: [],
    jorgeR: [],
    marceloV: [],
    joseV: [],
    joseM: [],
    danielaT: [],
    marioB: [],
    kevinR: [],
    nelsonC: [],
    waraV: [],
    luisR: [],
  }),
  getters: {

  },
  actions: {
    async getTodos() {
      const todos = await axios.get('http://192.168.0.250:3001/api/product/points')
      this.derinE = todos.data.filter((todo) => todo.name === 'derinE')
      this.marleneG = todos.data.filter((todo) => todo.name === 'marleneG')
      this.marieL = todos.data.filter((todo) => todo.name === 'marieL')
      this.anaN = todos.data.filter((todo) => todo.name === 'anaN')
      this.jhonP = todos.data.filter((todo) => todo.name === 'jhonP')
      this.eliasR = todos.data.filter((todo) => todo.name === 'eliasR')
      this.taniaY = todos.data.filter((todo) => todo.name === 'taniaY')
      this.adrianaZ = todos.data.filter((todo) => todo.name === 'adrianaZ')
      this.marcoV = todos.data.filter((todo) => todo.name === 'marcoV')
      this.bimarG = todos.data.filter((todo) => todo.name === 'bimarG')
      this.ricardoV = todos.data.filter((todo) => todo.name === 'ricardoV')
      this.tatianaV = todos.data.filter((todo) => todo.name === 'tatianaV')
      this.jorgeR = todos.data.filter((todo) => todo.name === 'jorgeR')
      this.marceloV = todos.data.filter((todo) => todo.name === 'marceloV')
      this.joseV = todos.data.filter((todo) => todo.name === 'joseV')
      this.joseM = todos.data.filter((todo) => todo.name === 'joseM')
      this.danielaT = todos.data.filter((todo) => todo.name === 'danielaT')
      this.marioB = todos.data.filter((todo) => todo.name === 'marioB')
      this.kevinR = todos.data.filter((todo) => todo.name === 'kevinR')
      this.nelsonC = todos.data.filter((todo) => todo.name === 'nelsonC')
      this.waraV = todos.data.filter((todo) => todo.name === 'waraV')
      this.luisR = todos.data.filter((todo) => todo.name === 'luisR')
    },
    async setderinE(points) {
      console.log(points)
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      //console.log(name.data)
      //this.derinE = points;
    },
    async setmarleneG(points) {
      //console.log(points)
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.marleneG = points;
    },
    async setmarieL(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.marieL = points;
    },
    async setanaN(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.anaN = points;
    },
    async setjhonP(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.jhonP = points;
    },
    async seteliasR(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.eliasR = points;
    },
    async settaniaY(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.taniaY = points;
    },
    async setadrianaZ(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.adrianaZ = points;
    },
    async setmarcoV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.marcoV = points;
    },
    async setbimarG(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.bimarG = points;
    },
    async setricardoV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.ricardoV = points;
    },
    async settatianaV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.tatianaV = points;
    },
    async setjorgeR(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.jorgeR = points;
    },
    async setmarceloV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.marceloV = points;
    },
    async setjoseV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.joseV = points;
    },
    async setjoseM(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.joseM = points;
    },
    async setdanielaT(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.danielaT = points;
    },
    async setmarioB(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.marioB = points;
    },
    async setkevinR(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.kevinR = points;
    },
    async setnelsonC(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.nelsonC = points;
    },
    async setwaraV(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.waraV = points;
    },
    async setluisR(points) {
      const name = await axios.post('http://192.168.0.250:3001/api/product/points', points)
      console.log(name.data)
      //this.luisR = points;
    },
  },
});
