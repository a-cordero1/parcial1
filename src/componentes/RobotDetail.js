import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios'; 
import translations from './Translations'; 

const RobotDetail = () => {
  const [robot, setRobot] = useState(null); 
  const [language, setLanguage] = useState('es'); 
  const [error, setError] = useState(false); 
  const { id } = useParams(); 

  useEffect(() => {
    const fetchRobotDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/robots/${id}`);
        setRobot(response.data); 
        setError(false); 
      } catch (err) {
        console.error('Error fetching robot details:', err);
        setError(true); 
      }
    };

    fetchRobotDetail(); 
  }, [id]); 

  const getImageUrl = (url) => {
    if (url.includes('github.com')) {
      return url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    }
    return 'https://via.placeholder.com/400'; // Placeholder image as fallback
  };
  

  if (error) {
    return <h2>{translations[language].details.title} no encontrado</h2>; 
  }

  if (!robot) {
    return <p>Cargando detalles del robot...</p>; 
  }

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '20px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    detailsList: {
      textAlign: 'left',
    },
    detailItem: {
      margin: '10px 0',
      fontSize: '16px',
    },
    detailTitle: {
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{robot.nombre}</h2>
      <img src={getImageUrl(robot.imagen)} alt={robot.nombre} style={styles.image} />
      <ul style={styles.detailsList}>
        <li style={styles.detailItem}>
          <span style={styles.detailTitle}>➔ {translations[language].details.year}:</span> {robot.añoFabricacion}
        </li>
        <li style={styles.detailItem}>
          <span style={styles.detailTitle}>➔ {translations[language].details.processor}:</span> {robot.capacidadProcesamiento}
        </li>
        <li style={styles.detailItem}>
          <span style={styles.detailTitle}>➔ {translations[language].details.features}:</span> {robot.humor}
        </li>
      </ul>
    </div>
  );
};

export default RobotDetail;
