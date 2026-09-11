import imgHolistico from '../assets/MasajeHolisticoCalido.png'
import imgPiedrasCalientes from '../assets/MasajePiedrasCalientesTatuajes.png'
import imgAyurbeda from '../assets/MasajeAyurvedaCalido.png'
import imgQuiromasaje from '../assets/Quiromasaje.jpg'
import imgPiernas from '../assets/MasajePiernas.jpg'
import imgSonoterapia from '../assets/SonoterapiaCalida.png'

const massages = [
  { id: 'masaje-holistico', name: 'massage_holistic_title', description: 'massage_holistic_description', duration: 'massage_holistic_duration', price: 'massage_holistic_price', img: imgHolistico },
  { id: 'masaje-ayurveda', name: 'massage_ayurveda_title', description: 'massage_ayurveda_description', duration: 'massage_ayurveda_duration', price: 'massage_ayurveda_price', img: imgAyurbeda },
  { id: 'masaje-piedras-calientes', name: 'massage_hot_stones_title', description: 'service_coming_description', duration: 'service_coming_duration', price: 'service_coming_price', img: imgPiedrasCalientes },
  { id: 'massage_sonotherapy_title', name: 'massage_sonotherapy_title', description: 'massage_sonotherapy_description', duration: 'massage_sonotherapy_duration', price: 'massage_sonotherapy_price', img: imgSonoterapia },
  { id: 'quiromasaje', name: 'quiromasaje_title', description: 'quiromasaje_description', duration: 'quiromasaje_duration', price: 'quiromasaje_price', img: imgQuiromasaje },
  { id: 'masaje-ventosas', name: 'massage_cupping_title', description: 'service_coming_description', duration: 'service_coming_duration', price: 'service_coming_price', img: imgQuiromasaje },
  { id: 'quiromasaje-deportivo', name: 'sports_massage_title', description: 'service_coming_description', duration: 'service_coming_duration', price: 'service_coming_price', img: imgPiernas },
  { id: 'masaje-piernas', name: 'massage_legs_title', description: 'massage_legs_description', duration: 'massage_legs_duration', price: 'massage_legs_price', img: imgPiernas },
]

export default massages;
