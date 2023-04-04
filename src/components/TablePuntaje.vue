<script setup>
import { onMounted, computed, ref } from "vue";
import { usePointsStore } from "src/stores/points-store";
import { useQuasar } from 'quasar'
const $q = useQuasar()

const pointsStore = usePointsStore();
const messages = ref([
  "Yo soy el arquitecto de mi destino. Puedo lograr lo que he soñado por mí mismo.",
  "No le tengo miedo a los fracasos. Aprendo de mis errores y convierto los fracasos en resultados favorables.",
  "Yo soy capaz de atraer abundancia diaria.",
  "Estoy agradecido de tener abundancia ilimitada en mi vida.",
  "Yo soy un imán para el dinero.",
  "Tengo derecho a la libertad financiera y a una vida sin preocupaciones.",
  "Yo celebro la abundancia de todo en mi vida.",
  "Estoy decidido a ser feliz para siempre.",
  "Yo soy lo suficientemente abundante para cumplir todos mis deseos.",
  "Estoy contento conmigo y no necesito demostrarlo.",
  "Yo soy suficiente, yo soy fuerte.",
  "Tengo la suerte de ser feliz.",
  "Yo confío en mis habilidades.",
  "Me encanta estar rodeada de gente alegre.",
  "Yo tengo el poder de superar obstáculos.",
  "Estoy decidido a estar más saludable día a día.",
  "Yo soy única y brillante.",
  "Estoy feliz y satisfecho con mi presente.",
  "Yo soy más fuerte de lo que parezco.",
  "Sé que se necesita tiempo para cambiar las cosas y curarte.",
  "Yo sé que puedo hacer maravillas.",
  "Estoy bien con mis imperfecciones.",
  "Yo soy la mejor versión de mí mismo.",
  "Estoy conectado conmigo mismo en niveles más profundos para lograr todo lo que deseo.",
  "Yo soy encantador.",
  "Mis acciones me acercan a mi mayor propósito.",
  "Yo soy persistente en perseguir mis sueños.",
  "Estoy trabajando en la dirección correcta.",
  "Yo soy todo oídos para mis ángeles guardianes para guiarme hacia mi propósito.",
  "Creo en mis ideas.",
  "Yo soy un cazador de sueños.",
  "Mantengo un peso ideal para llevar una vida sana.",
  "Cuido mi cuerpo.",
  "Yo soy vibrante en mi mente y espíritu.",
  "Todo está sucediendo para mi mayor bien.",
  "Yo soy el responsable de mi crecimiento espiritual.",
  "Yo soy grandioso y todos mis planes son grandiosos para mí.",
  "Yo soy un alquimista.",
  "Estoy obteniendo todo lo que quise tener.",
  "Yo soy una fuerza para el bien en el mundo.",
  "Yo soy una expresión divina",
  "Me dedico a descubrir las gemas que ya están aquí.",
  "Yo soy suficiente y tengo todo lo que necesito para llegar a donde quiero estar.",
  "Estoy en el camino correcto. Me estoy moviendo en la dirección correcta.",
  "Yo soy digno de todas las cosas maravillosas.",
  "Estoy en el lugar exacto en el que necesito estar para llegar a donde quiero estar.",
  "Yo creo firmemente en mis ideas.",
  "Estoy aprendiendo a dejar ir al miedo.",
  "Elijo la buena salud por encima de todo.",
  "Yo soy ilimitado.",
  "Estoy aprendiendo a respetar el proceso, aun cuando no lo entiendo.",
  "Yo soy amor incondicional.",
]);
const valor = ref("")
$q.fullscreen.request()
//pointsStore.getTodos()
onMounted(() => {
  setInterval(() => {
    pointsStore.getTodos();
    random();
  }, 120000);
})
const random = () => {
  valor.value = messages.value[Math.floor(Math.random() * messages.value.length)];
}
random()
pointsStore.getTodos();
/* const randomMessage = computed(() => {
  return messages.value[Math.floor(Math.random() * messages.value.length)];
}) */
/* const randomMessage = computed(() => {
      return messages.value[Math.floor(Math.random() * messages.value.length)];
    }); */
