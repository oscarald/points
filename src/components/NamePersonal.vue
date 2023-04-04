<script setup>
import { ref } from 'vue'
import { usePointsStore } from "src/stores/points-store";
import { useQuasar } from 'quasar'
const $q = useQuasar()

const pointsStore = usePointsStore();

const tab = ref('Derin Edgar Choque Ortega')
const derinE = ref({})
const marleneG = ref({})
const marieL = ref({})
const anaN = ref({})
const jhonP = ref({})
const eliasR = ref({})
const taniaY = ref({})
const adrianaZ = ref({})
const marcoV = ref({})
const bimarG = ref({})
const ricardoV = ref({})
const tatianaV = ref({})
const jorgeR = ref({})
const marceloV = ref({})
const joseV = ref({})
const joseM = ref({})
const danielaT = ref({})
const marioB = ref({})
const kevinR = ref({})
const nelsonC = ref({})
const waraV = ref({})
const luisR = ref({})
const billyM = ref({})




const splitterModel = ref(20)
const guardarderinE = () => {
  let sum = 0;
  for (let key in derinE.value) {
    sum += parseInt(derinE.value[key]);
    derinE.value.sum = sum;
  }
  derinE.value.name = 'derinE'
  pointsStore.setderinE(derinE.value)
  derinE.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarmarleneG = () => {
  let sum = 0;
  for (let key in marleneG.value) {
    sum += parseInt(marleneG.value[key]);
    marleneG.value.sum = sum;
  }
  marleneG.value.name = 'marleneG'
  pointsStore.setmarleneG(marleneG.value)
  marleneG.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarmarieL = () => {
  let sum = 0;
  for (let key in marieL.value) {
    sum += parseInt(marieL.value[key]);
    marieL.value.sum = sum;
  }
  marieL.value.name = 'marieL'
  pointsStore.setmarieL(marieL.value)
  marieL.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}

const guardarjhonP = () => {
  let sum = 0;
  for (let key in jhonP.value) {
    sum += parseInt(jhonP.value[key]);
    jhonP.value.sum = sum;
  }
  jhonP.value.name = 'jhonP'
  pointsStore.setjhonP(jhonP.value)
  jhonP.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardareliasR = () => {
  let sum = 0;
  for (let key in eliasR.value) {
    sum += parseInt(eliasR.value[key]);
    eliasR.value.sum = sum;
  }
  eliasR.value.name = 'eliasR'

  pointsStore.seteliasR(eliasR.value)
  eliasR.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardartaniaY = () => {
  let sum = 0;
  for (let key in taniaY.value) {
    sum += parseInt(taniaY.value[key]);
    taniaY.value.sum = sum;
  }
  taniaY.value.name = 'taniaY'
  pointsStore.settaniaY(taniaY.value)
  taniaY.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardaradrianaZ = () => {
  let sum = 0;
  for (let key in adrianaZ.value) {
    sum += parseInt(adrianaZ.value[key]);
    adrianaZ.value.sum = sum;
  }
  adrianaZ.value.name = 'adrianaZ'
  pointsStore.setadrianaZ(adrianaZ.value)
  adrianaZ.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarmarcoV = () => {
  let sum = 0;
  for (let key in marcoV.value) {
    sum += parseInt(marcoV.value[key]);
    marcoV.value.sum = sum;
  }
  marcoV.value.name = 'marcoV'
  pointsStore.setmarcoV(marcoV.value)
  marcoV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarbimarG = () => {
  let sum = 0;
  for (let key in bimarG.value) {
    sum += parseInt(bimarG.value[key]);
    bimarG.value.sum = sum;
  }
  bimarG.value.name = 'bimarG'
  pointsStore.setbimarG(bimarG.value)
  bimarG.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarricardoV = () => {
  let sum = 0;
  for (let key in ricardoV.value) {
    sum += parseInt(ricardoV.value[key]);
    ricardoV.value.sum = sum;
  }
  ricardoV.value.name = 'ricardoV'
  pointsStore.setricardoV(ricardoV.value)
  ricardoV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarjorgeR = () => {
  let sum = 0;
  for (let key in jorgeR.value) {
    sum += parseInt(jorgeR.value[key]);
    jorgeR.value.sum = sum;
  }
  jorgeR.value.name = 'jorgeR'
  pointsStore.setjorgeR(jorgeR.value)
  jorgeR.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardartatianaV = () => {
  let sum = 0;
  for (let key in tatianaV.value) {
    sum += parseInt(tatianaV.value[key]);
    tatianaV.value.sum = sum;
  }
  tatianaV.value.name = 'tatianaV'
  pointsStore.settatianaV(tatianaV.value)
  tatianaV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarmarceloV = () => {
  let sum = 0;
  for (let key in marceloV.value) {
    sum += parseInt(marceloV.value[key]);
    marceloV.value.sum = sum;
  }
  marceloV.value.name = 'marceloV'
  pointsStore.setmarceloV(marceloV.value)
  marceloV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarjoseV = () => {
  let sum = 0;
  for (let key in joseV.value) {
    sum += parseInt(joseV.value[key]);
    joseV.value.sum = sum;
  }
  joseV.value.name = 'joseV'
  pointsStore.setjoseV(joseV.value)
  joseV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarjoseM = () => {
  let sum = 0;
  for (let key in joseM.value) {
    sum += parseInt(joseM.value[key]);
    joseM.value.sum = sum;
  }
  joseM.value.name = 'joseM'
  pointsStore.setjoseM(joseM.value)
  joseM.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}

const guardarmarioB = () => {
  let sum = 0;
  for (let key in marioB.value) {
    sum += parseInt(marioB.value[key]);
    marioB.value.sum = sum;
  }
  marioB.value.name = 'marioB'
  pointsStore.setmarioB(marioB.value)
  marioB.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarkevinR = () => {
  let sum = 0;
  for (let key in kevinR.value) {
    sum += parseInt(kevinR.value[key]);
    kevinR.value.sum = sum;
  }
  kevinR.value.name = 'kevinR'
  pointsStore.setkevinR(kevinR.value)
  kevinR.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarnelsonC = () => {
  let sum = 0;
  for (let key in nelsonC.value) {
    sum += parseInt(nelsonC.value[key]);
    nelsonC.value.sum = sum;
  }
  nelsonC.value.name = 'nelsonC'
  pointsStore.setnelsonC(nelsonC.value)
  nelsonC.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarwaraV = () => {
  let sum = 0;
  for (let key in waraV.value) {
    sum += parseInt(waraV.value[key]);
    waraV.value.sum = sum;
  }
  waraV.value.name = 'waraV'
  pointsStore.setwaraV(waraV.value)
  waraV.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarluisR = () => {
  let sum = 0;
  for (let key in luisR.value) {
    sum += parseInt(luisR.value[key]);
    luisR.value.sum = sum;
  }
  luisR.value.name = 'luisR'
  pointsStore.setluisR(luisR.value)
  luisR.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
const guardarBillyM = () => {
  let sum = 0;
  for (let key in billyM.value) {
    sum += parseInt(billyM.value[key]);
    billyM.value.sum = sum;
  }
  billyM.value.name = 'billyM'
  pointsStore.setbillyM(billyM.value)
  billyM.value = {}
  $q.notify({
    message: 'Puntajes agregados correctamente',
    color: 'primary'
  })
}
</script>
<template>
  <div>
    <q-splitter v-model="splitterModel" style="height: 800px">

      <template v-slot:before>
        <q-tabs v-model="tab" vertical class="text-teal">
          <q-tab name="Derin Edgar Choque Ortega" label="Derin Edgar Choque Ortega" />
          <q-tab name="Marlene Gomez Sanizo" label="Marlene Gomez Sanizo" />
          <q-tab name="Marie Lizeth Arenas Claros" label="Marie Lizeth Arenas Claros" />
          <q-tab name="Billy Mendieta Cabrera" label="Billy Mendieta Cabrera" />
          <q-tab name="Jhon Deymar Ponce Marquez" label="Jhon Deymar Ponce Marquez" />
          <q-tab name="Elias Nicanor Rodas Vargas" label="Elias Nicanor Rodas Vargas" />
          <q-tab name="Tania Yarhui Arancibia" label="Tania Yarhui Arancibia" />
          <q-tab name="Adriana Zambrana" label="Adriana Zambrana" />
          <q-tab name="Marco Antonio Villca Leon" label="Marco Antonio Villca Leon" />
          <q-tab name="Bimar Garnica" label="Bimar Garnica" />
          <q-tab name="Ricardo Vaca Abacai" label="Ricardo Vaca Abacai" />
          <q-tab name="Tatiana Vaca" label="Tatiana Vaca" />
          <q-tab name="Jorge Rivera" label="Jorge Rivera" />
          <q-tab name="Marcelo Villanueva" label="Marcelo Villanueva" />
          <q-tab name="Jose Luis Villca Leon" label="Jose Luis Villca Leon" />
          <q-tab name="Jose Carlos Montenegro Virrueta" label="Jose Carlos Montenegro Virrueta" />

          <q-tab name="Mario Berty Vaca" label="Mario Berty Vaca" />
          <q-tab name="Kevin Rodolfo Rodriguez" label="Kevin Rodolfo Rodriguez" />
          <q-tab name="Nelson Caipe Cáceres" label="Nelson Caipe Caceres" />
          <q-tab name="Wara Vallejos" label="Wara Vallejos" />
          <q-tab name="Luis Fernando Rodas Sanguino" label="Luis Fernando Rodas Sanguino" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels v-model="tab" animated swipeable vertical transition-prev="jump-up" transition-next="jump-up">
          <q-tab-panel name="Derin Edgar Choque Ortega">
            <div class="text-h4 q-mb-md">Puntajes Derin Edgar Choque Ortega</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarderinE">
                <q-input filled type="number" v-model="derinE.higiene" label="Higiene" la lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="derinE.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Marlene Gomez Sanizo">
            <div class="text-h4 q-mb-md">Puntajes Marlene Gomez Sanizo</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarmarleneG">
                <q-input filled type="number" v-model="marleneG.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marleneG.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Marie Lizeth Arenas Claros">
            <div class="text-h4 q-mb-md">Puntajes Marie Lizeth Arenas Claros</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarmarieL">
                <q-input filled type="number" v-model="marieL.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marieL.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Billy Mendieta Cabrera">
            <div class="text-h4 q-mb-md">Puntajes Billy Mendieta Cabrera</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarBillyM">
                <q-input filled type="number" v-model="billyM.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="billyM.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Jhon Deymar Ponce Marquez">
            <div class="text-h4 q-mb-md">Puntajes Jhon Deymar Ponce Marquez</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarjhonP">
                <q-input filled type="number" v-model="jhonP.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jhonP.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Elias Nicanor Rodas Vargas">
            <div class="text-h4 q-mb-md">Puntajes Elias Nicanor Rodas Vargas</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardareliasR">
                <q-input filled type="number" v-model="eliasR.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="eliasR.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Tania Yarhui Arancibia">
            <div class="text-h4 q-mb-md">Puntajes Tania Yarhui Arancibia</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardartaniaY">
                <q-input filled type="number" v-model="taniaY.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="taniaY.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Marco Antonio Villca Leon">
            <div class="text-h4 q-mb-md">Puntajes Marco Antonio Villca Leon</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarmarcoV">
                <q-input filled type="number" v-model="marcoV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marcoV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Adriana Zambrana">
            <div class="text-h4 q-mb-md">Puntajes Adriana Zambrana</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardaradrianaZ">
                <q-input filled type="number" v-model="adrianaZ.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="adrianaZ.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Bimar Garnica">
            <div class="text-h4 q-mb-md">Puntajes Bimar Garnica</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarbimarG">
                <q-input filled type="number" v-model="bimarG.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="bimarG.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Tatiana Vaca">
            <div class="text-h4 q-mb-md">Puntajes Tatiana Vaca</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardartatianaV">
                <q-input filled type="number" v-model="tatianaV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="tatianaV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Jorge Rivera">
            <div class="text-h4 q-mb-md">Puntajes Jorge Rivera</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarjorgeR">
                <q-input filled type="number" v-model="jorgeR.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="jorgeR.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Marcelo Villanueva">
            <div class="text-h4 q-mb-md">Puntajes Marcelo Villanueva</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarmarceloV">
                <q-input filled type="number" v-model="marceloV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marceloV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Jose Luis Villca Leon">
            <div class="text-h4 q-mb-md">Puntajes Jose Luis Villca Leon</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarjoseV">
                <q-input filled type="number" v-model="joseV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Jose Carlos Montenegro Virrueta">
            <div class="text-h4 q-mb-md">Puntajes Jose Carlos Montenegro Virrueta</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarjoseM">
                <q-input filled type="number" v-model="joseM.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="joseM.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Mario Berty Vaca">
            <div class="text-h4 q-mb-md">Puntajes Mario Berty Vaca</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarmarioB">
                <q-input filled type="number" v-model="marioB.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="marioB.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Kevin Rodolfo Rodriguez">
            <div class="text-h4 q-mb-md">Puntajes Kevin Rodolfo Rodriguez</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarkevinR">
                <q-input filled type="number" v-model="kevinR.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="kevinR.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Nelson Caipe Cáceres">
            <div class="text-h4 q-mb-md">Puntajes Nelson Caipe Cáceres</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarnelsonC">
                <q-input filled type="number" v-model="nelsonC.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="nelsonC.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Wara Vallejos">
            <div class="text-h4 q-mb-md">Puntajes Wara Vallejos</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarwaraV">
                <q-input filled type="number" v-model="waraV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="waraV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Luis Fernando Rodas Sanguino">
            <div class="text-h4 q-mb-md">Puntajes Luis Fernando Rodas Sanguino</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarluisR">
                <q-input filled type="number" v-model="luisR.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="luisR.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Ricardo Vaca Abacai">
            <div class="text-h4 q-mb-md">Puntajes Ricardo Vaca Abacai</div>
            <div class="row" style="min-width: 500px;">
              <q-form class="col-12 q-gutter-sm" @submit="guardarricardoV">
                <q-input filled type="number" v-model="ricardoV.higiene" label="Higiene" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.uniforme" label="Uniforme" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.autonomia" label="Autonomía" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.puntualidad" label="Puntualidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.companerismo" label="Compañerismo" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.compromiso" label="Compromiso" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.agilidad" label="Agilidad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.actitud" label="Actitud" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-input filled type="number" v-model="ricardoV.creatividad" label="Creatividad" lazy-rules
                  :rules="[val => !!val || 'Este campo es obligatorio']" />
                <q-btn type="submit" color="primary" label="Guardar" />
              </q-form>
            </div>
          </q-tab-panel>



        </q-tab-panels>
      </template>

    </q-splitter>
  </div>
</template>


<style lang="scss" scoped></style>
