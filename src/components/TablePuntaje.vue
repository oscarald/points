<script setup>
import { usePointsStore } from "src/stores/points-store";
import { useQuasar } from 'quasar'
const $q = useQuasar()

const pointsStore = usePointsStore();

$q.fullscreen.request()
pointsStore.getTodos()
</script>
<template>
  <div>
    <div class="text-center text-h3 q-mb-md">Tabla de puntajes mensual</div>
    <q-markup-table dense separator="cell">
      <thead>
        <tr>
          <th class="text-left" style="font-size: 18px; font-weight: bold;">Nombre</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Higiene</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Uniforme</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Autonomía</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Puntualidad</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Compañerismo</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Agilidad</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Actitud</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Creatividad</th>
          <th class="text-right" style="font-size: 18px; font-weight: bold;">Total Puntos</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Derin Edgar Choque Ortega</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].higiene : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].uniforme : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].autonomia : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].puntualidad : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].companerismo : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].agilidad : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].actitud : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].creatividad : "" }} </td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.derinE.length > 0 ? pointsStore.derinE[0].sum
            :
            "" }} </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Marlene Gomez Sanizo</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].higiene : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].uniforme : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].agilidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].actitud : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marleneG.length > 0 ? pointsStore.marleneG[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Marie Lizeth Arenas Claros</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].sum :
            ""
          }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Ana Maria Noza Ponce</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].higiene :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].uniforme :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].autonomia :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ?
            pointsStore.anaN[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].agilidad :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].actitud :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.anaN.length > 0 ? pointsStore.anaN[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Jhon Deymar Ponce Marquez</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].higiene :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].uniforme
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].agilidad
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].actitud :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].sum : ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Elias Nicanor Rodas Vargas</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].sum :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Tania Yarhui Arancibia</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].sum :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Adriana Zambrana</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.adrianaZ.length > 0 ? pointsStore.adrianaZ[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Marco Antonio Villca Leon</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].companerismo
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].sum :
            ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Bimar Garnica</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].companerismo
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].sum :
            ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Ricardo Vaca Abacai</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.ricardoV.length > 0 ? pointsStore.ricardoV[0].sum
            : "" }}</td>
        </tr>

        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold;">Tatiana Vaca</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 20px;">{{ pointsStore.tatianaV.length > 0 ? pointsStore.tatianaV[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Jorge Rivera
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].higiene : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].uniforme : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].autonomia : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].puntualidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].companerismo : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].agilidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].actitud : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].creatividad : 0
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].sum : 0 }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Marcelo Villanueva
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].uniforme : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].autonomia : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].puntualidad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].companerismo :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].agilidad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].creatividad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Jose Luis Villca Leon
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Jose Carlos Montenegro Virrueta
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Daniela Torrico
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].uniforme : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].autonomia : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].puntualidad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].companerismo :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].agilidad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].creatividad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.danielaT.length > 0 ? pointsStore.danielaT[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Mario Berty Vaca
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Kevin Rodolfo Rodriguez
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Nelson Caipe Cáceres
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].puntualidad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].creatividad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Wara Vallejos
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].higiene : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].uniforme : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].autonomia : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].puntualidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].companerismo : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].agilidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].actitud : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].creatividad : 0 }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].sum : 0 }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 20px; font-weight: bold">
            Luis Fernando Rodas Sanguino
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 20px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].sum : "" }}
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>



<style lang="scss" scoped></style>
