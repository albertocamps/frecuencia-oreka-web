import imgHolistico from '../assets/MasajeHolisticoCalido.png'
import imgPiedrasCalientes from '../assets/MasajePiedrasCalientesTatuajes.png'
import imgAyurbeda from '../assets/MasajeAyurvedaCalido.png'
import imgQuiromasaje from '../assets/Quiromasaje.jpg'
import imgDeportivo from '../assets/QuiromasajeDeportivoCrystal.png'
import imgPiernas from '../assets/MasajePiernasCrystal.png'
import imgSonoterapia from '../assets/SonoterapiaCalida.png'

const massages = [
  { id: 'masaje-holistico', name: 'massage_holistic_title', description: 'massage_holistic_description', img: imgHolistico },
  { id: 'masaje-ayurveda', name: 'massage_ayurveda_title', description: 'massage_ayurveda_description', img: imgAyurbeda },
  { id: 'masaje-piedras-calientes', name: 'massage_hot_stones_title', description: 'massage_hot_stones_description', img: imgPiedrasCalientes },
  { id: 'massage_sonotherapy_title', name: 'massage_sonotherapy_title', description: 'massage_sonotherapy_description', img: imgSonoterapia },
  { id: 'quiromasaje', name: 'quiromasaje_title', description: 'quiromasaje_description', img: imgQuiromasaje },
  { id: 'masaje-ventosas', name: 'massage_cupping_title', description: 'massage_cupping_description', img: imgQuiromasaje },
  { id: 'quiromasaje-deportivo', name: 'sports_massage_title', description: 'sports_massage_description', img: imgDeportivo },
  { id: 'masaje-piernas', name: 'massage_legs_title', description: 'massage_legs_description', img: imgPiernas },
]

export default massages;
