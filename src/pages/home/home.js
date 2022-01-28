import "./home.scss";
import EMPOWERMENT from "../../assets/images/EMPOWERMENT.svg";
import ENGAGEMENT from "../../assets/images/ENGAGEMENT.svg";
import EXCELLENCE from "../../assets/images/EXCELLENCE.svg";

(() => {
  const cards = Array.from(document.querySelectorAll(".lesson"));
  const cardsWithPropaedeutic = cards.filter(
    (card) => card.dataset.propaedeutic
  );
  cardsWithPropaedeutic.forEach((card) => {
    const propaedeuticCardId = card.getAttribute("data-propaedeutic");
    const propaedeuticCardStatus = cards.find(
      (card) => card.id === propaedeuticCardId
    ).dataset.status;
    if(propaedeuticCardStatus!=='done'){
      card.setAttribute('blocked', '');
    }
  });  
})();

// const areas = [
//   {
//     areaId: "1",
//     areaTitle: "ALL",
//     courses: [
//       {
//         courseId: "1",
//         courseTitle: "BE A KIKO BRAND AMBASSADOR",
//         lessons: [
//           {
//             lessonId: "1",
//             program: "ENGAGEMENT",
//             type: "Event",
//             lessonTitle: "KIKO - Training",
//             status: "todo",
//           },
//           {
//             lessonId: "2",
//             program: "EMPOWERMENT",
//             type: "Online Class",
//             lessonTitle: "Il make-up e l'armonia dei colori",
//             status: "todo",
//           },
//           {
//             lessonId: "3",
//             program: "EXCELLENCE",
//             type: "Online Class",
//             lessonTitle: "Boost!",
//             status: "progress",
//           },
//           {
//             lessonId: "4",
//             program: "EXCELLENCE",
//             type: "Online Class",
//             lessonTitle: "ANALYSE",
//             status: "done",
//           },
//           {
//             lessonId: "5",
//             program: "EXCELLENCE",
//             type: "Online Class",
//             lessonTitle: "Boost! - 2",
//             propaedeutic: "4",
//             status: "todo",
//           },
//         ],
//       },
//     ],
//   },
// ];
// console.log(JSON.stringify(areas));