</script>
<template>
  <div class="row" style="background-image: url('src/assets/fondo2.jpeg')">
    <div class="col-3 flex flex-center">
      <div class="text-center text-h4 "> </div>
      <p class="message q-ma-lg text-white text-bold q-pa-md text-h5 text-center"
        style="background-color:green; filter:alpha(opacity=60); opacity:.6;">{{ valor }}</p>
    </div>
    <q-markup-table dense separator="cell" class="col-9">
      <thead>
        <tr>
          <th class="text-left" style="font-size: 15px; font-weight: bold;">Nombre</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Higiene</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Uniforme</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Autonom.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Puntual.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Compañ.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Agilid.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Actitud</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Creativ.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Comprom.</th>
          <th class="text-right" style="font-size: 15px; font-weight: bold;">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Derin Edgar Choque</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].higiene : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].uniforme : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].autonomia : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].puntualidad : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].companerismo : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].agilidad : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].actitud : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].creatividad : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ?
            pointsStore.derinE[0].compromiso : "" }} </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.derinE.length > 0 ? pointsStore.derinE[0].sum
            :
            "" }} </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Marlene Gomez Sanizo</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].higiene : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].uniforme : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].agilidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].actitud : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ?
            pointsStore.marleneG[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marleneG.length > 0 ? pointsStore.marleneG[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Marie Lizeth Arenas </td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ?
            pointsStore.marieL[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marieL.length > 0 ? pointsStore.marieL[0].sum :
            ""
          }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Billy Mendieta Cabrera</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ? pointsStore.billyM[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].uniforme :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].autonomia :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].agilidad :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ? pointsStore.billyM[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ?
            pointsStore.billyM[0].compromiso
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.billyM.length > 0 ? pointsStore.billyM[0].sum :
            "" }}

          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Jhon Deymar Ponce</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].higiene :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].uniforme
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].agilidad
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].actitud :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ?
            pointsStore.jhonP[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.jhonP.length > 0 ? pointsStore.jhonP[0].sum : ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Elias Nicanor Rodas</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ?
            pointsStore.eliasR[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.eliasR.length > 0 ? pointsStore.eliasR[0].sum :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Tania Yarhui Arancibia</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].higiene
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].actitud
            :
            "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ?
            pointsStore.taniaY[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.taniaY.length > 0 ? pointsStore.taniaY[0].sum :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Adriana Zambrana</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ?
            pointsStore.adrianaZ[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.adrianaZ.length > 0 ? pointsStore.adrianaZ[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Marco Antonio Villca</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].companerismo
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ?
            pointsStore.marcoV[0].compromiso
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.marcoV.length > 0 ? pointsStore.marcoV[0].sum :
            ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Bimar Garnica</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].autonomia
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].puntualidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].companerismo
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].creatividad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ?
            pointsStore.bimarG[0].compromiso
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.bimarG.length > 0 ? pointsStore.bimarG[0].sum :
            ""
          }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Ricardo Vaca Abacai</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ?
            pointsStore.ricardoV[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.ricardoV.length > 0 ? pointsStore.ricardoV[0].sum
            : "" }}</td>
        </tr>

        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold;">Tatiana Vaca</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].higiene
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].uniforme
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].autonomia : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].puntualidad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].companerismo : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].agilidad
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].actitud
            : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].creatividad : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ?
            pointsStore.tatianaV[0].compromiso : "" }}</td>
          <td class="text-right" style="font-size: 15px;">{{ pointsStore.tatianaV.length > 0 ? pointsStore.tatianaV[0].sum
            :
            "" }}</td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Jorge Rivera
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].higiene : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].uniforme : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].autonomia : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].puntualidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].companerismo : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].agilidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].actitud : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].creatividad : 0
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].compromiso : 0
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.jorgeR.length > 0 ? pointsStore.jorgeR[0].sum : 0 }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Marcelo Villanueva
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].uniforme : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].autonomia : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].puntualidad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].companerismo :
              "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].agilidad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].creatividad :
              "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].compromiso :
              "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marceloV.length > 0 ? pointsStore.marceloV[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Jose Luis Villca
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].compromiso : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseV.length > 0 ? pointsStore.joseV[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Jose Carlos Montenegro
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].compromiso : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.joseM.length > 0 ? pointsStore.joseM[0].sum : "" }}
          </td>
        </tr>

        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Mario Berty Vaca
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].compromiso : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.marioB.length > 0 ? pointsStore.marioB[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Kevin Rodolfo Rodriguez
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].compromiso : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.kevinR.length > 0 ? pointsStore.kevinR[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Nelson Caipe Cáceres
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].puntualidad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].companerismo : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].creatividad : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].compromiso : ""
            }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.nelsonC.length > 0 ? pointsStore.nelsonC[0].sum : "" }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Wara Vallejos
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].higiene : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].uniforme : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].autonomia : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].puntualidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].companerismo : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].agilidad : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].actitud : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].creatividad : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].compromiso : 0 }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.waraV.length > 0 ? pointsStore.waraV[0].sum : 0 }}
          </td>
        </tr>
        <tr>
          <td class="text-left" style="font-size: 15px; font-weight: bold">
            Luis Fernando Rodas
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].higiene : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].uniforme : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].autonomia : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].puntualidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].companerismo : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].agilidad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].actitud : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].creatividad : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].compromiso : "" }}
          </td>
          <td class="text-right" style="font-size: 15px">
            {{ pointsStore.luisR.length > 0 ? pointsStore.luisR[0].sum : "" }}
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>



<style scoped></style>
